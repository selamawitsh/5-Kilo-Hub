import React, { useContext } from "react";
import "./UserProfile.css";
import avatar from "../../assets/avatar.png";
import Navbar from "../../components/Navbar/Navbar";
import { UserContext } from "../../context/UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext); 

  return (
    <>
      <Navbar />
      <div className="user-profile-container">
        <h2>{user.fullName || "Your"} Profile</h2>
        <div className="user-profile-card">
          <img
            src={user.profileImage || avatar}
            alt="User Avatar"
            className="user-avatar"
          />
          <div className="user-info">
            <h3>{user.fullName || "Full Name"}</h3>
            <p className="user-department">
              {user.department || "Department not set"}
            </p>
            <p className="user-bio">{user.bio || "No bio available."}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
