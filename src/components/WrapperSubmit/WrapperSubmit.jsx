import { useEffect} from "react";
import {useReservationFormReducer} from '../../context/reservationReducer'

// Dynamic navigation
import {useNavigate} from "react-router-dom";

//Components
import ConfirmationButton from "../ConfirmationButton/ConfirmationButton";

// API fictional hook
import { submitAPI } from "../Api.js/Api";


export default function WrapperSubmit(){
    // This section provides logic for button activation or deactivation
          const {reservationState, reservationDispatch} = useReservationFormReducer()
        
    // Setting the dispatch route for dynamic navigation
    
         const dispatch = () => reservationDispatch({ type: "CHECK_CONTACT_INFORMATION" }) //This dispatch is in charge of whole schema validation
         const dispathc2= () => reservationDispatch({ type: "RESET_NAVIGATION", field: "canNavigateBookingSec" }) // Enable backwards navigation by deactivating the the flag in the state
         const navigationPath = "/booking-success"
    
    // Dynamic navigation
          const navigate = useNavigate()
        
          useEffect(()=>{
        
            console.log("Activate log to inform use Effect trigger")
            if(reservationState.canNavigateBookingSec){
                console.log("Accessing navigation Working")

                let success = submitAPI(reservationState);

                if (success){
                    navigate(navigationPath)
                }
                
        
                //Once navigate turn navigation false so that the user can return to this page
                dispathc2()
            }
          }, [reservationState.canNavigateBookingSec, navigate])
          
        return(
            <>
             <ConfirmationButton dispatch={dispatch}>
                Confirm Reservation
             </ConfirmationButton>
            
            </>
        )
}