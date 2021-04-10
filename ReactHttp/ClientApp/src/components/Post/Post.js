import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (
    <article className={styles.Post}>
      <h1>Title</h1>
      <div>
        <div className={styles.Author}>Author</div>
      </div>
    </article>
  );
}

export default Post;
