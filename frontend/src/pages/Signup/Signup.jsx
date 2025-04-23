import React from 'react';
import '../Login/Login.css';
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create Account</h2>
        <p className="subtitle">Start your academic journey with us</p>
        <input type="text" placeholder="Enter your username" />
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <input type="password" placeholder="Confirm your password" />
        <button className="login-button">Sign Up</button>
        <p className="switch-text">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
