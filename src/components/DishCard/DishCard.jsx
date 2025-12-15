import styles from "./DishCard.module.css"

export default function DishCard (){

    return (
        <div className={styles.DishCard}>
            <img className={styles.dishImage} alt="Dish Image"/>
            <div className={styles.dishContent}>
                <div className={styles.dishInfo}>
                    <h3>Greek Salad</h3>
                    <strong>$12.00</strong>
                </div>
                <div className={styles.dishDescription}>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                </div>
                <div className={styles.dishCallToAction}>
                    <strong>Order a delivery</strong>
                    <img alt="Deliver car"/>
                </div>
            
            
            </div>
        </div>
    )
}