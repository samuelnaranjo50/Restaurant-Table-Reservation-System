import styles from "./HamburgerLink.module.css"

import { Link } from 'react-router-dom';

export default function HamburgerLink({path, children}){
    return(
       <Link to={path} className={styles.linkContainer}>
           {children}
       </Link>
    )
}