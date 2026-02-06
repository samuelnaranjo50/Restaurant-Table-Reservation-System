import styles from "./DishCard.module.css"
import deliverBike from "../../assets/icons/deliver bike.png"
export default function DishCard ({props: {id, title, price, description, getImageSrc}}){

    return (
        <div key={id} className={styles.DishCard}>
            <img className={styles.dishImage} src={getImageSrc()} alt="Dish Image"/>
            <div className={styles.dishContent}>
                <div className={styles.dishInfo}>
                    <h3 className={styles.emphazis}>{title}</h3>
                    <strong className={styles.price}>${price}</strong>
                </div>
                <div className={styles.dishDescription}>
                    <p className={styles.paragraphText}>{description}</p>
                </div>
                <div className={styles.dishCallToAction}>
                    <strong className={styles.deliver}>Order a delivery</strong>
                    <img src={deliverBike} alt="Deliver car"/>
                </div>
            
            
            </div>
        </div>
    )
}