import {render, screen} from '@testing-library/react'
import ReservationSystemHeader from './components/ReservationSystemHeader/ReservationSystemHeader.jsx'
import { initializeTimes } from './context/reservationReducer.jsx'
import { updateTimes } from './context/reservationReducer.jsx'

describe("Testing Application Functionality", ()=>{
   
    test("Header is rending in the ReservationDetails component",()=>{
        render(<ReservationSystemHeader/>)
        const header = screen.getByRole('heading',{level: 1, name: /reserve your table/i})
        expect(header).toBeInTheDocument()
    });

    test("Intialize times properly calls the bookings times API", ()=>{
      let timesAvailables = initializeTimes()
      expect(Array.isArray(timesAvailables)).toBe(true)
    })

    test("Once date is updated, update the times available", ()=>{
      let futureDate = new Date()
      futureDate.setDate(futureDate.getDate() + 2);

      let timesAvailables = updateTimes(futureDate)
      expect(Array.isArray(timesAvailables)).toBe(true)
      
    })

    

    

})


