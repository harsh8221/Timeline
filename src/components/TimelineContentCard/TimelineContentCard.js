import styles from './timelineContentCard.module.css';

const TimelineContentCard = (props) => {
  const { emoji, content, onClick = () => { } } = props;
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.emojiContainer}>{emoji}</div>
      <div><p className={styles.contentTypography}>{content}</p></div>
    </div>
  )
}

export default TimelineContentCard;