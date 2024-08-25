import { useState } from 'react';

import { LoginForm, SignUpForm } from '../LoginForm';

import { AUTHTYPE } from '../../constants/auth.constants';

const Login = (props) => {

  const { onSuccess, authType = AUTHTYPE.LOGIN } = props;

  const [auth, setAuth] = useState(authType || AUTHTYPE.LOGIN);

  const handleAuthChange = (authType) => {
    setAuth(authType);
  }

  return (
    <div className='flex items-center justify-center'>
      <div>
        {auth === AUTHTYPE.LOGIN ? <LoginForm
          key={AUTHTYPE.LOGIN}
          onSuccess={onSuccess}
          onBottomTextClick={() => handleAuthChange(AUTHTYPE.SIGNUP)}
        /> : <SignUpForm
            key={AUTHTYPE.SIGNUP}
          onSuccess={onSuccess}
          onBottomTextClick={() => handleAuthChange(AUTHTYPE.LOGIN)}
        />}
      </div>
    </div>
  );
}

export default Login