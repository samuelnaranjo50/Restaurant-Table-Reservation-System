import { useContext, createContext, useReducer } from "react";

// For the validation object import Yup
import * as Yup from 'yup'

const reservationReducerContext = createContext(null)

// Reducer logic
const reservationReducer = (reservationState, action) => {

    // Declare the variable to be usavble by both actions
    let errorMessageYup 
    let isThereError 
    switch (action.type) {
        case 'element-change':
            console.log(`Element change at ${action.field} with value: ${action.value}`)
            // Validation: Validation is perform inside the the object using the resevation validation object with validation methods to set the value of is error

            //Redeclare each time to empty its values
            errorMessageYup = ''
            isThereError = false
            try{
                reservationValidation[action.field].validateSync(action.value)
            }
            catch (error){
                
                errorMessageYup = error.message
                // I check if the return message is equal, since when there is not error the inputed and the return value are the same
                isThereError = errorMessageYup === action.value? false: true 
                console.log("Trying validation, is there error?", isThereError)
                // Assign the erro message to the variable to then assign it to the state object field error message
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
            console.log(`Element blur at ${action.field} with value: ${action.value}`)
            
            // Validation: Validation is perform inside the the object using the resevation validation object with validation methods to set the value of is error

            // Assign the previously defined values in case there no error
            errorMessageYup = reservationState[action.field].errorMessage
            isThereError = ""
            
            try{
                reservationValidation[action.field].validateSync(action.value)
            }
            catch (error){
                
                errorMessageYup = error.message
                // I check if the return message is equal, since when there is not error the inputed and the return value are the same
                isThereError = errorMessageYup === action.value? false: true 
                console.log("Trying validation, is there error?", isThereError)
                // Assign the erro message to the variable to then assign it to the state object field error message
                errorMessageYup = error.message
            }


            const blurState = {
                ...reservationState,
                [action.field]: { ...reservationState[action.field], isBlur: true, value: action.value, isError: isThereError, errorMessage: errorMessageYup}
            }

            console.log(blurState)
            return blurState
        default:
            return reservationState;

    }
}

// Validation object with respective field methods

    // Gettin max date
    let maxDate = ()=>{
        let date = new Date()
        // Modify today date
         date.setDate(date.getDate() + 31);
        return date
    }
    let maximumDate = maxDate();

const reservationValidation = {
    ocassion: Yup.string().required("Please select an occasion"),
    name: Yup.string().min(4, "Must be longer than 4"),
    time: Yup.string().required("Please select the reservation hour"),
    date: Yup.date().min(new Date(new Date().setHours(0, 0, 0, 0)), "We only accept reservations up to 31 days in advance.").max(maximumDate, "We only accept bookings until " + maximumDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })),
    partySize: Yup.number().typeError("Please enter a valid number").max(10, "Must be less than 10").required("Please tell us how many seats"),
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
        partySize: { value: "0", isBlur: false, isError: false, errorMessage: "" }
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


