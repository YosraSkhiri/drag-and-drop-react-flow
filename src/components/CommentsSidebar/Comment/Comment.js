import React from 'react';
import styles from "./Comment.module.css";

const Comment = () => {
  return (
    <div className={styles.Comment}>
      <div className={styles.CommentHeader}>
        <div className={styles.CommentAvatar}></div>
        <div>
          <div className={styles.CommentAuthor}>john doe</div>
          <span className={styles.CommentTime}>20 min ago</span>
        </div>
      </div>
      <div className={styles.CommentContent}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quis necessitatibus voluptas quia veniam mollitia
      </div>
    </div>
  );
}
 
export default Comment;