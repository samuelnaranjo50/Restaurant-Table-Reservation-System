import styles from './ConfirmationButton.module.css'
import { useRef } from 'react'

import { Link } from 'react-router-dom'
export default function ConfirmationButton ({children, path, dispatch}){
    const buttonRef = useRef(null)

    const handleButtonclickDown = ()=>{
        buttonRef.current.style.backgroundColor = "#495E57"
    }

    const handleButtonclickUp = ()=>{
        buttonRef.current.style.backgroundColor = "#F4CE14"
    }
    return(
        <Link to={path}>
            <button type="button" className={styles.button} ref={buttonRef} onMouseDown={handleButtonclickDown} onMouseUp={handleButtonclickUp} onClick={dispatch}>
                {children}
            </button>
        </Link>
        
    )
}