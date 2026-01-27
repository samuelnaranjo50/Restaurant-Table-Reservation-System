import styles from "./SuccessfulBooking.module.css"
import { useReservationFormReducer } from "../../context/reservationReducer";
import {useNavigate } from "react-router-dom";

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
    <div className={styles.mainContainer}>
      <header className={styles.hero}>
        <h1>Table Secured! We’ll see you soon, {name}.</h1>
        <p>
          Your reservation is confirmed. A copy of this receipt has been sent to{" "}
          {email}.
        </p>
      </header>
      <main>
        

        <section>

          <table className={styles.summary}>
            
              <thead>
                <th>When</th>
                <th>Who</th>
                <th>Reference</th>
              </thead>
              <tbody>
                
                  <td>{dayHour}</td>
                
                  <td>{guests} Guests</td>
                
                
                  <td>#RR{referenceRandom}</td>
                
                
              </tbody>
              
            
          </table>
          
        </section>

        <section className={styles.buttonContainer}>
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
