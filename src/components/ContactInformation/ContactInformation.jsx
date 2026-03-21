import styles from "./ContactInformation.module.css"

import {useReservationFormReducer} from '../../context/reservationReducer'
import ErrorFeedbackMessage from '../ErrorFeedbackMessage/ErrorFeedbackMessage'

import CustomHr from "../CustomHr/CustomHr"

export default function ContactInformation(){
    const {reservationState, reservationDispatch, getFieldError} = useReservationFormReducer()
    return(
        
        <div>

            <h2 className={styles.titleSec}>CONTACT INFORMATION</h2>

       
        <form className={styles.formContainer}>
            <label htmlFor="email">Email Address</label>
            <input id='email' required value={reservationState.email.value} type="email" onChange={(e)=>{reservationDispatch({type: 'element-change', field: e.target.id, value: e.target.value})}} onBlur={(e)=>{reservationDispatch({type: 'element-blur', field: e.target.id, value: e.target.value})}} />
            <ErrorFeedbackMessage>{getFieldError("email")}</ErrorFeedbackMessage>

            <label htmlFor="emailConfirmation">Confirm Email Address</label>
            <input id='emailConfirmation' required value={reservationState.emailConfirmation.value} type="email" onChange={(e)=>{reservationDispatch({type: 'element-change', field: e.target.id, value: e.target.value})}} onBlur={(e)=>{reservationDispatch({type: 'element-blur', field: e.target.id, value: e.target.value})}}/>
            <ErrorFeedbackMessage>{getFieldError("emailConfirmation")}</ErrorFeedbackMessage>
            
            <hr className={styles.separator}/>

            <label htmlFor="name">Name</label>
            <input id="name" required  value={reservationState.name.value}type="text" onChange={(e)=>{reservationDispatch({type: 'element-change', field: e.target.id, value: e.target.value})}} onBlur={(e)=>{reservationDispatch({type: 'element-blur', field: e.target.id, value: e.target.value})}}/>
            <ErrorFeedbackMessage>{getFieldError("name")}</ErrorFeedbackMessage>
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" required value={reservationState.lastName.value} type="text" onChange={(e)=>{reservationDispatch({type: 'element-change', field: e.target.id, value: e.target.value})}} onBlur={(e)=>{reservationDispatch({type: 'element-blur', field: e.target.id, value: e.target.value})}}/>
            < ErrorFeedbackMessage>{getFieldError("lastName")}</ErrorFeedbackMessage>
        </form>

        </div>
    )
}