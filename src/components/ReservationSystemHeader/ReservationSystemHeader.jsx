import styles from './ReservationSystemHeader.module.css'

export default function ReservationSystemHeader() {
    return(
        <header className={styles.headerParentContainer}>
            <div className={styles.imageContainer}>
                <div className={styles.transparentBackground}>
                    <h1>Reserve Your Table</h1>
                    <div>
                        <strong data-testid="first" >System</strong>
                        <p>This is little lemon table booking system</p>
                    </div>
                </div>
                
            </div>
        </header>

    )
}