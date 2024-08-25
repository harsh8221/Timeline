import { useState } from 'react';

import styles from './form.module.css';

const FormField = ({ type, name, value, label, onChange, error, placeholder }) => {

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(prevState => !prevState);
  }

  const renderField = () => {
    if (type === 'text' || type === 'email') {
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
    } else if (type === 'password') {
      return (
        <div className={styles.passwordField}>
          <input
            type={passwordVisible ? 'text' : 'password'}
            name={name}
            value={value}
            placeholder={placeholder}
            className={styles.inputContainer}
            onChange={(e) => onChange(e.target.value)}
          />
          <button
            type='button'
            onClick={togglePasswordVisibility}
            className={styles.passwordVisibilityButton}
          >
            {passwordVisible ? '👁️' : '👁️‍🗨️'}
          </button>
        </div>
      )
    }
    else {
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