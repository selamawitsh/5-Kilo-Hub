import React, { useContext } from 'react';
import './Sidebar.css';
import { FaChartBar, FaComments, FaCog } from 'react-icons/fa';
import avatar from '../../assets/avatar.png';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../context/UserContext';

const Sidebar = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext); 

  const handleSettingsClick = () => {
    navigate("/edit-profile");
  };

  const handleViewProfile = () => {
    navigate("/my-profile");
  };

  return (
    <div className="sidebar">
      {/* Navigation Links */}
      <div className="nav-links">
        <div className="nav-item active">
          <FaChartBar className="nav-icon" />
          <span>My Notes</span>
        </div>
        <div className="nav-item">
          <FaComments className="nav-icon" />
          <span>Discussion Tab</span>
        </div>
      </div>

      {/* Profile at bottom */}
      <div className="sidebar-footer">
        <div className="profile">
          <img
            src={user.profileImage || avatar}
            alt={user.fullName || "User"}
            className="avatar"
          />
          <div className="profile-info" onClick={handleViewProfile}>
            <strong className="name">{user.fullName || "User Name"}</strong>
            <span className="view-profile">View profile</span>
          </div>
          <FaCog className="settings-icon" onClick={handleSettingsClick} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
