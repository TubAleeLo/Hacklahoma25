import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = ({ setCurrentPage }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    // Add logout logic here (clear state, remove token, etc.)
  };

  return (
    <nav className="navbar">
      {/* Left Side - Logo */}
      <div className="navbar-left" onClick={() => setCurrentPage("home")}>
        <img src="/qlogocolor.png" alt="QwyckEm's Logo" className="logo" />
      </div>

      {/* Center - Stylized Title */}
      <div className="navbar-center">
        <h1 className="navbar-title">QwyckEms</h1>
      </div>

      {/* Right Side - User Profile */}
      <div className="user-profile" onClick={toggleDropdown}>
        <img src="/defaultprofile.avif" alt="User Profile" className="profile-pic" />
        <div className="user-info">
          <span className="user-name">Roman</span>
          <span className="user-role">Commissioner</span>
        </div>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="dropdown-menu">
            <button onClick={() => setCurrentPage("edit-profile")}>Edit Profile</button>
            <button onClick={handleLogout}>Log Out</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
