import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import "./App.css"; // Import styles

const App = () => {
  const [currentPage, setCurrentPage] = useState("home"); // Simple page switching

  return (
    <Router>
      <div className="layout">
        {/* Navbar */}
        <nav className="navbar">
          <img src="/qlogo.webp" alt="QwyckEm's Logo" className="logo" />

          <div className="navbar-title">
            <h1>QwyckEm's</h1>
            <p>Pick Em's Done Faster</p>
          </div>

          <div className="user-profile">
            <img src="/defaultprofile.avif" alt="User Profile" className="profile-pic" />
          </div>
        </nav>

        {/* Main Layout */}
        <div className="main-container">
          {/* Sidebar */}
          <aside className="sidebar">
            <h2>My Leagues</h2>
            <ul>
              <li onClick={() => setCurrentPage("home")}>OU CS 2025</li>
              <li className="week" onClick={() => setCurrentPage("week1")}>Week 1</li>
              <li className="week" onClick={() => setCurrentPage("week2")}>Week 2</li>
              <li className="week" onClick={() => setCurrentPage("week3")}>Week 3</li>
            </ul>
          </aside>

          {/* Main Content */}
          <div className="content">
            {currentPage === "home" && <Home />}
            {currentPage === "week1" && <Week week="1" />}
            {currentPage === "week2" && <Week week="2" />}
            {currentPage === "week3" && <Week week="3" />}
          </div>
        </div>
      </div>
    </Router>
  );
};

// Home Component
const Home = () => {
  return (
    <div>
      <h2>Welcome to QwyckEm's</h2>
      <p>Select a league to get started.</p>
    </div>
  );
};

// Week Component
const Week = ({ week }) => {
  return (
    <div>
      <h2>Week {week}</h2>
      <p>Games and picks will be displayed here.</p>
    </div>
  );
};

export default App;
