import React, { useState } from "react";
import "./EditProfile.css";
import Navbar from "../../components/Navbar/Navbar";
import avatar from '../../assets/avatar.png';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    department: "",
    bio: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Saved Profile:", formData);
    // Add backend logic here
  };

  return (
    <>
    <Navbar/>
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <div className="profile-picture">
            <img src={avatar} alt="" className="avatar-image"/>
        <div className="picture-buttons">
          <button className="btn change-btn">change picture</button>
          <button className="btn delete-btn">delete picture</button>
        </div>
      </div>
      <form className="edit-profile-form" onSubmit={handleSave}>
        <input
          type="text"
          name="fullName"
          placeholder="Your full name"
          value={formData.fullName}
          onChange={handleChange}
        />
        <input
          type="text"
          
          name="department"
          placeholder="Enter your department"
          value={formData.department}
          onChange={handleChange}
        />
        
        <input
          type="text"
          name="bio"
          placeholder="Bio"
          value={formData.bio}
          onChange={handleChange}
        />
        <button type="submit" className="save-btn">Save Changes</button>
      </form>
    </div>
    </>
    
  );
};

export default EditProfile;
