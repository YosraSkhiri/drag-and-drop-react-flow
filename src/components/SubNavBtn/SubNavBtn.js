import React from 'react';
import styles from "./SubNavBtn.module.css";

const SubNavBtn = ({children, label, onDragStart, isDraggable}) => {
  return (
    <button
      className={styles.subNavBtnContainer}
      onDragStart={onDragStart}
      draggable={isDraggable}
    >
      <div className={styles.subNavIconWrapper}>
        {children}
      </div>
      <div className={styles.subNavBtnLabel}>{label}</div>
    </button>
  );
}
 
export default SubNavBtn;