import { useContext, createContext, useReducer } from "react";

const reservationReducerContext = createContext(null)

// Reducer logic
const reservationReducer = (reservationState, action)=>{
        switch(action.type){
            case 'element-change':
                console.log(`Element change at ${action.field} with value: ${action.value}` )
                    // Validation: Validation is perform inside the the object using the resevation validation object with validation methods to set the value of is error
                    
                    // State update: Here I update the sate using the proper syntax to avoid overwritting the properties
                    const changeState={
                        ...reservationState,
                    [action.field]: {...reservationState[action.field], value: action.value, isError: reservationValidation[action.field](action.value)}
                }
                // Validation 
                console.log(changeState)
                return changeState

            case 'element-blur':
                console.log(`Element blur at ${action.field}` )
                const blurState={
                    ...reservationState,
                    [action.field]: {...reservationState[action.field], isBlur: true}
                }



                console.log(blurState)
                return blurState
            default:
                 return reservationState;

        }   
}

// Validation object with respective field methods
const reservationValidation = {
        ocassion: (value)=>{
            if (value === "birthday"){
                return true
            }
            else
            {return false}
        }
    }


export function ReservationFormReducerContext ({children}){

    const [reservationState, reservationDispatch] = useReducer(reservationReducer, {
            ocassion: { value: "", isBlur: false, isError: false, errorMessage: "Please select a valid occassion" }
        })

    // getField function to simplify the error rendering
// Simplifies the logic to determine whether or not is require to render the error
const getFieldError = (field)=>{
    const isShowError = reservationState[field].isBlur && reservationState[field].isError
    return isShowError? reservationState[field].errorMessage : false
}

    return <reservationReducerContext.Provider value={{reservationState, reservationDispatch, reservationReducer, getFieldError}}>{children}</reservationReducerContext.Provider>
}

export const useReservationFormReducer = ()=> useContext(reservationReducerContext);


