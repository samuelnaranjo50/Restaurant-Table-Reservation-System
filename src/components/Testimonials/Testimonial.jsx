import styles from "./Testimonials.module.css"
import TestimonialCard from "../TestimonialCard/TestimonialCard"
export default function Testimonials (){
    return(
        <div className={styles.section}>
            <h2>Testimonials</h2>
            <TestimonialCard/>
        </div>
    )
    
}