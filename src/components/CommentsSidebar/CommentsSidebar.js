import React from 'react';
import styles from "./CommentsSidebar.module.css";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

const CommentsSidebar = ({showCommentsSidebar, setShowCommentsSidebar}) => {
  const handleCloseBtn = () => {
    setShowCommentsSidebar((state) => !state);
  };

  return (
    <div className={styles.CommentsSidebarContainer} style={showCommentsSidebar ? { width: "240px" } : { width: 0 }}>
      {
        showCommentsSidebar ? (
          <>
            <div className={styles.CommentsSidebarWrapper}>
              <div className={styles.CommentsSidebarActions}>
                <div className={styles.CommentsSidebarSearchContainer}>
                  <input className={styles.CommentsSidebarSearchInput} placeholder="Search" type="text" spellCheck="false" />
                  <svg className={styles.CommentsSidebarSearchInputIcon} width="15" height="15" viewBox="0 0 15 15">
                    <path fillRule="nonzero" fillOpacity="1" fill="#000" stroke="none" d="M14.146 14.854l.708-.708-4.272-4.272C11.466 8.83 12 7.477 12 6c0-3.314-2.686-6-6-6-3.314 0-6 2.686-6 6 0 3.314 2.686 6 6 6 1.477 0 2.83-.534 3.874-1.418l4.272 4.272zM11 6c0 2.761-2.239 5-5 5-2.761 0-5-2.239-5-5 0-2.761 2.239-5 5-5 2.761 0 5 2.239 5 5z" />
                  </svg>
                </div>
                <div>
                  <button className={styles.CommentsSidebarBtn}>
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <path fillRule="evenodd" fillOpacity="1" fill="#000" stroke="none" d="M8 15c-3.866 0-7-3.134-7-7 0-3.866 3.134-7 7-7 3.866 0 7 3.134 7 7 0 3.866-3.134 7-7 7zM0 8c0-4.418 3.582-8 8-8 4.418 0 8 3.582 8 8 0 4.418-3.582 8-8 8-4.418 0-8-3.582-8-8zm6 3v-1h4v1H6zM4 5v1h8V5H4zm1 3.5h6v-1H5v1z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className={styles.CommentsContainer}>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
              </div>
              <div>
                <CommentInput />
              </div>
            </div>
            <button onClick={handleCloseBtn} className={styles.CommentsSidebarCloseBtn}>
              <svg width="16" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </>
        ) : null
      }
    </div>
  );
}

export default CommentsSidebar;
