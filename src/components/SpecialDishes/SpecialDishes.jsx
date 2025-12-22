import Button from "../Button"
import DishCard from "../DishCard/DishCard"
import styles from "./SpecialDishes.module.css"

export default function SpecialDishes(){

    return (
        <section className={styles.SpecialDishesSection}>
            <div className={styles.upperSection} >
                <h2 className={styles.subtitle}>Specials</h2>
                <Button/>
            </div>
            <div className={styles.specialDishesSection}>
                <DishCard/>
            </div>
               
        </section>
    )
}