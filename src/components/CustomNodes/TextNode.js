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
  const [text, setText] = useState("Write a message...");

  const textarea = useRef();

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
                Reply with a pre-defined messages to the users who triggered this flow.
              </p>
              <div className={styles.groupControl}>
                <label className={styles.groupControlLabel} htmlFor="message">Message</label>
                <textarea ref={(elem) => textarea.current = elem} className={styles.groupControlTextarea} name="message" id="message" />
              </div>
              <button onClick={saveMessage} type="button" className={styles.primaryIconBtn}>
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

  const saveMessage = () => {
    setText(textarea.current.value);
    data.updateTextNode(data.id, textarea.current.value);
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
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7891 0L16 4.471H15.4657C15.3626 3.68366 15.222 3.12127 15.0439 2.78383C14.7534 2.24019 14.3644 1.84183 13.877 1.58875C13.3989 1.3263 12.7663 1.19508 11.9789 1.19508H9.2935V15.761C9.2935 16.9326 9.42004 17.6637 9.67311 17.9543C10.0293 18.348 10.5776 18.5448 11.3181 18.5448H11.9789V19.065H3.89455V18.5448H4.56942C5.37551 18.5448 5.94728 18.3011 6.28471 17.8137C6.49092 17.5138 6.59402 16.8295 6.59402 15.761V1.19508H4.30228C3.41183 1.19508 2.77914 1.26069 2.40422 1.39192C1.91681 1.57001 1.49971 1.91213 1.1529 2.41828C0.806093 2.92443 0.599883 3.60867 0.534271 4.471H0L0.224956 0H15.7891Z" fill="url(#paint0_linear_26_106)"/>
                <defs>
                  <linearGradient id="paint0_linear_26_106" x1="16" y1="7" x2="-1.76062e-07" y2="7" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F1A5A2"/>
                    <stop offset="1" stopColor="#ED7772"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className={styles.customNodeLabel}>Add Text</div>
          </div>
          <div className={styles.customNodeActionsContainer}>
            <button onClick={handleShowDetails} className={styles.customNodeActionsBtn} type="button">Edit</button>
            { showDetailsDropdown() }
          </div>
        </div>
        <div className={styles.customNodeBody}>
          <p className={styles.customNodeBodyTxt}>
            {text}
          </p>
        </div>
        { showDetails() }
      </div>
      <Handle
        type="source"
        id={`bottom_text_${data.id}`}
        key={`bottom_text_${data.id}`}
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
