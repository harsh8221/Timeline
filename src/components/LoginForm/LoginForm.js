import AuthForm from './AuthForm';

const FormConfig = [
  {
    label: 'Email or Username',
    name: 'email',
    type: 'text',
    placeholder: 'Enter your email or username',
    required: true
  }, {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: 'Enter your password',
    required: true
  }
]

const LoginForm = () => {
  return (
    <AuthForm
      title="WELCOME BACK"
      subTitle="Login to your account"
      fields={FormConfig}
      submitButtonLabel="Login"
      bottomText="Not registered yet?"
      bottomTextButton="Register"
    />
  )
}

export default LoginForm