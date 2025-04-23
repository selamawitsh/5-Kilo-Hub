import React from 'react';
import './Sidebar.css';
import { FaChartBar, FaComments, FaCog } from 'react-icons/fa';
import avatar from '../../assets/avatar.png'

const Sidebar = () => {
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
            src={avatar}
            alt="Amanda"
            className="avatar"
          />
          <div className="profile-info">
            <strong className="name">Amanda</strong>
            <span className="view-profile">View profile</span>
          </div>
          <FaCog className="settings-icon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
