import Button from "../Button"
import styles from "./Hero.module.css"

export default function Hero(props){
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <div className={styles.heroTextContainer}>
                    <h1 className={styles.heroH1}>Little Lemon</h1>
                    <strong className={styles.strong}>Chicago</strong>
                    <p className={styles.paragraphText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button/>

                </div>
                
            </div>
            
        </section>
    )
}