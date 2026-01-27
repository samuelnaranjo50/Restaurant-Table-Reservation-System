import styles from "./CancelationPolicy.module.css"

export default function CancelationPolicy(){

    return(
        <div className={styles.mainContainer}>
            <h2>CANCELATION POLICY</h2>
            <p className={styles.paragraph}>
                There is no cost for your reservation. We require a credit card to secure your booking, but it will only be charged if you miss your reservation
            </p>
            <p className={styles.paragraph}>
                If you do not cancel or modify your reservation by 4 hours prior to your booking, a <bold>$15</bold> per person no-show fee will apply.
            </p>

            <div className={styles.priceContainer}>
                <strong>$15 / Person</strong>
            </div>
            


        </div>
    )


}