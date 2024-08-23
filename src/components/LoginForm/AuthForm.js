import React from 'react';

import Card from '../Card';
import FormBuilder from '../Form/FormBuilder';

import styles from './loginForm.module.css';

const AuthForm = (props) => {

  const {
    title = "WELCOME BACK",
    subTitle,
    fields,
    submitButtonLabel = "Login",
    bottomText = "Not registered yet?",
    bottomTextButton = "Register",
    onSubmit = () => { },
    onBottomTextClick = () => { },
  } = props;

  const handleSumbit = (data) => {
    console.log(data);
    onSubmit(data);
  }

  const handleBottomTextClick = () => {
    console.log("Bottom text clicked");
    onBottomTextClick();
  }

  return (
    <Card>
      <p className={`${styles.titleTypography} ${styles.titleTypographyContainer}`}>{title}</p>
      <p className={`${styles.subTitleTypography} ${styles.subTitleTypographyContainer}`}>{subTitle}</p>
      <FormBuilder
        fields={fields}
        submitButtonLabel={submitButtonLabel}
        onSubmit={handleSumbit}
      />
      <button
        className={styles.bottomTypography}
        onClick={handleBottomTextClick}
      >
        {bottomText} <span className={styles.bottomSpanTypography}>{bottomTextButton} →</span>
      </button>
    </Card >
  );
}

export default AuthForm;