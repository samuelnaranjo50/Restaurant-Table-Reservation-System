import { MemoryRouter } from 'react-router-dom';


// First test suit
import {render, screen} from '@testing-library/react'


import ReservationSystemHeader from './components/ReservationSystemHeader/ReservationSystemHeader.jsx'
import { initializeTimes } from './context/reservationReducer.jsx'
import { updateTimes } from './context/reservationReducer.jsx'

// Second test suit
import userEvent from '@testing-library/user-event';
import {ReservationFormReducerContext} from './context/reservationReducer';
    // First Page
import DateSelect from './components/DateSelect/DateSelect.jsx'
import PartySizeCounter from './components/PartySizeCounter/PartySizeCounter.jsx'
import OcassionType from './components/OcassionType/OcassionType.jsx'

    // Second Page
import ContactInformation from './components/ContactInformation/ContactInformation.jsx'

// Final Test API and submission
import TableForm from './components/TableForm/TableForm.jsx';



describe("Testing Application Functionality", ()=>{
   
    test("Header is rendering in the ReservationDetails component",()=>{
        render(<ReservationSystemHeader/>)
        const header = screen.getByRole('heading',{level: 1, name: /reserve your table/i})
        expect(header).toBeInTheDocument()
    });

    test("Intialize times properly calls the bookings times API", ()=>{
      let timesAvailables = initializeTimes()
      expect(Array.isArray(timesAvailables)).toBe(true)
      expect(timesAvailables.length).toBeGreaterThan(0)
    })

    test("Once date is updated, update the times available", ()=>{
      let futureDate = new Date()
      futureDate.setDate(futureDate.getDate() + 2);

      let timesAvailables = updateTimes(futureDate)
      expect(Array.isArray(timesAvailables)).toBe(true)
      expect(timesAvailables.length).toBeGreaterThan(0)
      
    })

  
})

