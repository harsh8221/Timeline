import React from 'react';

import Post from '../Post';
import CreatePost from '../CreatePost';

import { data as postData } from '../../data/post';

import styles from './timelinePage.module.css';

const TimelinePage = (props) => {
  return (
    <div
      className={styles.container}
    >
      <p className={styles.titleTypography}>Hello Jane</p>
      <p className={styles.subTitleTypography}>How are you doing today? Would you like to share something with the community 🤗</p>

      <CreatePost />

      {
        postData.map((post, index) => (
          <Post
            key={index}
            userName={post.userName}
            userAvatar={post.userAvatar}
            postContent={post.postContent}
            postEmoji={post.postEmoji}
            postTime={post.postTime}
            isEdited={post.isEdited}
            comments={post.comments}
          />
        ))
      }
    </div>
  )
}

export default TimelinePage