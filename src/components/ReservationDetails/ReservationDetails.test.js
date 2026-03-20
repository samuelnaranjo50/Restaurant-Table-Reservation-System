import {render, screen} from '@testing-library/react'
import ReservationSystemHeader from '../ReservationSystemHeader/ReservationSystemHeader.jsx'
import ReservationDetails from './ReservationDetails'
describe("Testing proper rendering", ()=>{
    test("Header text rendering in ReservationDetails", ()=>{
        render(<ReservationSystemHeader/>)
        const header = screen.getByTestId("first")
        expect(header).toBeInTheDocument()
    })
    test("Header by role",()=>{
        render(<ReservationDetails/>)
        const header = screen.getByRole('heading',{level: 1, name: /reserve your table/i})
        expect(header).toBeInTheDocument()
    })
})