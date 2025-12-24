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
        <aside className={styles.hamburgerContainer}>
            <header className={styles.NavHead}>
                <button className="hamburgerIcon" onClick={handleHamburgerIconClick} aria-label={isHamburgerMenuActive ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isHamburgerMenuActive}><img src={hamburgerIcon} alt="Hamburger Menu Icon" /></button>
                <h3>Navigation</h3>
            </header>
            <hr className={styles.separator}/>
            <nav className={styles.mainSection}>
                
                <ul className={styles.navList}> 
                    <li><HamburgerLink path="/about">About</HamburgerLink></li>
                    <li><HamburgerLink path="/menu">Menu</HamburgerLink></li>
                    <li><HamburgerLink path="/reservation-details">Reservation</HamburgerLink></li>
                    <li><HamburgerLink path="/order">Order online</HamburgerLink></li>
                    <li><HamburgerLink path="/login">Login</HamburgerLink></li>
                </ul>
                
           </nav>
           <hr className={`${styles.separator} ${styles.separator1}`}/>
           <div className={styles.navFooter}>
            <img src={littleLemonLogo} alt="Little Lemon Icon" />
           </div>
           
        </aside>
    )
}