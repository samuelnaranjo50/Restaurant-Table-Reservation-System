import styles from "./ConfirmationButton.module.css";
import { useEffect, useRef} from "react";
import {useReservationFormReducer} from '../../context/reservationReducer'

// Dynamic navigation

import {useNavigate} from "react-router-dom";
export default function ConfirmationButton({ children, path, dispatch, dispathc2 }) {
  // This section provides styling logic for user actions
  const buttonRef = useRef(null);

  const handleButtonclickDown = () => {
    buttonRef.current.style.backgroundColor = "#495E57";
  };

  const handleButtonclickUp = () => {
    buttonRef.current.style.backgroundColor = "#F4CE14";
  };

  // This section provides logic for button activation or deactivation

  const {reservationState} = useReservationFormReducer()

  // Dynamic navigation
  const navigate = useNavigate()

  useEffect(()=>{

    console.log("Activate log to inform use Effect trigger")
    if(reservationState.canNavigateDetailSec){
        console.log("Accessing navigation Working")
        navigate(path)

        //Once navigate turn navigation false so that the user can return to this page
        dispathc2()
    }
  }, [reservationState.canNavigateDetailSec, navigate])
  


  return (
    
      <button
        type="button"
        className={styles.button}
        ref={buttonRef}
        onMouseDown={handleButtonclickDown}
        onMouseUp={handleButtonclickUp}
        onClick={dispatch}
      >
        {children}
      </button>
    
  );
}
