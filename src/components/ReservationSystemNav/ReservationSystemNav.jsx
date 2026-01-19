import { Link } from 'react-router-dom';
import styles from './ReservationSystemNav.module.css'

import logo from '../../assets/icons/white-green-background-logo.svg'
import Arrow from '../../assets/icons/Arrow.svg'
export default function ReservationSystemNav({path}){
    return (
        <nav className={styles.ReservationSystemNav}>
            <Link to={path}><button className={styles.returnButton}><img src={Arrow} alt="Return arrow" /></button></Link>

            <img src={logo} alt="Lemon Logo with green background" />
        </nav>
    )
}