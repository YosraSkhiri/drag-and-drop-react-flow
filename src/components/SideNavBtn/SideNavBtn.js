import React from 'react';
import styles from "./SideNavBtn.module.css";

const SideNavBtn = ({children, label, onClick, type, currentClickedBtn, setCurrentClickedBtn}) => {

  const handleClick = () => {
    if (currentClickedBtn === type) {
      onClick(type, false);
      setCurrentClickedBtn(false);
    } else {
      onClick(type, true);
      setCurrentClickedBtn(type);
    }
  };

  return (
    <div className={styles.sideNavBtnContainer} onClick={handleClick}>
      {
        currentClickedBtn === type ? <div className={styles.sideNavBtnContainerBorder} /> : null
      }
      <button
        className={styles.sideNavBtn}
      >
        {children}
      </button>
      <div className={styles.sideNavBtnLabel}>{label}</div>
    </div>
  );
}
 
export default SideNavBtn;