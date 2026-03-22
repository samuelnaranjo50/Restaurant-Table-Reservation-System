import styles from './DesktopNav.module.css'

import { Link } from "react-router-dom"
import littleLemonLogo from "../../assets/logos/Primary-logo-icon.svg"

export default function DesktopNav (){
    return(
        
         <nav className={styles.navContainer}>


            <div className={styles.navFooter}>
                <img src={littleLemonLogo} alt="Little Lemon Icon" />
           </div>
                
                <ul className={styles.linksUl}> 
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/reservation-details">Reservation</Link></li>
                    <li><Link to="/order">Order online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                
           </nav>
    )
}