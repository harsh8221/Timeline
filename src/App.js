import { useState } from 'react';

import Login from './components/Login';
import TimelinePage from './components/TimelinePage';
import Model from './components/Model';

import './App.css';

function App() {

  const [isLoginOpen, setIsLoginOpen] = useState(false);


  return (
    <div className="App">
      <TimelinePage onClick={() => setIsLoginOpen(prevState => !prevState)} />
      <Model isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <Login />
      </Model>
    </div>
  );
}

export default App;
