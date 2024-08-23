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
  } = props;

  return (
    <Card>
      <p className={`${styles.titleTypography} ${styles.titleTypographyContainer}`}>{title}</p>
      <p className={`${styles.subTitleTypography} ${styles.subTitleTypographyContainer}`}>{subTitle}</p>
      <FormBuilder
        fields={fields}
        submitButtonLabel={submitButtonLabel}
        onSubmit={(data) => console.log(data)}
      />
      <button className={styles.bottomTypography}>{bottomText} <span className={styles.bottomSpanTypography}>{bottomTextButton} →</span></button>
    </Card >
  );
}

export default AuthForm;