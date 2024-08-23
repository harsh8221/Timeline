import React from 'react';
import { useNavigate } from 'react-router-dom';

import Login from '../Login';

const LoginPage = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  return (
    <div className='h-screen'>
      <div className='flex flex-col gap-12 justify-center items-center h-full'>
        <div><img src="/logo.svg" alt="Logo" /></div>
        <Login
          onSuccess={handleClick}
        />
      </div>
    </div>
  )
}

export default LoginPage;