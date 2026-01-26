import { useReservationFormReducer } from "../../context/reservationReducer";
import { Link, useNavigate } from "react-router-dom";

// Random ref function
  let randomRef = () => {
    let arr = [];
    let num = 0;
    for (let i = 0; i < 3; i++) {
      num = Math.floor(Math.random() * 10);
      arr.push(num);
    }
    let reference = arr.join("");
    return reference;
  };

export default function SuccesfulBooking() {
  const { reservationState, reservationDispatch } = useReservationFormReducer();
  const navigate = useNavigate();

  const resetStateDispatch = () => reservationDispatch({type: "RESET_STATE"})
 


  // Getting state data to give feedback
  let name = reservationState.name.value;
  let email = reservationState.email.value;
  let dayHour = `${reservationState.date.value} ${reservationState.time.value}`;
  let guests = reservationState.partySize.value;
  let referenceRandom = randomRef();

  return (
    <div>
      <header>
        <h1>Table Secured! We’ll see you soon, {name}.</h1>
        <p>
          Your reservation is confirmed. A copy of this receipt has been sent to{" "}
          {email}.
        </p>
      </header>
      <main>
        <h2>At a glance</h2>

        <section>
          <div>
            <p>When</p>
            <p>{dayHour}</p>
          </div>
          <div>
            <p>Who</p>
            <p>{guests} Guests</p>
          </div>
          <div>
            <p>Reference</p>
            <p>#RR{referenceRandom}</p>
          </div>
        </section>

        <section>
          <div></div>
          <div></div>
          <div></div>
        </section>

        <section>
          <button
            onClick={() => {
              navigate("/");
              resetStateDispatch()
            }}
          >
            Return home
          </button>

          <button
            onClick={() => {
              navigate("/reservation-details");
              resetStateDispatch()
            }}
          >
            book another table
          </button>
        </section>
      </main>
    </div>
  );
}
