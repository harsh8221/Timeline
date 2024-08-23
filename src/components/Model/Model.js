import React, { useEffect, useState } from 'react';

import styles from './model.module.css';

const Model = (props) => {
  const {
    isOpen = true,
    onClose = () => { },
    children,
  } = props;

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsAnimating(false);
    }
  };

  if (!isOpen && !isAnimating) return null;


  if (!isOpen) return null;
  return (
    <div className={`${styles.modelBackdrop} ${isOpen ? styles.open : styles.close}`} onClick={onClose}>
      <div
        className={`${styles.model}  ${isOpen ? styles.open : styles.close}`}
        onClick={e => e.stopPropagation()}
        onAnimationEnd={handleAnimationEnd}
      >
        {children}
      </div>
    </div>
  )
}

export default Model