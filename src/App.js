import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import BusTracker from './components/BusTracker';
import BusSchedule from './components/BusSchedule';
import RealTimeTracker from './components/RealTimeTracker';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/bus-tracker">Bus Tracker</Link>
            </li>
            <li>
              <Link to="/bus-schedule">Bus Schedule</Link>
            </li>
            <li>
              <Link to="/real-time-tracker">real-time-tracker</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/bus-tracker" element={<BusTracker />} />
          <Route exact path="/bus-schedule" element={<BusSchedule />} />
          <Route exact path="/real-time-tracker" element={<RealTimeTracker />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
