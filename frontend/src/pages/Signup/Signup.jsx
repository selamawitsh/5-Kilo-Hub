import React, { useState } from 'react';
import '../Login/Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/register', formData);
      alert('User registered successfully');
      console.log(res.data);
    } catch (error) {
      alert(error.response?.data?.message || 'Error occurred');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create Account</h2>
        <p className="subtitle">Start your academic journey with us</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Enter your username" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} required />
          <button type="submit" className="login-button">Sign Up</button>
        </form>
        <p className="switch-text">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
