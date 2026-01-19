import {useReservationFormReducer} from '../../context/reservationReducer'
import styles from './PartySizeCounter.module.css'
import ErrorFeedbackMessage from '../ErrorFeedbackMessage/ErrorFeedbackMessage';

import React from 'react';

//Icons
import partyIcon from '../../assets/icons/partyIcon.svg'

const maxParty = 20

export default function PartySizeCounter(){
    const {reservationState, reservationDispatch, getFieldError} = useReservationFormReducer()

    //Buttons for adding or decreasing the number of seats
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

    //Logic for the dynamic list bassed on maxParty size
    const maxPartySuggestion = ()=>{
        let PartySizeSuggestion = []
        for(let i = 1; i <= maxParty; i++){
            PartySizeSuggestion.push(i)
        }

        return PartySizeSuggestion.map((num, index)=>{
            //console.log("Element: ", React.createElement("option", {key: index, value: num}, num))
            return React.createElement("option", {key: index, value: num}, num);
            
            
        })
        
        
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
                <input id="partySize" type="number" list="seats-number" min="0" max={maxParty} value={reservationState.partySize.value} onChange={(e)=>{reservationDispatch({type: 'element-change', field: e.target.id, value: e.target.value})}} onBlur={(e)=>{reservationDispatch({type: 'element-blur', field: e.target.id,  value: e.target.value})}}/>
                <datalist id="seats-number">
                    {maxPartySuggestion()}
                </datalist>
            </div>
                <ErrorFeedbackMessage>{getFieldError("partySize")}</ErrorFeedbackMessage>
            
        </div>
    )
}