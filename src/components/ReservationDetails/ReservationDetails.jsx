import {useReservationFormReducer} from '../../context/reservationReducer'
import styles from './ReservationDetails.module.css'
//components ->
import ReservationSystemNav from '../ReservationSystemNav/ReservationSystemNav'
import ReservationSystemHeader from '../ReservationSystemHeader/ReservationSystemHeader'
import DateSelect from '../DateSelect/DateSelect'
import PartySizeCounter from '../PartySizeCounter/PartySizeCounter'
import OcassionType from '../OcassionType/OcassionType'
import CustomHr from '../CustomHr/CustomHr'

//Schema validation & button
import WrapperNavigate from '../WrapperNavigate/WrapperNavigate'


export default function ReservationDetails() {

    const {reservationDispatch, getFieldError} = useReservationFormReducer()
    
    return (
        <div className={styles.mainContainer}>
            <ReservationSystemNav path="/"/>
            <ReservationSystemHeader/>
            <form action="post" className={styles.formContainer}>
                {/*Component for date and time*/ }

                <DateSelect/>

                <CustomHr/>

                
                <PartySizeCounter/>

               <CustomHr/>

                <OcassionType/>

               <CustomHr/>

                <WrapperNavigate />

             </form>
        </div>
        )
}