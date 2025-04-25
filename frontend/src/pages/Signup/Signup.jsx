import React, { useState } from 'react';
import '../Login/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const SignUp = () => {
  const navigate = useNavigate();
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

      alert(res.data.message); 


      console.log(res.data);
      // navigate('/home'); 
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error occurred');
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
