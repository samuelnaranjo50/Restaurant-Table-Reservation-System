import styles from "./FooterLink.module.css"
import React from "react"

export default function FooterLink(props){
    const links = props.data.map((linkData, index)=>{
       const element = React.createElement('a', {key: index, href:linkData.link},linkData.text)
       return element
    })
    return (
        <div>
            <h3>{props.title}</h3>
            <div className={styles.textLinks}>
               {links}
            </div>
        </div>
    )
}