import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="overlay" />
      <div className="content">
        <h1 className="title">Welcome to 5 Kilo Student Portal</h1>
        <p className="subtitle">Access materials, write notes, and connect with your department</p>
        <div className="button-group">
          <Link to="/signup" className="btn signup-btn">Sign Up</Link>
          <Link to="/login" className="btn signin-btn">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
