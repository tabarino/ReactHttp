import React from 'react';
import styles from './Post.module.css';
import { withRouter } from 'react-router-dom';

const Post = (props) => {
  return (
    <article className={styles.Post} onClick={props.click}>
      <h1>{props.title}</h1>
      <div>
        <div className={styles.Author}>{props.author}</div>
      </div>
    </article>
  );
}

export default withRouter(Post);
