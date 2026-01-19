import {useReservationFormReducer} from '../../context/reservationReducer'
import styles from './ReservationSummary.module.css'

export default function ReservationSummary(){
    
        const {reservationState, reservationDispatch, getFieldError} = useReservationFormReducer()
    return(
        <section className={styles.summaryContainer}>

            <h1>Reservation Summary</h1>
        <div className={styles.summaryDataContainer}>
            <div className={styles.dataContainer}>

                <div className={styles.dataType}>
                    <h2>Date And Time</h2>
                </div>
                <div className={styles.inputedData}>
                    <p>{reservationState.date.value}</p>
                </div>
                <div className={styles.inputedData}>
                    <p>{reservationState.time.value}</p>
                </div>
            </div>

            <div className={styles.dataContainer}>
                <div className={styles.dataType}> 
                    <h2>Party Size</h2>
                </div>
                <div className={styles.inputedData}><p>{reservationState.partySize.value}</p></div>
            </div>
            <div className={styles.dataContainer}>
                <div  className={styles.dataType}>
                    <h2>Occasion</h2>
                </div >  
                <div className={styles.inputedData}>{reservationState.ocassion.value}</div>
                
            </div>
        </div>
        </section>
    )
}