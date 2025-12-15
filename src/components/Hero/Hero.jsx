import Button from "../Button"
import styles from "./Hero.module.css"

export default function Hero(props){
    return (
        <div className={styles.heroSection}>
            <div className={styles.h}>
                <h1>Little Lemon</h1>
                <strong>Chicago</strong>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae rerum voluptatum nobis fugit. Praesentium porro deleniti soluta. Temporibus obcaecati odit asperiores voluptatibus sapiente, eius nobis nulla libero cupiditate impedit.</p>
                <Button/>
            </div>
            <img className={styles.image} alt="ahghaGH"/>
        </div>
    )
}