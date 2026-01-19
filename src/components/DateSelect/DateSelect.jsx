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



// Reducer logic
const initializeTimes = []

const availableTimesReducer = (availableTimes, action ) => {

    switch (action.type){
        case "set-times":
            console.log(`Available times for booking at date`, action.value)
            return action.value
        
    }

}


export default function DateSelect (){

    const {reservationState, reservationDispatch, getFieldError} = useReservationFormReducer()

    // Reducer for real time available booking times
    const [availableTimes, availableTimesDispatch] = useReducer(availableTimesReducer, initializeTimes)


    // Fetching data when a change in date occurs
    const handledateChangeForAvailability = ()=>{

        let timesAvailableAtDate = fetchAPI(new Date(reservationState.date.value));
        availableTimesDispatch({type: "set-times", value: timesAvailableAtDate})
    }


    let currentAvailableTimesCollection = availableTimes.map((time) => {
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