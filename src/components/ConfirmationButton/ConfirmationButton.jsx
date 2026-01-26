import styles from "./ConfirmationButton.module.css";
import {useRef} from "react";


export default function ConfirmationButton({ children, dispatch }) {
  // This section provides styling logic for user actions
  const buttonRef = useRef(null);

  const handleButtonclickDown = () => {
    buttonRef.current.style.backgroundColor = "#495E57";
  };

  const handleButtonclickUp = () => {
    buttonRef.current.style.backgroundColor = "#F4CE14";
  };

  return (
    
      <button
        type="button"
        className={styles.button}
        ref={buttonRef}
        onMouseDown={handleButtonclickDown}
        onMouseUp={handleButtonclickUp}
        onClick={dispatch}
      >
        {children}
      </button>
    
  );
}
