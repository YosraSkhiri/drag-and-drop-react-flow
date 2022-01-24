import React from 'react';
import styles from "./CommentInput.module.css";

const CommentInput = () => {
  return (
    <div className={styles.CommentInputContainer}>
      <input className={styles.CommentInput} placeholder="Add Comment" type="text" spellCheck="false" />
      <button className={styles.CommentInputSubmitBtn}>
        <svg width="11" height="12" viewBox="0 0 11 12">
          <path d="M5.503.34l.324.274 4.5 3.817-.647.762-3.677-3.118v9.92h-1v-9.92L1.327 5.193.68 4.431 5.18.614 5.503.34z" fillRule="evenodd" fillOpacity="1" fill="#000" stroke="none" />
        </svg>
      </button>
    </div>
  );
}
 
export default CommentInput;
