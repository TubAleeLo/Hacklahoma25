import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css"; // Import styles

const App = () => {
  const [currentPage, setCurrentPage] = useState("home"); // Simple page switching
  const [expandedLeague, setExpandedLeague] = useState(null);

  const toggleLeague = (league) => {
    setExpandedLeague(expandedLeague === league ? null : league);
  };

  return (
    <Router>
      <div className="layout">
        {/* Navbar */}
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

        {/* Main Layout */}
        <div className="main-container">
          {/* Sidebar */}
          <aside className="sidebar">
            <h2>My Leagues</h2>
            <ul>
              <li onClick={() => toggleLeague("OU CS 2025")}>OU CS 2025</li>
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: expandedLeague === "OU CS 2025" ? "auto" : 0, opacity: expandedLeague === "OU CS 2025" ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <li className="week" onClick={() => setCurrentPage("week1")}>Week 1</li>
                <li className="week" onClick={() => setCurrentPage("week2")}>Week 2</li>
                <li className="week" onClick={() => setCurrentPage("week3")}>Week 3</li>
              </motion.ul>
            </ul>
          </aside>

          {/* Main Content */}
          <div className="content">
            {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
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
const Home = ({ setCurrentPage }) => {
  return (
    <div>
      <h2>Welcome to QwyckEm's</h2>
      <p>Select a league to get started.</p>
      <div className="home-buttons">
        <button className="btn" onClick={() => setCurrentPage("create-team")}>Create Team</button>
        <button className="btn" onClick={() => setCurrentPage("join-team")}>Join Team</button>
      </div>
    </div>
  );
};

// Week Component
const Week = ({ week }) => {
  const [picks, setPicks] = useState({});

  const handlePick = (gameId, team) => {
    setPicks((prevPicks) => ({ ...prevPicks, [gameId]: team }));
  };

  const games = [
    { id: 1, home: "Team A", away: "Team B" },
    { id: 2, home: "Team C", away: "Team D" },
    { id: 3, home: "Team E", away: "Team F" },
    { id: 4, home: "Team G", away: "Team H" },
    { id: 5, home: "Team I", away: "Team J" },
  ];

  return (
    <div>
      <h2>Week {week}</h2>
      <p>Games and picks will be displayed here.</p>
      <div className="game-grid">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <div className="game-info">{game.home} vs {game.away}</div>
            <div className="game-selection">
              <motion.button
                className={`pick-button ${picks[game.id] === game.home ? "selected" : ""}`}
                onClick={() => handlePick(game.id, game.home)}
                whileTap={{ scale: 1.2 }}
              >
                {game.home}
              </motion.button>
              <motion.button
                className={`pick-button ${picks[game.id] === game.away ? "selected" : ""}`}
                onClick={() => handlePick(game.id, game.away)}
                whileTap={{ scale: 1.2 }}
              >
                {game.away}
              </motion.button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;