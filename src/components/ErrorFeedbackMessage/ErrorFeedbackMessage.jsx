import styles from  './ErrorFeedbackMessage.module.css'

export default function ErrorFeedbackMessage({children}){
    let errorMessage = children
    let isError =  errorMessage.length > 0
    return(
        <div className={styles.errorWrapper}>
          {isError && <p className={styles.errorMsg} key={errorMessage.length * 2 / Math.random() }> * {children}</p>}
        </div>
    )
}