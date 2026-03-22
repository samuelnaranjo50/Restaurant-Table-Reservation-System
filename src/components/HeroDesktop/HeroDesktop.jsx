import Button from "../Button"
import styles from "./HeroDesktop.module.css"
import { useNavigate } from "react-router-dom"
import ConfirmationButton from "../ConfirmationButton/ConfirmationButton"
import foodImage from "../../assets/Images/vista-superior-de-comida-en-mesa\ 1.png"
export default function HeroDesktop(props){

    const navigate = useNavigate()
    
    return (
        <section className={styles.heroSection}>
            
                <div className={styles.heroTextContainer}>
                    <h1 className={styles.heroH1}>Little Lemon</h1>
                    <strong className={styles.strong}>Chicago</strong>
                    <p className={styles.paragraphText}>Your favorite neighborhood spot for fresh flavors and great company. At Little Lemon, we believe that the best memories are made over a shared meal</p>
                    <ConfirmationButton dispatch={()=> navigate("/reservation-details")}>Reserve a table</ConfirmationButton>       
                    
                    
                </div>  
            

            <img src={foodImage} alt="" className={styles.image} />
            
        </section>
    )
}