import React, { useState, useRef, useEffect, useContext } from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import defaultAvatar from "../../assets/avatar.png";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext); // ⬅️ Get user from context

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const goToEditProfile = () => {
    navigate("/edit-profile");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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

      {/* Right: Search, Avatar, Dropdown */}
      <div className="navbar-right" ref={menuRef}>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search ..." />
        </div>

        <img
          src={user.profileImage || defaultAvatar}
          alt="User"
          className="avatar clickable"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        {menuOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-item" onClick={goToEditProfile}>
              Edit Profile
            </div>
            <div className="dropdown-item">Log Out</div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
