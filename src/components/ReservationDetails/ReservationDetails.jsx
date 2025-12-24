import { useReducer } from "react"

// Logic used to determine if is error or not in the specific field
const reservationValidation = {
        ocassion: (value)=>{
            if (value === "birthday"){
                return true
            }
            else
            {return false}
        }
    }

export default function ReservationDetails() {

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

    const [reservationState, reservationDispatch] = useReducer(reservationReducer, {
        ocassion: { value: "", isBlur: false, isError: false, errorMessage: "Please select a valid occassion" }
    })


    // Simplifies the logic to determine whether or not is require to render the error
    const getFieldError = (field)=>{
            const isShowError = reservationState[field].isBlur && reservationState[field].isError
            return isShowError? reservationState[field].errorMessage : false
        }

    return (
        <div>
            <form action="post">
                <label htmlFor="ocassion">Ocassion</label>
                <select id="ocassion"  onChange={(e)=>{reservationDispatch({type: 'element-blur', field: e.target.id, value: e.target.value})}} onBlur={(e)=>{reservationDispatch({type: 'element-change', field: e.target.id, value: e.target.value})}}>
                    <option value="birthday">Birthday</option>
                    <option value="romantic dinner">Romantic dinner</option>
                </select>
                {getFieldError("ocassion")}
             </form>
        </div>
        )
}