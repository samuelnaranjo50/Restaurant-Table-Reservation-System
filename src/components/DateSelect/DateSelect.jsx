/* fetchAPI */
import { fetchAPI } from '../Api.js/Api'
// Other import

import {useReservationFormReducer} from '../../context/reservationReducer'
import styles from "./DateSelect.module.css"
import { useReducer, useEffect } from 'react'


//Component 

    //Error wrapper
import ErrorFeedbackMessage from '../ErrorFeedbackMessage/ErrorFeedbackMessage'
// Icons

import dateIcon from '../../assets/icons/date-icon.svg'
import timeIcon from '../../assets/icons/time-icon.svg'
import { date } from 'yup'

export default function DateSelect (){

    const {reservationState, reservationDispatch, getFieldError} = useReservationFormReducer()


    // Fetching data when a change in date occurs
    const handledateChangeForAvailability = ()=>{

        let timesAvailableAtDate = fetchAPI(new Date(reservationState.date.value));
        reservationDispatch({type: "set-times", field: "availableTimes",  value: timesAvailableAtDate})
    }


    let currentAvailableTimesCollection = reservationState.availableTimes.array.map((time) => {
    return <option key={time}>{time}</option>
} )

    return(
    <div className={styles.ComponentContainer}>
        {/*Component for date and time*/ }
        <h2>CHOOSE YOUR DATE & TIME </h2>
        <div className={styles.FieldContainer}>
            <img src={dateIcon} alt="date icon" />
            <label htmlFor="date" className={styles.LabelContainer}>Date</label>
            <input id="date" value={reservationState.date.value} className={styles.InputFieldTrigger} type='date' onChange={(e)=>{
                handledateChangeForAvailability()
                reservationDispatch({type: 'element-blur', field: e.target.id, value: e.target.value})}} 
                onBlur={(e)=>{reservationDispatch({type: 'element-change', field: e.target.id, value: e.target.value})}}/>
        </div>
        <ErrorFeedbackMessage>{getFieldError("date")}</ErrorFeedbackMessage>
        <div className={styles.FieldContainer}>
            <img src={timeIcon} alt="Time icon" />
            <label htmlFor="time" className={styles.LabelContainer}>Time</label>
            <select id="time" value={reservationState.time.value} className={styles.InputFieldTrigger} onChange={(e)=>{reservationDispatch({type: 'element-change', field: e.target.id, value: e.target.value})}} onBlur={(e)=>{reservationDispatch({type: 'element-blur', field: e.target.id, value: e.target.value})}}>
                    
                    <option selected disabled value="" >00:00</option>
                    {currentAvailableTimesCollection}
            </select>
        </div>
        <ErrorFeedbackMessage>{getFieldError("time")}</ErrorFeedbackMessage>
        <p>Availability one month ahead</p>
    </div>

    )
}