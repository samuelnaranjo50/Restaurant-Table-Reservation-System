import {useReservationFormReducer} from '../../context/reservationReducer'
import styles from './ReservationSummary.module.css'


// Icons
import dateIcon from "../../assets/icons/date-icon.svg"
import guestsIcon from "../../assets/icons/partyIcon.svg"
import partyHat from "../../assets/icons/partyHat.svg"
export default function ReservationSummary(){
    
        const {reservationState} = useReservationFormReducer()
        const displayDate = reservationState.date.value instanceof Date 
        ? reservationState.date.value.toLocaleDateString() 
        : String(reservationState.date.value || "")
    return(
        <section className={styles.summaryContainer}>

            <h1>Reservation Summary</h1>
        <div className={styles.summaryDataContainer}>
            <div className={styles.outerDataContainer}>
            <img src={dateIcon} alt="Date icon" className={styles.imgIcon}/>
            <div className={styles.dataContainer}>
                
                <div className={styles.dataType}>
                    <h2>Date And Time</h2>
                </div>
                <div className={styles.inputedData}>
                    <p>{displayDate}</p>
                </div>
                <div className={styles.inputedData}>
                    <p>{reservationState.time.value}</p>
                </div>
            </div>
            </div>

            <div className={styles.outerDataContainer}>
                <img src={guestsIcon} alt="Guests Icon"  className={styles.imgIcon}/>
                <div className={styles.dataContainer}>
                
                <div className={styles.dataType}> 
                    <h2>Party Size</h2>
                </div>
                <div className={styles.inputedData}><p>{reservationState.partySize.value}</p></div>
            </div>


            </div>

            <div className={styles.outerDataContainer}>
                <img src={partyHat} alt="Party Hat" className={styles.imgIcon} />
                <div className={styles.dataContainer}>
                
                <div  className={styles.dataType}>
                    <h2>Occasion</h2>
                </div >  
                <div className={styles.inputedData}>{reservationState.ocassion.value}</div>
                
            </div>

            </div>

            
            
        </div>
        </section>
    )
}