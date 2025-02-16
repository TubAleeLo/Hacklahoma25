import { useState } from "react";
import "../styles/Admin.css";

const Admin = () => {
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [week, setWeek] = useState("");

  const handleSubmit = () => {
    console.log(`Submitting game: ${team1} vs ${team2} for Week ${week}`);
    // TODO: Send data to API
  };

  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>
      <div className="admin-form">
        <input
          type="text"
          placeholder="Team 1"
          value={team1}
          onChange={(e) => setTeam1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Team 2"
          value={team2}
          onChange={(e) => setTeam2(e.target.value)}
        />
        <input
          type="number"
          placeholder="Week #"
          value={week}
          onChange={(e) => setWeek(e.target.value)}
        />
      </div>
      <button className="admin-submit" onClick={handleSubmit}>
        Submit Game
      </button>
    </div>
  );
};

export default Admin;
