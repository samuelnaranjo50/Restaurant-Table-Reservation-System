import styles from "./Testimonials.module.css"
import TestimonialCard from "../TestimonialCard/TestimonialCard"

const testimonials = [
  {
    id: 1,
    name: "Sara Lopez",
    rating: 5,
    comment: "The atmosphere is just as fresh as the ingredients. A total gem!",
    getImageSrc: () => require("../../assets/Images/testimonials/retrato-de-una-mujer-feliz-comiendo-afuera-desayunando-y-hablando-con-un-amigo-en-la-mesa-mirando-un-lado-con-una-sonrisa-alegre-sentada-cerca-del-telefono-movil-en-la-terraza 1.png"),
  },
  {
    id: 2,
    name: "Marcus Chen",
    rating: 4,
    comment: "Best bruschetta in the city. Simple, honest, and delicious.",
    getImageSrc: () => require("../../assets/Images/testimonials/Retrator hombre tranqui.png"),
  },
  {
    id: 3,
    name: "Elena Rossi",
    rating: 5,
    comment: "The lemon dessert is a must-try. I'll definitely be coming back!",
    getImageSrc: () => require("../../assets/Images/testimonials/Retrato mujer tranqui.png"),
  },

];

export default function Testimonials (){

    let renderedTestiomials = testimonials.map((testimonial)=>{
        console.log("Testimonial n", testimonial);
        return <TestimonialCard props={testimonial}/>
    })
    return(
        <div className={styles.section}>
            <h2>Testimonials</h2>
            <div className={styles.cards}>
              {renderedTestiomials}
            </div>
            
        </div>
    )
    
}