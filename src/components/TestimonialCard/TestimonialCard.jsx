import styles from "./TestimonialCard.module.css"

export default function TestimonialCard (){
    return(
        <section className={styles.card}>
            <h3>Name</h3>
            <div className={styles.testimonialContent}>
                <img src="" alt="My img" className={styles.image} />
                
                <div className={styles.testimonialDescription}>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className={styles.testimonialRating}></div>
                </div>
            </div>

        </section>
    )
}