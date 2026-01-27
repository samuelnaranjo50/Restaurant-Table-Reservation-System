import styles from "./SuccessfulBooking.module.css"
import { useReservationFormReducer } from "../../context/reservationReducer";
import {useNavigate } from "react-router-dom";

//Components
import ConfirmationButton from "../ConfirmationButton/ConfirmationButton"; 

// Assets
import logoWhite from "../../assets/logos/Little lemon white logo green background.svg"
import dateIcon from '../../assets/icons/date-icon.svg'
import guestsIcon from "../../assets/icons/partyIcon.svg"
import numeralIcon from '../../assets/icons/numeral.svg'
// Random ref function
  let randomRef = () => {
    let arr = [];
    let num = 0;
    for (let i = 0; i < 6; i++) {
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
    <div className={styles.pageContainer}>
    <div className={styles.mainContainer}>
      <header className={styles.hero}>
        <div className={styles.successToast}>
          <img src={logoWhite} alt="Little lemon logo" />
          <h1>Table Secured! We’ll see you soon, {name}.</h1>
        </div>
        
        <p>
          Your reservation is confirmed. A copy of this receipt has been sent to{" "}
          {email}.
        </p>
      </header>
      <main>
        

        <section>

          <table className={styles.summaryTable}>
            
              <thead>
                <th>When</th>
                <th>Who</th>
                <th>Reference</th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div>
                      <img src={dateIcon} alt="Date icon" className={styles.icons} />
                      <p>{dayHour}</p>
                    </div>
                    
                
                  </td>
                
                  <td>
                    <div>
                        <img src={guestsIcon} alt="Guests icon" className={styles.icons} />
                        {guests} Guests
                    </div>
                  </td>
                    
                
                
                  <td>
                    <div>
                       <img src={numeralIcon} alt="Numeral icon" className={styles.iconNum} />
                       {referenceRandom}
                    </div>
                    
                  </td>
                </tr>
                
              </tbody>
              
            
          </table>
          
        </section>

        <section className={styles.buttonContainer}>

          <ConfirmationButton dispatch={() => {
              navigate("/");
              resetStateDispatch()
            }}>Return Home</ConfirmationButton>

          
          
            <ConfirmationButton dispatch={() => {
              navigate("/reservation-details");
              resetStateDispatch()
            }}> Another Booking</ConfirmationButton>

        </section>
      </main>
    </div>
    </div>
  );
}
