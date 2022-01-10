import React from 'react';
import styles from "./CustomControlBtn.module.css";

const CustomControlBtn = ({children, callback, type}) => {
  return (
    <button onClick={callback} className={type === "square" ? styles.squareBtn : styles.roundBtn}>
      {children}
    </button>
  );
}
 
export default CustomControlBtn;
