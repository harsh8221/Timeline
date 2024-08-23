import styles from './timelineCard.module.css';

const TimelineCard = (props) => {

  const {
    children,
    className,
  } = props;

  return (
    <div className={`${className} ${styles.container}`}>
      {children}
    </div>
  )
}

export default TimelineCard