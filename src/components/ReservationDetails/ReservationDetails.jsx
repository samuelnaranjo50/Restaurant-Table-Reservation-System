import {useReservationFormReducer} from '../../context/reservationReducer'

// Logic used to determine if is error or not in the specific field


export default function ReservationDetails() {

    const {reservationDispatch, getFieldError} = useReservationFormReducer()
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