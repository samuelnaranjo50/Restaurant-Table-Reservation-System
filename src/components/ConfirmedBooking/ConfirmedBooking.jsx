
//Components
import ReservationSystemNav from '../ReservationSystemNav/ReservationSystemNav'
import ReservationSummary from '../ReservationSummary/ReservationSummary'
import ContactInformation from '../ContactInformation/ContactInformation'
import WrapperSubmit from '../WrapperSubmit/WrapperSubmit'

export default function ConfirmedBooking(){
    return(
        <div>
            <ReservationSystemNav path="/reservation-details"/>
            <ReservationSummary/>
            <ContactInformation/>
            <WrapperSubmit/>


        
        </div>
    )
}