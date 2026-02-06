import styles from "./CustomHr.module.css"

export default function CustomBr(props){
    let style;
    if(!props.style){
        style = {
            width: "90vw",
            opacity: "60%",
        }
    }
    else{
        style = {
            ...props.style,
        }
    }
    return(
        <>
            <hr style={style}/>
        </>
    )
}