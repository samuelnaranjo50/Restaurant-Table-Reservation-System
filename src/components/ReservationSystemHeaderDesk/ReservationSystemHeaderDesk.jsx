import styles from './ReservationSystemHeaderDesk.module.css'
import tablesImage from '../../assets/Images/Tables-images-small.png'

export default function ReservationSystemHeaderDesk() {
    return(
        <header className={styles.headerParentContainer}>
            <div className={styles.mainContainer}>
                <div className={styles.transparentBackground}>
                    <h1>Reserve Your Table</h1>
                    <div>
                        <strong>System</strong>
                        <p>This is little lemon table booking system</p>
                    </div>
                </div>

                <img src={tablesImage} alt="A beautiful restaurant with some high quality wood tables" />
                
            </div>
        </header>

    )
}