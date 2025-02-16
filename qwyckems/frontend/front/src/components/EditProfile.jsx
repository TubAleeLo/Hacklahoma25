import React, { useState } from "react";
import "../styles/EditProfile.css"; // Ensure this is linked correctly

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    pronouns: "",
    bio: "",
    password: "", // No restrictions
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", formData);
    // Future API call to update profile
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Pronouns:
          <input type="text" name="pronouns" value={formData.pronouns} onChange={handleChange} />
        </label>
        <label>
          Bio:
          <textarea name="bio" value={formData.bio} onChange={handleChange}></textarea>
        </label>
        <label>
          Password:
          <input type="text" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