describe("Test HTML Validation", () => {
  test("Date Should be required ", ()=>{
    render(  
      <ReservationFormReducerContext>
    <MemoryRouter>
      
            <DateSelect/>
        </MemoryRouter>
        </ReservationFormReducerContext>)
    const dateInput = screen.getByLabelText(/Date/i)

    expect(dateInput).toHaveAttribute("required")
  })

  test("Party size counter has max min and required", ()=>{
    render(   <ReservationFormReducerContext>
    <MemoryRouter>
      
            <PartySizeCounter/>
        </MemoryRouter>
        </ReservationFormReducerContext>)
    const partyCounter = screen.getByRole("spinbutton")
    expect(partyCounter).toHaveAttribute("required")
    expect(partyCounter).toHaveAttribute("min")
    expect(partyCounter).toHaveAttribute("max")
  })

  test("Occassion type is required", ()=>{
    render(<ReservationFormReducerContext><MemoryRouter>
              <OcassionType/>
           </MemoryRouter></ReservationFormReducerContext>)

    const occassionSelect = screen.getByRole("combobox")
    expect(occassionSelect).toHaveAttribute("required")
  })

  // Contact information
  test("Contant information element fullfil HTML validation", ()=>{
    render(<ReservationFormReducerContext><MemoryRouter>
              <ContactInformation/>
           </MemoryRouter></ReservationFormReducerContext>)

   const email = screen.getByRole('textbox', { name: /^email address$/i });
  const emailConfirmation = screen.getByRole('textbox', { name: /^confirm email address$/i });
  const name = screen.getByRole('textbox', { name: /^name$/i });
  const lastName = screen.getByRole('textbox', { name: /^last name$/i });

    // Separate assertions for the email field
expect(email).toHaveAttribute("required");
expect(email).toHaveAttribute("type", "email");

// Repeat for other fields
expect(emailConfirmation).toHaveAttribute("required");
expect(emailConfirmation).toHaveAttribute("type", "email");

expect(name).toHaveAttribute("required");
expect(name).toHaveAttribute("type", "text");

expect(lastName).toHaveAttribute("required");
expect(lastName).toHaveAttribute("type", "text");
    
  })

})

  
describe("Test For Validation Schema feedback in the form while filling it", () => {
  

  //Date select
 test("Date field valid input assessment", async () => {
  const user = userEvent.setup();
  render(
    <ReservationFormReducerContext>
      <MemoryRouter>
        <DateSelect />
      </MemoryRouter>
    </ReservationFormReducerContext>
  );

  const dateField = screen.getByLabelText(/Date/i);

  // 1. Format Date to YYYY-MM-DD (Required for HTML5 date inputs)
  const currentDate = new Date().toISOString().split('T')[0];

  // 2. Act: Interactions must be awaited
  await user.type(dateField, currentDate);
  await user.tab();

  // 3. Assert: Query the DOM AFTER the interaction to get updated state
  const errorPast = screen.queryByText(/We only accept reservations up to 31 days in advance/i);
  const errorFuture = screen.queryByText(/We only accept bookings until/i);

  expect(errorPast).not.toBeInTheDocument();
  expect(errorFuture).not.toBeInTheDocument();
});

 test("Date field invalid past input assessment should show feedback error", async () => {
  const user = userEvent.setup();
  render(
    <ReservationFormReducerContext>
      <MemoryRouter>
        <DateSelect />
      </MemoryRouter>
    </ReservationFormReducerContext>
  );

  const dateField = screen.getByLabelText(/Date/i);

  // 1. Format Date to YYYY-MM-DD (Required for HTML5 date inputs)
  let pastDate = new Date();
  pastDate.setDate(pastDate.getDate() - 1)
  pastDate = pastDate.toISOString().split('T')[0];

  // 2. Act: Interactions must be awaited
  await user.type(dateField, pastDate);
  await user.tab();

  // 3. Assert: Query the DOM AFTER the interaction to get updated state
  const errorPast = screen.queryByText(/We only accept reservations up to 31 days in advance/i);

  expect(errorPast).toBeInTheDocument();
});

 test("Date field invalid future input assessment should show feedback error", async () => {
  const user = userEvent.setup();
  render(
    <ReservationFormReducerContext>
      <MemoryRouter>
        <DateSelect />
      </MemoryRouter>
    </ReservationFormReducerContext>
  );

  const dateField = screen.getByLabelText(/Date/i);

  // 1. Format Date to YYYY-MM-DD (Required for HTML5 date inputs)
  const timeLimit = 32
  let futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + timeLimit)
  futureDate = futureDate.toISOString().split('T')[0];

  // 2. Act: Interactions must be awaited
  await user.type(dateField, futureDate);
  await user.tab();

  // 3. Assert: Query the DOM AFTER the interaction to get updated state
  const errorFuture = screen.queryByText(/We only accept bookings until/i);

  expect(errorFuture).toBeInTheDocument();
});
  // --- Field Specific Tests ---

  test("Reservation hour only click but unselect hour should show feedback error ", async () => {
  const user = userEvent.setup();
  render(
    <ReservationFormReducerContext>
      <MemoryRouter>
        <DateSelect />
      </MemoryRouter>
    </ReservationFormReducerContext>
  );

  const hourField = screen.getByLabelText(/Time/i);

  
  // 2. Act: Interactions must be awaited
  await user.click(hourField);
  await user.tab();

  // 3. Assert: Query the DOM AFTER the interaction to get updated state
  const errorFuture = screen.queryByText(/Please select the reservation hour/i);

  expect(errorFuture).toBeInTheDocument();
});

// PartySizeCounter

test("Unchange value in number of guests should show feedback error", async () => {
  const user = userEvent.setup();
  render(
    <ReservationFormReducerContext>
      <MemoryRouter>
        <PartySizeCounter/>
      </MemoryRouter>
    </ReservationFormReducerContext>
  );

   const partyCounterField = screen.getByRole("spinbutton")

  
  // 2. Act: Interactions must be awaited
  await user.click(partyCounterField);
  await user.tab();

  // 3. Assert: Query the DOM AFTER the interaction to get updated state
  const errorMessage = screen.queryByText(/Must be greater than 0/i);

  expect(errorMessage).toBeInTheDocument();
});

test("Value selected for party size is less than cero show feedback error", async () => {
  const user = userEvent.setup();
  render(
    <ReservationFormReducerContext>
      <MemoryRouter>
        <PartySizeCounter/>
      </MemoryRouter>
    </ReservationFormReducerContext>
  );

   const partyCounterField = screen.getByRole("spinbutton")

  
  // 2. Act: Interactions must be awaited
  await user.clear(partyCounterField)
  await user.type(partyCounterField, "-2");
  await user.tab();

  // 3. Assert: Query the DOM AFTER the interaction to get updated state
  const errorMessage = screen.queryByText(/Must be greater than 0/i);

  expect(errorMessage).toBeInTheDocument();
});

test("Value selected for party size is greater than max show feedback error", async () => {
  const user = userEvent.setup();
  render(
    <ReservationFormReducerContext>
      <MemoryRouter>
        <PartySizeCounter/>
      </MemoryRouter>
    </ReservationFormReducerContext>
  );

   const partyCounterField = screen.getByRole("spinbutton")
   const max = 21

  
  // 2. Act: Interactions must be awaited
  await user.clear(partyCounterField)
  await user.type(partyCounterField, `${max + 1}`);
  await user.tab();

  // 3. Assert: Query the DOM AFTER the interaction to get updated state
  const errorMessage = screen.queryByText(/Must be less than/i);

  expect(errorMessage).toBeInTheDocument();
});

test("Value selected for party size is less than cero show feedback error", async () => {
  const user = userEvent.setup();
  render(
    <ReservationFormReducerContext>
      <MemoryRouter>
        <PartySizeCounter/>
      </MemoryRouter>
    </ReservationFormReducerContext>
  );

   const partyCounterField = screen.getByRole("spinbutton")

  
  // 2. Act: Interactions must be awaited
  await user.clear(partyCounterField)
  await user.type(partyCounterField, "-2");
  await user.tab();

  // 3. Assert: Query the DOM AFTER the interaction to get updated state
  const errorMessage = screen.queryByText(/Must be greater than 0/i);

  expect(errorMessage).toBeInTheDocument();
});

// Ocassion type 

test("click but unselected value should trigger a feedback error message", async () => {
  const user = userEvent.setup();
  render(
    <ReservationFormReducerContext>
      <MemoryRouter>
        <OcassionType/>
      </MemoryRouter>
    </ReservationFormReducerContext>
  );

   const selectOcassionField = screen.getByRole("combobox")

  
  // 2. Act: Interactions must be awaited
  
  await user.click(selectOcassionField);
  await user.tab();

  // 3. Assert: Query the DOM AFTER the interaction to get updated state
  const errorMessage = screen.queryByText(/Please select an occasion/i);

  expect(errorMessage).toBeInTheDocument();
});


});



