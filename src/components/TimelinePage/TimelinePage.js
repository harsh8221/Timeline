import { useState } from 'react';

import Post from '../Post';
import CreatePost from '../CreatePost';
import Login from '../Login';
import Model from '../Model';

import { data as postData } from '../../data/post';

import styles from './timelinePage.module.css';

const TimelinePage = (props) => {

  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleToggleLogin = () => {
    setIsLoginOpen(prevState => !prevState);
  }

  return (
    <div
      className={styles.container}
    >
      <p className={styles.titleTypography}>Hello Jane</p>
      <p className={styles.subTitleTypography}>How are you doing today? Would you like to share something with the community 🤗</p>

      <CreatePost onClick={handleToggleLogin} />

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
      <Model isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <Login onSuccess={handleToggleLogin} />
        <div
          className={styles.crossContainer}
          onClick={() => setIsLoginOpen(false)}
        >
          <img src="/cross.svg" alt='Cross logo' />
        </div>
      </Model>
    </div>
  )
}

export default TimelinePage