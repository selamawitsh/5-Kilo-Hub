import React from 'react';
import './Navbar.css';
import { FaSearch} from 'react-icons/fa';
import avatar from '../../assets/avatar.png'

const Navbar = () => {
  return (
    <nav className="navbar">
       {/* Left Section: Logo and Brand */}
       <div className="navbar-left">
        <div className="logo">
          <div className="logo-circle" />
        </div>
        <h1 className="brand">logo</h1>
      </div>
      {/* Center Navigation Links */}
      <div className="navbar-center">
        <span className="nav-link">Home</span>
      </div>

      {/* Right Section: Search, Icons, Avatar */}
      <div className="navbar-right">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search ..." />
        </div>
        <img
          src={avatar}
          alt="User"
          className="avatar"
        />
      </div>
    </nav>
  );
};

export default Navbar;
