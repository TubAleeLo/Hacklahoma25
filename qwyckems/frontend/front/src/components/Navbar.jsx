import "../styles/Navbar.css";

const Navbar = ({ setCurrentPage }) => {
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
      <div className="user-profile">
        <img src="/defaultprofile.avif" alt="User Profile" className="profile-pic" />
        <div className="user-info">
          <span className="user-name">Roman</span>
          <span className="user-role">Commissioner</span>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
