import AuthForm from './AuthForm'

const FormConfig = [
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Enter your email',
    required: true
  },
  {
    label: 'Username',
    name: 'username',
    type: 'text',
    placeholder: 'Choose a preferred username',
    required: true
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: 'Choose a strong password',
    required: true
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