describe("Contact Information Validation Feedback", () => {
  const setup = () => {
    const user = userEvent.setup();
    render(
      <ReservationFormReducerContext>
        <MemoryRouter>
          <ContactInformation />
        </MemoryRouter>
      </ReservationFormReducerContext>
    );
    return { user };
  };

  test("email field shows error on blur without typing", async () => {
    const { user } = setup();
    const emailInput = screen.getByRole('textbox', { name: /^email address$/i });
    
    await user.click(emailInput);
    await user.tab(); // Triggers onBlur
    
    expect(await screen.findByText(/Please your email/i)).toBeInTheDocument();
  });

  test("email confirmation field shows error on blur without typing", async () => {
    const { user } = setup();
    const emailConfirmInput = screen.getByRole('textbox', { name: /^confirm email address$/i });
    
    await user.click(emailConfirmInput);
    await user.tab();
    
    expect(await screen.findByText(/Please confirm your email/i)).toBeInTheDocument();
  });

  test("name field shows error on blur without typing", async () => {
    const { user } = setup();
    const nameInput = screen.getByRole('textbox', { name: /^name$/i });
    
    await user.click(nameInput);
    await user.tab();
    
    expect(await screen.findByText(/Please type your name/i)).toBeInTheDocument();
  });

  test("last name field shows error on blur without typing", async () => {
    const { user } = setup();
    const lastNameInput = screen.getByRole('textbox', { name: /^last name$/i });
    
    await user.click(lastNameInput);
    await user.tab();
    
    expect(await screen.findByText(/Please type your last name/i)).toBeInTheDocument();
  });

  test("shows error when email and confirmation do not match", async () => {
    const { user } = setup();
  
  const emailInput = screen.getByRole('textbox', { name: /^email address$/i });
  const emailConfirmInput = screen.getByRole('textbox', { name: /^confirm email address$/i });

  // 1. Act: Type mismatched values
  await user.type(emailInput, "user@example.com");
  await user.type(emailConfirmInput, "different@example.com");
  
  // 2. Trigger onBlur on the confirmation field
  await user.tab();

  // 3. Assert: Await the error message rendering
  const errorMessage = await screen.findByText(/Emails must match/i);
  expect(errorMessage).toBeInTheDocument();
});

});
describe("Form Is submitted with required values", () => {
  const validReservation = {
    date: "2026-03-26",
    time: "19:00",
    partySize: 4,
    occasion: "birthday", // ensure this matches the 'value' attribute in your <option>
    name: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    emailConfirmation: "john.doe@example.com"
  };

  const invalidReservation = {
    date: "2025-01-01",
    time: "",
    partySize: -2,
    occasion: "",
    name: "",
    lastName: "",
    email: "invalid-email",
    emailConfirmation: "different@example.com"
  };

  const setupForm = () => {
    const user = userEvent.setup();
    const mockSubmit = jest.fn((e) => e.preventDefault());
    
    render(
      <ReservationFormReducerContext>
        <MemoryRouter>
          <form onSubmit={mockSubmit} name="reservation-form">
            <TableForm />
            <ContactInformation />
            <button type="submit">Submit</button>
          </form>
        </MemoryRouter>
      </ReservationFormReducerContext>
    );
    
    return { user, mockSubmit };
  };

  test("The API call is forbidden when the values are not complete", async () => {
    const { user } = setupForm();

    const dateInput = screen.getByLabelText(/Date/i);
    await user.type(dateInput, invalidReservation.date);

    const partyInput = screen.getByRole("spinbutton");
    await user.clear(partyInput);
    await user.type(partyInput, invalidReservation.partySize.toString());

    const emailInput = screen.getByRole('textbox', { name: /^email address$/i });
    await user.type(emailInput, invalidReservation.email);

    // In JSDOM, verify HTML5 validation states rather than expecting event cancellation
    expect(partyInput).toBeInvalid();
    expect(emailInput).toBeInvalid();
    
  });

  test("The API call is done with proper values", async () => {
    const { user, mockSubmit } = setupForm();

    await user.type(screen.getByLabelText(/Date/i), validReservation.date);
    
    await user.selectOptions(screen.getByLabelText(/Time/i), validReservation.time);

    const partyInput = screen.getByRole("spinbutton");
    await user.clear(partyInput);
    await user.type(partyInput, validReservation.partySize.toString());

    // Target the specific label instead of the generic combobox role
    const occasionInput = screen.getByLabelText(/Select The Ocassion/i);
    await user.selectOptions(occasionInput, validReservation.occasion);

    await user.type(screen.getByRole('textbox', { name: /^name$/i }), validReservation.name);
    await user.type(screen.getByRole('textbox', { name: /^last name$/i }), validReservation.lastName);
    await user.type(screen.getByRole('textbox', { name: /^email address$/i }), validReservation.email);
    await user.type(screen.getByRole('textbox', { name: /^confirm email address$/i }), validReservation.emailConfirmation);

    const submitButton = screen.getByRole('button', { name: /submit/i });
    await user.click(submitButton);

    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });
});
