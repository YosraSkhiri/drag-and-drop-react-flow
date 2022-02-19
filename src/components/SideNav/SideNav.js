import React, {
  useState,
} from 'react';
import SideNavBtn from '../SideNavBtn/SideNavBtn';
import styles from "./SideNav.module.css";

const SideNav = ({handleBtnClick}) => {
  const [currentClickedBtn, setCurrentClickedBtn] = useState(false);

  return (
    <nav className={styles.sideNav}>
      <SideNavBtn label="Regular" onClick={handleBtnClick} type="regular" currentClickedBtn={currentClickedBtn} setCurrentClickedBtn={setCurrentClickedBtn}>
        <svg viewBox="0 0 60 54" fill="none">
          <path strokeLinecap="round" strokeLinejoin="round" d="M30 50.9998C15.09 50.9998 3 40.2539 3 26.9999C3 13.746 15.09 3 30 3C44.91 3 57 13.746 57 26.9999C57 31.7219 55.464 36.1259 52.815 39.8399L57 50.9998L42.765 48.1528C38.7756 50.0421 34.4141 51.0149 30 50.9998Z" />
        </svg>
      </SideNavBtn>
      <SideNavBtn label="Logic & Triggers" onClick={handleBtnClick} type="logic" currentClickedBtn={currentClickedBtn} setCurrentClickedBtn={setCurrentClickedBtn}>
        <svg viewBox="0 0 60 60" fill="none">
          <path strokeLinecap="round" strokeLinejoin="round" d="M24.6 49.8L24.6 3M35.4 57V10.2M13.8 42.6L13.8 17.4M46.2 42.6V17.4M57 31.5V27.9M3 31.5V27.9" />
        </svg>
      </SideNavBtn>
    </nav>
  );
}
 
export default SideNav;
