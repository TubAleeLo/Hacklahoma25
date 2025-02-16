import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Standings from "./components/Standings"; 
import Home from "./components/Home";
import Week from "./components/Week";
import "./styles/App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [expandedLeague, setExpandedLeague] = useState(null);

  const toggleLeague = (league) => {
    setExpandedLeague(expandedLeague === league ? null : league);
  };

  return (
    <Router>
      <div className="layout">
        <Navbar setCurrentPage={setCurrentPage} />
        <div className="main-container">
          <Sidebar expandedLeague={expandedLeague} toggleLeague={toggleLeague} setCurrentPage={setCurrentPage} />
          <div className="content">
            {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
            {currentPage === "standings" && <Standings />}
            {currentPage === "week1" && <Week week="1" />}
            {currentPage === "week2" && <Week week="2" />}
            {currentPage === "week3" && <Week week="3" />}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
