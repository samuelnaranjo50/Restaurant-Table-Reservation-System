import styles from './ConfirmationButton.module.css'

export default function ConfirmationButton ({children}){
    return(
        <button type="button" className={styles.button}>
            {children}
        </button>
    )
}