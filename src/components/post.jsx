import React from 'react';
import styles from './post.module.css';


const Post = ( props ) => {
    return (
      <div className={styles.post}>
        <h2>
            {props.title}

        </h2>
        <p>
            {props.body}
        </p>
      </div>
    );
  };



export default Post;