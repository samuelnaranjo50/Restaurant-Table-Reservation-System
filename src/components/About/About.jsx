
import styles from "./About.module.css"

export default function About(){
    return (
        <div className={styles.section}>
            <div>
                <div>
                    <h1 className={styles.heading}>About us</h1>
                    <strong>Little Lemon</strong>
                </div>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae rerum voluptatum nobis fugit. Praesentium porro deleniti soluta. Temporibus obcaecati odit asperiores voluptatibus sapiente, eius nobis nulla libero cupiditate impedit.</p>
                
            </div>
            <img className={styles.image} alt="ahghaGH"/>
        </div>
    )
}