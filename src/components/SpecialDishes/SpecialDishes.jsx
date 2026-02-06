import Button from "../Button"
import DishCard from "../DishCard/DishCard"
import styles from "./SpecialDishes.module.css"

const synteticDishData = [
    {
    id: 1,
    title: "Greek Salad",
    price: 12.99,
    description: "Crispy lettuce, peppers, olives, and our signature feta cheese, garnished with crunchy garlic croutons.",
    getImageSrc: () => require("../../assets/Images/Success Background image mobile (1).png"),
  },
  
  {
    id: 2,
    title: "Bruschetta",
    price: 5.99,
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    getImageSrc: () => require("../../assets/Images/Success Background image mobile (1).png"),
  },
  {
    id: 3,
    title: "Lemon Dessert",
    price: 5.00,
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require("../../assets/Images/Success Background image mobile (1).png"),
  },
]

export default function SpecialDishes(){

    

    let renderedDishes = synteticDishData.map((dish, index)=>{
        console.log("Data pass through props -> ", synteticDishData[index] );
        return <DishCard props={synteticDishData[index]}/>
    })

    return (
        <section className={styles.specialDishesSection}>
            <div className={styles.upperSection} >
                <h2 className={styles.subtitle}>Specials</h2>
                <button className={styles.menuButton} >Online Menu</button>
            </div>
            
            <div className={styles.dishContainer}>
                {renderedDishes /*Collection of dishes*/ }
                <div className={styles.scrollSpacer}></div> {/*Extra div to avoid tthe last card to be crop*/}
            </div>
               
        </section>
    )
}