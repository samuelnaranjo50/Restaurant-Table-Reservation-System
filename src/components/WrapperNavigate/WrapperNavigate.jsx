import { useEffect} from "react";
import {useReservationFormReducer} from '../../context/reservationReducer'

// Dynamic navigation
import {useNavigate} from "react-router-dom";

//Components
import ConfirmationButton from "../ConfirmationButton/ConfirmationButton";


export default  function WrapperNavigate(){

    // This section provides logic for button activation or deactivation
      const {reservationState, reservationDispatch} = useReservationFormReducer()
    
    // Setting the dispatch route for dynamic navigation

     const dispatch = () => reservationDispatch({ type: "CHECK_RESERVATION_DETAILS" }) //This dispatch is in charge of whole schema validation
     const dispathc2= () => reservationDispatch({ type: "RESET_NAVIGATION_FOR_DETAILS" }) // Enable backwards navigation by deactivating the the flag in the state
     const navigationPath = "/confirmed-booking"

      // Dynamic navigation
      const navigate = useNavigate()
    
      useEffect(()=>{
    
        console.log("Activate log to inform use Effect trigger")
        if(reservationState.canNavigateDetailSec){
            console.log("Accessing navigation Working")
            navigate(navigationPath)
    
            //Once navigate turn navigation false so that the user can return to this page
            dispathc2()
        }
      }, [reservationState.canNavigateDetailSec, navigate])
      
    return(
        <>
         <ConfirmationButton dispatch={dispatch}>
            Confirm Reservation
         </ConfirmationButton>
        
        </>
    )

}