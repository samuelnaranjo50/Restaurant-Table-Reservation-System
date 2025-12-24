import { useContext, createContext, useReducer } from "react";

// For the validation object import Yup
import * as Yup from 'yup'

const reservationReducerContext = createContext(null)

// Reducer logic
const reservationReducer = (reservationState, action) => {
    switch (action.type) {
        case 'element-change':
            console.log(`Element change at ${action.field} with value: ${action.value}`)
            // Validation: Validation is perform inside the the object using the resevation validation object with validation methods to set the value of is error
            let errorMessageYup = ''
            let isThereError = false
            try{
                reservationValidation[action.field].validateSync(action.value)
            }
            catch (error){
                
                errorMessageYup = error.message
                isThereError = errorMessageYup === action.value? false: true
                console.log("Trying validation, is there error?", isThereError)
                errorMessageYup = error.message
            }

            // State update: Here I update the sate using the proper syntax to avoid overwritting the properties
            const changeState = {
                ...reservationState,
                [action.field]: { ...reservationState[action.field], value: action.value, isError: isThereError, errorMessage: errorMessageYup}
            }
            // Validation 
            console.log(changeState)
            return changeState

        case 'element-blur':
            console.log(`Element blur at ${action.field}`)
            const blurState = {
                ...reservationState,
                [action.field]: { ...reservationState[action.field], isBlur: true }
            }



            console.log(blurState)
            return blurState
        default:
            return reservationState;

    }
}

// Validation object with respective field methods
const reservationValidation = {
    ocassion: Yup.string().oneOf(["Romantic dinner"], "invalid input"),
    name: Yup.string().min(4, "Must be longer than 4"),
}



export function ReservationFormReducerContext({ children }) {

    const [reservationState, reservationDispatch] = useReducer(reservationReducer, {
        ocassion: { value: "", isBlur: false, isError: false, errorMessage: "" },
        date: { value: "", isBlur: false, isError: false, errorMessage: "" },
        time: { value: "", isBlur: false, isError: false, errorMessage: "" },
        ocassion: { value: "", isBlur: false, isError: false, errorMessage: "" },
        email: { value: "", isBlur: false, isError: false, errorMessage: "" },
        emailConfirmation: { value: "", isBlur: false, isError: false, errorMessage: "" },
        name: { value: "", isBlur: false, isError: false, errorMessage: "" },
        lastName: { value: "", isBlur: false, isError: false, errorMessage: "" },
    })

    // getField function to simplify the error rendering
    // Simplifies the logic to determine whether or not is require to render the error
    
    const getFieldError = (field)=>{
            const isShowError = reservationState[field].isBlur && reservationState[field].isError
            return isShowError? reservationState[field].errorMessage : false
        }

    return <reservationReducerContext.Provider value={{ reservationState, reservationDispatch, reservationReducer, getFieldError }}>{children}</reservationReducerContext.Provider>
}

export const useReservationFormReducer = () => useContext(reservationReducerContext);


