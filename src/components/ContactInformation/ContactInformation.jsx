import {useReservationFormReducer} from '../../context/reservationReducer'
import ErrorFeedbackMessage from '../ErrorFeedbackMessage/ErrorFeedbackMessage'


export default function ContactInformation(){
    const {reservationState, reservationDispatch, getFieldError} = useReservationFormReducer()
    return(
        
        <div>

            <h2>CONTACT INFORMATION</h2>

       
        <form action="">
            <label htmlFor="email">Email</label>
            <input id='email' value={reservationState.email.value} type="email" onChange={(e)=>{reservationDispatch({type: 'element-change', field: e.target.id, value: e.target.value})}} onBlur={(e)=>{reservationDispatch({type: 'element-blur', field: e.target.id, value: e.target.value})}} />
            <ErrorFeedbackMessage>{getFieldError("email")}</ErrorFeedbackMessage>

            <label htmlFor="emailConfirmation">Email Confirmation</label>
            <input id='emailConfirmation' value={reservationState.emailConfirmation.value} type="email" onChange={(e)=>{reservationDispatch({type: 'element-change', field: e.target.id, value: e.target.value})}} onBlur={(e)=>{reservationDispatch({type: 'element-blur', field: e.target.id, value: e.target.value})}}/>
            <ErrorFeedbackMessage>{getFieldError("emailConfirmation")}</ErrorFeedbackMessage>
            <br />

            <label htmlFor="name">Name</label>
            <input id="name"  value={reservationState.name.value}type="text" onChange={(e)=>{reservationDispatch({type: 'element-change', field: e.target.id, value: e.target.value})}} onBlur={(e)=>{reservationDispatch({type: 'element-blur', field: e.target.id, value: e.target.value})}}/>
            <ErrorFeedbackMessage>{getFieldError("name")}</ErrorFeedbackMessage>
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" value={reservationState.lastName.value} type="text" onChange={(e)=>{reservationDispatch({type: 'element-change', field: e.target.id, value: e.target.value})}} onBlur={(e)=>{reservationDispatch({type: 'element-blur', field: e.target.id, value: e.target.value})}}/>
            < ErrorFeedbackMessage>{getFieldError("lastName")}</ErrorFeedbackMessage>
        </form>

        </div>
    )
}