import styles from "./MobileNav.module.css"

import hamburgerIcon from "../../assets/icons/icon-hamburger-menu.svg"
import littleLemonLogo from "../../assets/logos/Primary-logo-icon.svg"


// Import context
import { useHamburgerState } from "../../context/hamburgerMenu"
import { useEffect } from "react"

export default function MobileNav(){
    const {isHamburgerMenuActive, setHamburgerMenuState} = useHamburgerState()

    useEffect(()=>{
        console.log("Checking if working context", isHamburgerMenuActive)
    }, [isHamburgerMenuActive])

    const handleHamburgerIconClick = () =>{
        console.log("hi")
        setHamburgerMenuState(true)
    }
    
    return (
        <div>
           <button className="hamburgerIcon" onClick={handleHamburgerIconClick} aria-label={isHamburgerMenuActive ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isHamburgerMenuActive}><img src={hamburgerIcon} alt="Hamburger Menu Icon" /></button>
           <img src={littleLemonLogo} alt="Little Lemon Icon" />
        </div>
    )
}