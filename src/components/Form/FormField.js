import React from 'react';

import styles from './form.module.css';

const FormField = ({ type, name, value, label, onChange, error, placeholder }) => {

  const renderField = () => {
    if (type === 'text' || type === 'email' || type === 'password') {
      return (
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          className={styles.inputContainer}
          onChange={(e) => onChange(e.target.value)}
        />
      )
    } else {
      return null;
    }
  }

  return (
    <div className='flex flex-col items-start gap-[10px]'>
      <label htmlFor={name} className={styles.labelTypography}>{label}</label>
      {renderField()}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  )
}

export default FormField;