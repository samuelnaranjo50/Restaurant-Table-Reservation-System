import styles from './TableForm.module.css'

//components ->

import DateSelect from '../DateSelect/DateSelect'
import PartySizeCounter from '../PartySizeCounter/PartySizeCounter'
import OcassionType from '../OcassionType/OcassionType'
import CustomHr from '../CustomHr/CustomHr'


//Schema validation & button
import WrapperNavigate from '../WrapperNavigate/WrapperNavigate'


export default function TableFormDesk(){
    return(
       <form action="post" className={styles.formContainer}>
                {/*Component for date and time*/ }

                <DateSelect/>

                <CustomHr/>

                
                <PartySizeCounter/>

               <CustomHr/>

                <OcassionType/>

               <CustomHr/>

                <WrapperNavigate />

             </form>
       

    )
}