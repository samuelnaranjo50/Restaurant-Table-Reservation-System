import styles from "./ConfirmedBooking.module.css"

//Components
import ReservationSystemNav from '../ReservationSystemNav/ReservationSystemNav'
import ReservationSummary from '../ReservationSummary/ReservationSummary'
import ContactInformation from '../ContactInformation/ContactInformation'
import CancelationPolicy from '../CancelationPolicy/CancelationPolicy'
import WrapperSubmit from '../WrapperSubmit/WrapperSubmit'
import CustomHr from '../CustomHr/CustomHr'
 
             

export default function ConfirmedBooking(){
    return(
        <div className={styles.mainContainer}>
            <ReservationSystemNav path="/reservation-details"/>
            <ReservationSummary/>
            <ContactInformation/>
            <CustomHr/>
            <CancelationPolicy/>
            
            <CustomHr/>
            <WrapperSubmit/>
        </div>
    )
}