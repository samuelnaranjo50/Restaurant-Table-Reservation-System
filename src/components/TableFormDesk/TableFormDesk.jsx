import styles from './TableFormDesk.module.css'

//components ->

import DateSelect from '../DateSelect/DateSelect'
import PartySizeCounter from '../PartySizeCounter/PartySizeCounter'
import OcassionType from '../OcassionType/OcassionType'


//Schema validation & button
import WrapperNavigate from '../WrapperNavigate/WrapperNavigate'


export default function TableFormDesk(){
    return(
        <form action="post" className={styles.container} >
                {/*Component for date and time*/ }

                <div className={styles.formContainer}>

                    <div className={styles.fieldWrapper}>
                        <DateSelect/>
                    </div>
                     <div className={styles.fieldWrapper}>
                        <PartySizeCounter/>
                    </div>
                    <div className={styles.fieldWrapper}>
                        <OcassionType/>
                    </div>
                    
                </div>

        

            
                <WrapperNavigate />

             </form>

    )
}