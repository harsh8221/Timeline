
import TimelineCard from '../TimelineCard'
import TimelineContentCard from '../TimelineContentCard'
import Button from '../Button';

import styles from './createPost.module.css';

const CreatePost = (props) => {
  const { onClick = () => { } } = props;
  return (
    <TimelineCard className={styles.container}>
      <p className={styles.titleTypography}>Create Post</p>
      <TimelineContentCard
        emoji="💬"
        content="How are you feeling today?"
        onClick={onClick}
      />
      <div className={styles.buttonContainer}><Button className={styles.button} onClick={onClick}>Post</Button></div>
    </TimelineCard>
  )
}

export default CreatePost