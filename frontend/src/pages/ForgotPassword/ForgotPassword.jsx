
import React from 'react';
import '../Login/Login.css';
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Forgot Password</h2>
        <p className="subtitle">We'll send a reset link to your email</p>
        <input type="email" placeholder="Enter your email address" />
        <button className="login-button">Send Reset Link</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
