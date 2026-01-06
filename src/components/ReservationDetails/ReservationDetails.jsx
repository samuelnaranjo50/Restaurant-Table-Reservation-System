import {useReservationFormReducer} from '../../context/reservationReducer'
import styles from './ReservationDetails.module.css'
//components ->
import ReservationSystemNav from '../ReservationSystemNav/ReservationSystemNav'
import ReservationSystemHeader from '../ReservationSystemHeader/ReservationSystemHeader'
import DateSelect from '../DateSelect/DateSelect'
import PartySizeCounter from '../PartySizeCounter/PartySizeCounter'
import OcassionType from '../OcassionType/OcassionType'
import ConfirmationButton from '../ConfirmationButton/ConfirmationButton'
// Logic used to determine if is error or not in the specific field


export default function ReservationDetails() {

    const {reservationDispatch, getFieldError} = useReservationFormReducer()
    return (
        <div >
            <ReservationSystemNav/>
            <ReservationSystemHeader/>
            <form action="post" className={styles.formContainer}>
                {/*Component for date and time*/ }

                <DateSelect/>

                <hr className={styles.separator}/>
                <PartySizeCounter/>

                <hr className={styles.separator}/>

                <OcassionType/>

                <hr className={styles.separator}/>

                <ConfirmationButton>
                    Confirm my booking
                </ConfirmationButton>

             </form>
        </div>
        )
}