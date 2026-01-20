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
import { type } from '@testing-library/user-event/dist/type'

export default function DateSelect (){

    const {reservationState, reservationDispatch, getFieldError} = useReservationFormReducer()


    // Fetching data when a change in date occurs
    const handledateChangeForAvailability = ()=>{

        let timesAvailableAtDate = fetchAPI(new Date(reservationState.date.value));
        reservationDispatch({type: "set-times", field: "availableTimes",  value: timesAvailableAtDate})
    }


    let currentAvailableTimesCollection = reservationState.availableTimes.value.map((time) => {
    return <option key={time}>{time}</option>
} )

    //Trigering a reset in the available times error
    useEffect(()=>{
        console.log("Trigering the dispatch to hide the erro of time availability")
        reservationDispatch({type: "RESET_AVAILABLE_TIMES_ERROR"})
    }, [reservationState.availableTimes.value.length])

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
        {//Logic for the Error to show in this place
            reservationState.availableTimes.errorMessage.length > 0? 
            <ErrorFeedbackMessage>{getFieldError("availableTimes")}</ErrorFeedbackMessage> :
            <ErrorFeedbackMessage>{getFieldError("time")}</ErrorFeedbackMessage>

        }
        <p>Availability one month ahead</p>
    </div>

    )
}