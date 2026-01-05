import {useReservationFormReducer} from '../../context/reservationReducer'
import styles from './PartySizeCounter.module.css'

//Icons
import partyIcon from '../../assets/icons/partyIcon.svg'

const maxParty = 10

export default function PartySizeCounter(){
    const {reservationState, reservationDispatch, getFieldError} = useReservationFormReducer()

    const changePartySize = (action)=>{
        let currentValue =  Number(reservationState.partySize.value)
        let myNumber = 0
        if (action === "increase"){
            myNumber = currentValue < maxParty? currentValue + 1 : currentValue
        }
        else if (action === "decrease"){
            myNumber = currentValue > 0? currentValue - 1 : currentValue
        } 
        reservationDispatch({type: 'element-change', field: "partySize", value: myNumber})
    }

    return(

        <div className={styles.ComponentContainer}>
            <div className={styles.header}>
                <h2>NUMBER OF GUESTS</h2>
                <img src={partyIcon} alt="Guests icon" />
            </div>
            <div className={styles.partyCounter}>
                <button type="button" onClick={()=>changePartySize("decrease")}>-</button>
                <button type="button" onClick={()=>changePartySize("increase")}>+</button>
                <input id="partySize" type="text" value={reservationState.partySize.value} onChange={(e)=>{reservationDispatch({type: 'element-change', field: e.target.id, value: e.target.value})}} onBlur={(e)=>{reservationDispatch({type: 'element-blur', field: e.target.id})}}/>
            </div>
                {getFieldError("partySize")}
            
        </div>
    )
}