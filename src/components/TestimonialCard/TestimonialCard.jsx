import styles from "./TestimonialCard.module.css"
import star from "../../assets/icons/estrella-en-negro-de-forma-de-cinco-puntas.png"



export default function TestimonialCard ({props: {id, name, rating, comment, getImageSrc}}){

    
        let startArr = []
        for(let i= 0; i < rating; i++){
            startArr.push(<img key={i} src={star} alt= "start"/>);
        }


    return(
        <section key={id} className={styles.card}>
            <h3>{name}</h3>
            <div className={styles.testimonialContent}>
                <img src={getImageSrc()} alt="Rater image" className={styles.image} />
                
                <div className={styles.testimonialDescription}>
                    <p>{comment}</p>
                    <div className={styles.testimonialRating}>
                        {startArr /*Auto generated rating*/ }
                    </div>
                </div>
            </div>

        </section>
    )
}