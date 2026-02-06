
import styles from "./About.module.css"
import image from "../../assets/Images/Success Background image mobile.png"

export default function About(){
    return (
        <section className={styles.section}>
           
                <img className={styles.image}  src={image} alt="Delicious food"/>
            
            
            <div className={styles.textContainer}>
                
                
                    <h1 className={styles.heading}>About us</h1>
                    <strong>Little Lemon</strong>
                
                
                <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                
            </div>
            
        </section>
    )
}