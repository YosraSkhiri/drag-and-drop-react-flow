import React from 'react';
import styles from "./SideNavBtn.module.css";

const SideNavBtn = ({children, label, onDragStart, isDraggable}) => {
  return (
    <div className={styles.sideNavBtnContainer}>
      <button
        className={styles.sideNavBtn}
        onDragStart={onDragStart}
        draggable={isDraggable}
      >
        {children}
      </button>
      <div className={styles.sideNavBtnLabel}>{label}</div>
    </div>
  );
}
 
export default SideNavBtn;