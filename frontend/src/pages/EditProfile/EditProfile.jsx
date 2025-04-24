import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./EditProfile.css";
import Navbar from "../../components/Navbar/Navbar";
import defaultAvatar from "../../assets/avatar.png";
import { UserContext } from "../../context/UserContext";

const EditProfile = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    department: "",
    bio: "",
  });

  const [profileImage, setProfileImage] = useState(defaultAvatar);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleDeletePicture = () => {
    setProfileImage(defaultAvatar);
  };

  const handleSave = (e) => {
    e.preventDefault();

    // Update global context
    setUser({
      ...formData,
      profileImage,
    });

    // Navigate to user profile page
    navigate("/my-profile");
  };

  return (
    <>
      <Navbar />
      <div className="edit-profile-container">
        <h2>Edit Profile</h2>
        <div className="profile-picture">
          <img src={profileImage} alt="Profile" className="avatar-image" />
          <div className="picture-buttons">
            <label className="btn change-btn">
              Change Picture
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </label>
            <button
              type="button"
              className="btn delete-btn"
              onClick={handleDeletePicture}
            >
              Delete Picture
            </button>
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
          <button type="submit" className="save-btn">
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
