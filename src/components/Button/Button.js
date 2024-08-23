import React from 'react';
import styles from './button.module.css';

const Button = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <button className={`${styles.button} ${className}`}  {...restProps}>
      {children}
    </button>
  )
}

export default Button;