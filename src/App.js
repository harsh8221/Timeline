
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import TimelinePage from './components/TimelinePage';

import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<TimelinePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
