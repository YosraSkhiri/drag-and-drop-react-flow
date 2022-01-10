import React, {
  memo,
  useState,
} from 'react';
import { Handle } from 'react-flow-renderer';

import styles from "./CustomNode.module.css";

export default memo(({ data }) => {

  const [showDetailsElement, setShowDetailsElement] = useState(false);
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  const showDetails = () => {
    if (data.label === "Baloon") {
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
              <div className={styles.customNodeDetailsPhotoWrapper}>
                <button className={styles.customNodeDetailsEditPhotoBtn}>
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                  </svg>
                </button>
                <div className={styles.customNodeDetailsPhoto}></div>
              </div>
              <button className={styles.secondaryBtn}>Change settings</button>
              <div className={styles.groupControl}>
                <label className={styles.groupControlLabel} htmlFor="name">Highlighter name</label>
                <input className={styles.groupControlInput} type="text" name="highlighterName" id="highlighterName" placeholder="Enter name" />
              </div>
              <button className={styles.primaryIconBtn}>
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
    }
  };

  const generateHandles = () => {
    if (data.label === "Baloon") {
      return (
        <>
          <Handle
            type="source"
            id={`left_baloon_${data.nodeId}`}
            key={`left_baloon_${data.nodeId}`}
            position="left"
            isConnectable={true}
            style={{
              transform: "translateX(-25%)",
              width: 16,
              height: 16,
              background: "#f0f0f0",
              border: "4px solid #2d5ce5",
              boxShadow: "0px 0px 0px 3px #f0f0f0, rgba(0, 0, 0, 0.07) 0px 4px 4px"
            }}
          />
          <Handle
            type="source"
            id={`bottom_baloon_${data.nodeId}`}
            key={`bottom_baloon_${data.nodeId}`}
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
          <Handle
            type="source"
            id={`right_baloon_${data.nodeId}`}
            key={`right_baloon_${data.nodeId}`}
            position="right"
            isConnectable={true}
            style={{
              transform: "translateX(25%)",
              width: 16,
              height: 16,
              background: "#f0f0f0",
              border: "4px solid #2d5ce5",
              boxShadow: "0px 0px 0px 3px #f0f0f0, rgba(0, 0, 0, 0.07) 0px 4px 4px"
            }}
          />
        </>
      );
    } else {
      return (
        <Handle
          type="target"
          id={`top_shoutout_${data.nodeId}`}
          key={`top_shoutout_${data.nodeId}`}
          position="top"
          isConnectable={true}
          style={{
            transform: "translateY(-25%)",
            width: 16,
            height: 16,
            background: "#f0f0f0",
            border: "4px solid #2d5ce5",
            boxShadow: "0px 0px 0px 3px #f0f0f0, rgba(0, 0, 0, 0.07) 0px 4px 4px"
          }}
        />
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

  const showDetailsDropdown = () => {
    if (data.label === "Baloon") {
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
                <button className={styles.detailsDropdownBtn} onClick={handleShowDetails}>Show Details</button>
              </li>
            </ul> : null
          } 
        </div>
      );
    }
  };

  return (
    <>
      <div className={styles.customNodeContainer}>
        <div className={styles.customNodeHeader}>
          <div className={styles.customNodeLabelContainer}>
            <div className={styles.customNodeIcon} style={{backgroundColor: data.backgroundColor}}>{data.icon}</div>
            <div className={styles.customNodeLabel}>{data.label}</div>
          </div>
          { showDetailsDropdown() }
        </div>
        <div className={styles.customNodeBody}>
          <p className={styles.customNodeBodyTxt}>
            Notifications are an important communication tool between
            platforms and their users.
          </p>
        </div>
        { showDetails() }
      </div>
      { generateHandles() }
    </>
  );
});
