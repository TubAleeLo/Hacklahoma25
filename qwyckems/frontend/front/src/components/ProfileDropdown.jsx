import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation

const ProfileDropdown = () => {
  const [user, setUser] = useState(null); // Placeholder auth state
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogin = () => {
    // Simulated login
    setUser({
      name: "User Name",
      profilePicture: "", // Replace with actual image logic later
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="profile-container">
      <img
        src={user?.profilePicture || "/default-avatar.png"}
        alt="Profile"
        className="profile-avatar"
        onClick={toggleDropdown}
      />
      {dropdownOpen && (
        <div className="dropdown-menu">
          {!user ? (
            <button onClick={handleLogin}>Log In</button>
          ) : (
            <>
              <button onClick={() => navigate("/edit-profile")}>Edit Profile</button>
              <button onClick={handleLogout}>Log Out</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
