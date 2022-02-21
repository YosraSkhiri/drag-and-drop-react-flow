import React, {
  memo,
  useState,
  useRef,
} from 'react';
import { Handle } from 'react-flow-renderer';

import styles from "./CustomNode.module.css";

export default memo(({ data }) => {
  const [showDetailsElement, setShowDetailsElement] = useState(false);
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const [time, setTime] = useState(0);
  const [timeUnit, setTimeUnit] = useState("seconds");

  const timeRef = useRef();
  const timeUnitRef = useRef();

  const showDetails = () => {
      if (showDetailsElement) {
        return (
          <div className={styles.customNodeDetails}>
            <div className={styles.customNodeDetailsHeader}>
              <div className={styles.customNodeDetailsTitle}>Highlighter details</div>
              <button className={styles.customNodeDetailsCloseBtn} onClick={handleShowDetails}>
                <svg fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className={styles.customNodeDetailsBody}>
              <p className={styles.customNodeDetailsText}>
                Give your users time to respond.
              </p>
              <div className={styles.groupControl}>
                <label className={styles.groupControlLabel} htmlFor="duration">Duration</label>
                <div className={styles.inputsGroup}>
                  <input className={styles.input} type="number" min="0" placeholder="0" ref={(elem) => timeRef.current = elem} />
                  <select className={styles.input} ref={(elem) => timeUnitRef.current = elem} defaultValue="second">
                    <option value="second">seconds</option>
                    <option value="minute">minutes</option>
                  </select>
                </div>
              </div>
              <button onClick={saveTime} type="button" className={styles.primaryIconBtn}>
                <div className={styles.primaryIconBtnTxt}>Save</div>
                <div className={styles.primaryIconBtnIcon}>
                  <svg viewBox="0 0 40 43">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.66667 0C4.89856 0 3.20286 0.566293 1.95262 1.5743C0.702379 2.58231 0 3.94946 0 5.375V37.625C0 39.0505 0.702379 40.4177 1.95262 41.4257C3.20286 42.4337 4.89856 43 6.66667 43H33.3333C35.1014 43 36.7971 42.4337 38.0474 41.4257C39.2976 40.4177 40 39.0505 40 37.625V14.5501C39.9996 13.1247 39.297 11.7578 38.0467 10.75L26.6667 1.57487C25.4167 0.566797 23.7213 0.000304426 21.9533 0H6.66667ZM9 22C8.11595 22 7 22.9122 7 24C7 25.0878 7 28.6622 7 29.375C7 30.0878 7 34 7 35C7 36 8.11595 37 9 37H31C31.8841 37 33 35.875 33 35C33 34.125 33 30.0878 33 29.375C33 28.6622 33 25 33 24C33 23 31.8841 22 31 22H9Z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        );
      }
  };

  const handleNodeDropdownMenu = () => {
    setShowDropdownMenu((state) => !state);
  };

  const handleShowDetails = () => {
    setShowDetailsElement((state) => !state);
    setShowDropdownMenu(false);
  };

  const saveTime = () => {
    let timeVal = timeRef.current.value;
    let timeUnitVal = timeVal > 1 ? `${timeUnitRef.current.value}s` : timeUnitRef.current.value;
    setTime(timeVal);
    setTimeUnit(timeUnitVal);
    data.updateReplyNode(data.id, timeVal, timeUnitVal);
  };

  const showDetailsDropdown = () => {
      return (
        <div className={styles.detailsDropdownWrapper}>
          <button className={styles.customNodeDetailsMenuBtn} onClick={handleNodeDropdownMenu}>
            <svg viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
            </svg>
          </button>
          {
            showDropdownMenu ? 
            <ul className={styles.detailsDropdownContainer}>
              <li>
                <button onClick={() => data.removeNode(data.id)} className={styles.detailsDropdownBtn}>Delete</button>
              </li>   
            </ul> : null
          } 
        </div>
      );
  };

  return (
    <>
      <div className={styles.customNodeContainer}>
        <div className={styles.customNodeHeader}>
          <div className={styles.customNodeLabelContainer}>
            <div className={styles.customNodeIcon}>
              <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.97998 15.1866C13.3867 15.1866 16.96 12.0106 16.96 8.09331C16.96 4.17603 13.3867 1 8.97998 1C4.57326 1 1 4.17603 1 8.09331C1 9.48892 1.45397 10.7905 2.2369 11.8882L1 15.1866L5.20722 14.3452C6.3863 14.9036 7.67537 15.1911 8.97998 15.1866Z" stroke="#ED7772" strokeWidth="1.77333" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.82 20C11.4132 20 7.83998 16.8239 7.83998 12.9066C7.83998 8.98935 11.4132 5.81332 15.82 5.81332C20.2267 5.81332 23.7999 8.98935 23.7999 12.9066C23.7999 14.3022 23.346 15.6039 22.563 16.7016L23.7999 20L19.5927 19.1585C18.4136 19.7169 17.1246 20.0044 15.82 20Z" fill="#F0F0F3" stroke="#ED7772" strokeWidth="1.77333" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.6506 10.0133C15.939 10.2441 15.9858 10.665 15.755 10.9535L14.8407 12.0964H17.9084C18.2778 12.0964 18.5773 12.3959 18.5773 12.7653C18.5773 13.1348 18.2778 13.4343 17.9084 13.4343H14.8407L15.755 14.5772C15.9858 14.8657 15.939 15.2867 15.6506 15.5175C15.3621 15.7482 14.9411 15.7015 14.7103 15.413L12.9285 13.1856C12.8367 13.0721 12.7813 12.928 12.78 12.771C12.78 12.7691 12.78 12.7672 12.78 12.7653L12.78 12.7632C12.7805 12.6034 12.837 12.4569 12.9309 12.3421L14.7103 10.1177C14.9411 9.82926 15.3621 9.78249 15.6506 10.0133Z" fill="#ED7772"/>
              </svg>
            </div>
            <div className={styles.customNodeLabel}>Wait for a response</div>
          </div>
          <div className={styles.customNodeActionsContainer}>
            <button onClick={handleShowDetails} className={styles.customNodeActionsBtn} type="button">Edit</button>
            { showDetailsDropdown() }
          </div>
        </div>
        <div className={styles.customNodeBody}>
          <p className={styles.customNodeBodyTxt}>
            {`Wait for ${time} ${timeUnit}`}
          </p>
        </div>
        { showDetails() }
      </div>
      <Handle
        type="target"
        id={`top_reply_${data.id}`}
        key={`top_reply_${data.id}`}
        position="top"
        isConnectable={true}
        style={{
          transform: "translate(25%, -25%)",
          width: 16,
          height: 16,
          background: "#f0f0f0",
          border: "4px solid #2d5ce5",
          boxShadow: "0px 0px 0px 3px #f0f0f0, rgba(0, 0, 0, 0.07) 0px 4px 4px"
        }}
      />
      <Handle
        type="source"
        id={`bottom_reply_${data.id}`}
        key={`bottom_reply_${data.id}`}
        position="bottom"
        isConnectable={true}
        style={{
          transform: "translateY(25%)",
          width: 16,
          height: 16,
          background: "#f0f0f0",
          border: "4px solid #2d5ce5",
          boxShadow: "0px 0px 0px 3px #f0f0f0, rgba(0, 0, 0, 0.07) 0px 4px 4px"
        }}
      />
    </>
  );
});
