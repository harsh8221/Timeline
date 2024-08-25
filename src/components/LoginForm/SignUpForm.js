import AuthForm from './AuthForm';

import { validateEmail, validatePasswordLength, validateUsernameLength } from '../../helpers/formValidator.helpers';

const FormConfig = [
  {
    label: 'Email',
    name: 'email',
    displayText: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    required: true,
    validate: validateEmail
  },
  {
    label: 'Username',
    name: 'username',
    displayText: 'Username',
    type: 'text',
    placeholder: 'Choose a preferred username',
    required: true,
    validate: validateUsernameLength(8)
  },
  {
    label: 'Password',
    name: 'password',
    displayText: 'Password',
    type: 'password',
    placeholder: 'Choose a strong password',
    required: true,
    validate: validatePasswordLength(8)
  }
]

const SignUpForm = (props) => {
  const {
    onSuccess = () => { },
    onBottomTextClick = () => { },
  } = props;
  return (
    <AuthForm
      title="SIGN UP"
      subTitle="Create an account to continue"
      fields={FormConfig}
      submitButtonLabel="Continue"
      bottomText="Already have an account?"
      bottomTextButton="Login"
      onSubmit={onSuccess}
      onBottomTextClick={onBottomTextClick}
    />
  )
}

export default SignUpForm