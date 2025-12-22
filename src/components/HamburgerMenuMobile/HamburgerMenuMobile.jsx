import styles from "./HamburgerMenuMobile.module.css"

import hamburgerIcon from "../../assets/icons/icon-hamburger-menu.svg"
import littleLemonLogo from "../../assets/logos/Logo with text and lemon.svg"


// Import context
import { useHamburgerState } from "../../context/hamburgerMenu"
import { useEffect } from "react"

//Import components
import HamburgerLink from "../HamburgerLink/HamburgerLink"

export default function HamburgerMenuMobile(){
    const {isHamburgerMenuActive, setHamburgerMenuState} = useHamburgerState()

    const handleHamburgerIconClick = () =>{
        setHamburgerMenuState(false)
    }

    
    return (
        <div className={styles.hamburgerContainer}>
            <div className={styles.NavHead}>
                <button className="hamburgerIcon" onClick={handleHamburgerIconClick}><img src={hamburgerIcon} alt="Hamburger Menu Icon" /></button>
                <h3>Navigation</h3>
            </div>
            <hr className={styles.separator}/>
            <nav className={styles.mainSection}>
                
                <HamburgerLink path="/reservation-details">
                     About
                </HamburgerLink>
                <HamburgerLink path="/reservation-details">
                    Menu
                </HamburgerLink>
                <HamburgerLink path="/reservation-details">
                    Reservation
                </HamburgerLink>
                <HamburgerLink path="/reservation-details">
                    Order online
                </HamburgerLink>
                <HamburgerLink path="/reservation-details">
                    Login
                </HamburgerLink>
                
           </nav>
           <hr className={`${styles.separator} ${styles.separator1}`}/>
           <div className={styles.navFooter}>
            <img src={littleLemonLogo} alt="Little Lemon Icon" />
           </div>
           
        </div>
    )
}