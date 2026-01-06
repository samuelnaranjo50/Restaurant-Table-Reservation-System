import {useReservationFormReducer} from '../../context/reservationReducer'
import { createElement } from 'react'
import styles from './OcassionType.module.css'

//Icons
import partyIcon from '../../assets/icons/partyIcon.svg'
import defaultIcon from'../../assets/icons/Color-lemon-icon.svg'

//Images

import casualDinnerImg from '../../assets/Images/casual-dinner-with-friends-small.png'
import birthayDinnerImg from '../../assets/Images/amigos-sonrientes-tomando-selfie-vista-frontal-small.png'
import anniversaryDinnerImg from '../../assets/Images/pareja-caucasica-tintinear-vasos-juntos-en-el-restaurante-small.png'


export default function OcassionType(){
    const {reservationState, reservationDispatch, getFieldError} = useReservationFormReducer()

    // Implementing the object for the image rendering

    const dynamicImage = {
        default: casualDinnerImg,
        birthday:  birthayDinnerImg,
        anniversary: anniversaryDinnerImg
    }

    

    const renderDynamicImage = (property)=>{
        let srcPath = property;
        srcPath = srcPath === "" ? "default": srcPath

        const element = createElement("img", {src: dynamicImage[srcPath], alt:"Occassion", key: property})
        return element
    }

    return(
        <div className={styles.ComponentContainer}>
            <h2>YOUR TAILORED EXPERIENCE</h2>
            <div className={styles.fieldInfoContainer}>
                <div className={styles.imageContainer}>
                    {renderDynamicImage(reservationState.ocassion.value)}
                </div>
                 
                <div className={styles.fieldData}>
            
                    <label htmlFor="ocassion">Select The Ocassion</label>
                    <select id="ocassion" value={reservationState.ocassion.value} onChange={(e)=>{reservationDispatch({type: 'element-change', field: e.target.id, value: e.target.value})}} onBlur={(e)=>{reservationDispatch({type: 'element-blur', field: e.target.id, value: e.target.value})}}>
                        <option selected disabled value="" >Ocassion</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="default">Good Dinner</option>
                    </select>
                {getFieldError("ocassion")}
                </div>

            </div>
            
        </div>
    )
}