// src/components/Welcome.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Welcome.css'; 
function Welcome() {
  const location = useLocation();
  const { username } = location.state || { username: 'Guest' };

  return (
    <div className="welcome-container">
      <div className="welcome-box">
        <h2>Welcome, {username}!</h2>
        <p>You have successfully logged in.</p>
        <p>We're glad to have you here. Explore and enjoy your experience!</p>
      </div>
    </div>
  );
}

export default Welcome;