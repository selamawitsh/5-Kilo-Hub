import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Access Account</h2>
        <p className="subtitle">Access your tailored academic resources</p>
        <input type="text" placeholder="Enter your username" />
        <input type="password" placeholder="Enter your password" />
        <div className="forgot-password">
          <a href="#">Forget your password?</a>
        </div>
        <button className="login-button">Log In</button>
        <p className="switch-text">
          Need to create an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
