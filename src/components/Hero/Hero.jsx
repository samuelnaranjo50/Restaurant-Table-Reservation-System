import Button from "../Button"
import styles from "./Hero.module.css"
import { useNavigate } from "react-router-dom"
import ConfirmationButton from "../ConfirmationButton/ConfirmationButton"

export default function Hero(props){

    const navigate = useNavigate()
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <div className={styles.heroTextContainer}>
                    <h1 className={styles.heroH1}>Little Lemon</h1>
                    <strong className={styles.strong}>Chicago</strong>
                    <p className={styles.paragraphText}>Your favorite neighborhood spot for fresh flavors and great company. At Little Lemon, we believe that the best memories are made over a shared meal</p>
                    <ConfirmationButton dispatch={()=> navigate("/reservation-details")}>Reserve a table</ConfirmationButton>

                    
                </div>
                
            </div>
            
        </section>
    )
}