import { useState } from 'react';

import { LoginForm, SignUpForm } from '../LoginForm';

const AUTHTYPE = {
  LOGIN: 'Login',
  SIGNUP: 'SignUp'
}

const Login = (props) => {

  const { onSuccess } = props;

  const [auth, setAuth] = useState(AUTHTYPE.LOGIN);

  const handleAuthChange = (authType) => {
    setAuth(authType);
  }

  return (
    <div className='flex items-center justify-center'>
      <div>
        {auth === AUTHTYPE.LOGIN ? <LoginForm
          onSuccess={onSuccess}
          onBottomTextClick={() => handleAuthChange(AUTHTYPE.SIGNUP)}
        /> : <SignUpForm
          onSuccess={onSuccess}
          onBottomTextClick={() => handleAuthChange(AUTHTYPE.LOGIN)}
        />}
      </div>
    </div>
  );
}

export default Login