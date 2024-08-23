import React from 'react';

import TimelineCard from '../TimelineCard';
import TimelineContentCard from '../TimelineContentCard';

import styles from './post.module.css';


const Post = (
  props
) => {

  const {
    userName,
    userAvatar,
    postContent,
    postEmoji,
    postTime,
    isEdited,
    comments,
  } = props;

  return (
    <TimelineCard>
      <div className='flex flex-row justify-between'>
        <div className={styles.topContainer}>
          <img src={userAvatar} alt={userName} className={styles.imageContainer} />
          <div>
            <p className={styles.nameTypography}>{userName}</p>
            <p className={styles.timeTypography}>{postTime}{isEdited ? " • Edited" : ""}</p>
          </div>
        </div>
        <div><img src="/dots.png" alt="dots" /></div>
      </div>
      <TimelineContentCard
        emoji={postEmoji}
        content={postContent}
      />
      <div className={styles.commentContainer}><img src={'/chat.svg'} className={styles.chatIconPadding} alt='Comment Icon' />{comments} comments</div>
    </TimelineCard>
  )
}

export default Post