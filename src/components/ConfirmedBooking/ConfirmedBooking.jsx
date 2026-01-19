
//Components
import ReservationSystemNav from '../ReservationSystemNav/ReservationSystemNav'
import ReservationSummary from '../ReservationSummary/ReservationSummary'
import ContactInformation from '../ContactInformation/ContactInformation'
import ConfirmationButton from '../ConfirmationButton/ConfirmationButton'

export default function ConfirmedBooking(){
    return(
        <div>
            <ReservationSystemNav path="/reservation-details"/>
            <ReservationSummary/>
            <ContactInformation/>
            <ConfirmationButton>Book my table</ConfirmationButton>


        
        </div>
    )
}