import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { FaSearch } from 'react-icons/fa';
import avatar from '../../assets/avatar.png';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();

  const goToEditProfile = () => {
    navigate("/edit-profile"); 
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      {/* Left: Logo and Brand */}
      <div className="navbar-left">
    <Link to="/home" className="logo-link">
      <div className="logo">
        <div className="logo-circle" />
      </div>
      <h1 className="brand">logo</h1>
    </Link>
  </div>

      {/* Center: Navigation Links */}
      <div className="navbar-center">
        <span className="nav-link">Home</span>
      </div>

      {/* Right: Search, Avatar */}
      <div className="navbar-right" ref={menuRef}>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search ..." />
        </div>

        <img
          src={avatar}
          alt="User"
          className="avatar clickable"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        {menuOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-item" onClick={goToEditProfile}>Edit Profile</div>
            <div className="dropdown-item">Log Out</div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
