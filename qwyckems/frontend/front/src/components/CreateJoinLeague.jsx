import React, { useState } from "react";

const CreateLeague = ({ setCurrentPage }) => {
  const [leagueName, setLeagueName] = useState("");
  const [description, setDescription] = useState("");
  const [visibility, setVisibility] = useState("public");
  const [weeks, setWeeks] = useState(6);
  const [inviteCode, setInviteCode] = useState(null);
  const [error, setError] = useState("");

  const generateInviteCode = () => {
    // Check if all required fields are filled
    if (!leagueName.trim() || !description.trim()) {
      setError("Please fill out all fields before generating an invite code.");
      return;
    }

    setError(""); // Clear any previous errors

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 5; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setInviteCode(code);
  };

  return (
    <div className="league-container">
      <div className="league-card">
        <h2>Create League</h2>
        <label>League Name</label>
        <input 
          type="text" 
          value={leagueName} 
          onChange={(e) => setLeagueName(e.target.value)} 
          placeholder="Enter league name" 
        />

        <label>League Description</label>
        <input 
          type="text" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Enter description" 
        />

        <label>Visibility</label>
        <select value={visibility} onChange={(e) => setVisibility(e.target.value)}>
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>

        <label>Number of Weeks</label>
        <select value={weeks} onChange={(e) => setWeeks(parseInt(e.target.value))}>
          <option value={6}>6</option>
          <option value={8}>8</option>
          <option value={12}>12</option>
        </select>

        {error && <p className="error-message">{error}</p>} {/* Display error if validation fails */}

        <button onClick={generateInviteCode}>Generate Invite Code</button>
        {inviteCode && <p className="invite-code">Invite Code: {inviteCode}</p>}

        <button className="back-btn" onClick={() => setCurrentPage("home")}>Back</button>
      </div>
    </div>
  );
};

const JoinLeague = ({ setCurrentPage }) => {
  const [inviteCode, setInviteCode] = useState("");

  return (
    <div className="league-container">
      <div className="league-card">
        <h2>Join League</h2>
        <label>Invite Code</label>
        <input 
          type="text" 
          value={inviteCode} 
          onChange={(e) => setInviteCode(e.target.value.toUpperCase())} 
          placeholder="Enter invite code" 
        />

        <button>Join</button>
        <button className="back-btn" onClick={() => setCurrentPage("home")}>Back</button>
      </div>
    </div>
  );
};

export { CreateLeague, JoinLeague };
