import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Week from "./components/Week";
import Standings from "./components/Standings";
import Admin from "./components/Admin";
import SetCorrectPicks from "./components/SetCorrectPicks";
import { CreateLeague, JoinLeague } from "./components/CreateJoinLeague";
import "./styles/App.css";
import "./styles/CreateJoinLeague.css";

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
          <div className="content"> {/* Keep this to prevent navbar/sidebar from disappearing */}
            {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
            {currentPage === "createLeague" && <CreateLeague setCurrentPage={setCurrentPage} />}
            {currentPage === "joinLeague" && <JoinLeague setCurrentPage={setCurrentPage} />}
            {currentPage === "week1" && <Week week="1" />}
            {currentPage === "week2" && <Week week="2" />}
            {currentPage === "week3" && <Week week="3" />}
            {currentPage === "standings" && <Standings />}
            {currentPage === "admin" && <Admin />}
            {currentPage === "setCorrectPicks" && <SetCorrectPicks />}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
