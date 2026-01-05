import {useReservationFormReducer} from '../../context/reservationReducer'
import styles from "./DateSelect.module.css"

// Icons

import dateIcon from '../../assets/icons/date-icon.svg'
import timeIcon from '../../assets/icons/time-icon.svg'

export default function DateSelect (){

    const {reservationDispatch, getFieldError} = useReservationFormReducer()

    return(
    <div className={styles.ComponentContainer}>
        {/*Component for date and time*/ }
        <h2>Choose your date & time </h2>
        <div className={styles.FieldContainer}>
            <img src={dateIcon} alt="date icon" />
            <label htmlFor="date" className={styles.LabelContainer}>Date</label>
            <input id="date" className={styles.InputFieldTrigger} type='date' onChange={(e)=>{reservationDispatch({type: 'element-blur', field: e.target.id, value: e.target.value})}} onBlur={(e)=>{reservationDispatch({type: 'element-change', field: e.target.id, value: e.target.value})}}/>
            {getFieldError("date")}
        </div>
        <div className={styles.FieldContainer}>
            <img src={timeIcon} alt="Time icon" />
            <label htmlFor="time" className={styles.LabelContainer}>Time</label>
            <select id="time"  className={styles.InputFieldTrigger} onChange={(e)=>{reservationDispatch({type: 'element-blur', field: e.target.id, value: e.target.value})}} onBlur={(e)=>{reservationDispatch({type: 'element-change', field: e.target.id, value: e.target.value})}}>
                    
                    <option selected disabled>00:00</option>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
            </select>
            {getFieldError("time")}
        </div>
        <p>Availability one month ahead</p>
    </div>

    )
}