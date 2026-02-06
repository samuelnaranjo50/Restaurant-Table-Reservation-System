import {useReservationFormReducer} from '../../context/reservationReducer'
import styles from './ReservationDetails.module.css'
//components ->
import ReservationSystemNav from '../ReservationSystemNav/ReservationSystemNav'
import ReservationSystemHeader from '../ReservationSystemHeader/ReservationSystemHeader'
import TableForm from '../TableForm/TableForm'


// Custom component for desktop
import ReservationSystemHeaderDesk from '../ReservationSystemHeaderDesk/ReservationSystemHeaderDesk'
import TableFormDesk from '../TableFormDesk/TableFormDesk'

//Schema validation & button
import WrapperNavigate from '../WrapperNavigate/WrapperNavigate'

// Custom Hook
import useWindowSize from '../../hooks/useWindowSize'

export default function ReservationDetails() {

    const isWindowMobile = useWindowSize(1200)

    const views = {
    mobile: [
        <ReservationSystemHeader  key="header"/>,
        <TableForm key="form"/>
    ],
    desktop: [
      // Desktop might have extra components or different props
      <ReservationSystemHeaderDesk key="desk-header"/>,
      <TableFormDesk key="desk-form"/>
    ]
  };
    
    return (
        <div className={styles.mainContainer}>
            <ReservationSystemNav path="/"/>

            {isWindowMobile? views.mobile : views.desktop}
            
        </div>
        )
}