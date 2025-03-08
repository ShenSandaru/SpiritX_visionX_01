import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to SecureConnect</h1>
        <p>Experience seamless and secure authentication for your digital journey. Join us today!</p>
        <div className="button-container">
          <button 
            className="btn login-btn" 
            onClick={() => navigate('/login')}
            aria-label="Login to your account"
          >
            Login
          </button>
          <button 
            className="btn signup-btn" 
            onClick={() => navigate('/signup')}
            aria-label="Create new account"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;