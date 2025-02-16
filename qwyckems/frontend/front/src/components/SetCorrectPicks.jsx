import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/SetCorrectPicks.css";

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
    {id: 6, home: "Team K", away: "Team L" },
    {id: 7, home: "Team M", away: "Team N" },
    {id: 8, home: "Team O", away: "Team P" },
    {id: 9, home: "Team Q", away: "Team R" },
    {id: 10, home: "Team S", away: "Team T" }
  ];

  return (
    <div className="week-container">
      <h2>WEEK {week}</h2>
      <div className="game-grid">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <div className="game-info">{game.away} at {game.home}</div>
            <div className="game-selection">
              <motion.button
                className={`pick-button ${picks[game.id] === game.away ? "selected" : ""}`}
                onClick={() => handlePick(game.id, game.away)}
                whileTap={{ scale: 1.2 }}
              >
                {game.home}
              </motion.button>
              <motion.button
                className={`pick-button ${picks[game.id] === game.home ? "selected" : ""}`}
                onClick={() => handlePick(game.id, game.home)}
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

export default Week;
