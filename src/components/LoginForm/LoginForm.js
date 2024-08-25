import AuthForm from './AuthForm';

const FormConfig = [
  {
    label: 'Email or Username',
    name: 'email',
    displayText: 'Email or Username',
    type: 'text',
    placeholder: 'Enter your email or username',
    required: true
  }, {
    label: <>
      <span>Password</span><button onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        alert('Forgot password clicked');
      }}>Forgot password?</button>
    </>,
    name: 'password',
    displayText: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    required: true
  }
]

const LoginForm = (props) => {
  const {
    onSuccess = () => { },
    onBottomTextClick = () => { },
  } = props;
  return (
    <AuthForm
      title="WELCOME BACK"
      subTitle="Login to your account"
      fields={FormConfig}
      submitButtonLabel="Login"
      bottomText="Not registered yet?"
      bottomTextButton="Register"
      onSubmit={onSuccess}
      onBottomTextClick={onBottomTextClick}
    />
  )
}

export default LoginForm