import "../styles/Navbar.css";

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="navbar">
      <img src="/qlogo.webp" alt="QwyckEm's Logo" className="logo" onClick={() => setCurrentPage("home")} />
      <div className="navbar-title">
        <h1>QwyckEm's</h1>
        <p>Pick Em's Done Faster</p>
      </div>
      <div className="user-profile">
        <img src="/defaultprofile.avif" alt="User Profile" className="profile-pic" />
      </div>
    </nav>
  );
};

export default Navbar;
