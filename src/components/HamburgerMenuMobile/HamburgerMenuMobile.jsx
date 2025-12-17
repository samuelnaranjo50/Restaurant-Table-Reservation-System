import styles from "./HamburgerMenuMobile.module.css"

import hamburgerIcon from "../../assets/icons/icon-hamburger-menu.svg"
import littleLemonLogo from "../../assets/logos/Primary-logo-icon.svg"


// Import context
import { useHamburgerState } from "../../context/hamburgerMenu"
import { useEffect } from "react"

export default function HamburgerMenuMobile(){
    const {isHamburgerMenuActive, setHamburgerMenuState} = useHamburgerState()

    

    const handleHamburgerIconClick = () =>{
        setHamburgerMenuState(false)
    }
    
    return (
        <div className={styles.hamburgerContainer}>
            <nav>
                <button onClick={handleHamburgerIconClick}><img src={hamburgerIcon} alt="Hamburger Menu Icon" /></button>
           </nav>
           <img src={littleLemonLogo} alt="Little Lemon Icon" />
        </div>
    )
}