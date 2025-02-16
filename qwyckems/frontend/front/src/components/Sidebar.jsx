import { motion } from "framer-motion";
import "../styles/Sidebar.css";

const Sidebar = ({ expandedLeague, toggleLeague, setCurrentPage }) => {
  return (
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
          <li className="standings-tab" onClick={() => setCurrentPage("standings")}>Standings</li>
        </motion.ul>
      </ul>

      {/* Admin Section */}
      <div className="admin-section">
        <h2>Admin</h2>
        <ul>
          <li className="admin-tab" onClick={() => setCurrentPage("admin")}>
            Admin Panel
          </li>
          <li className="admin-tab" onClick={() => setCurrentPage("setCorrectPicks")}>
            Set Correct Picks
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
