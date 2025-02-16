import "../styles/Standings.css";

const Standings = () => {
  // Sample data (this will later be fetched from an API or database)
  const rankings = [
    { username: "User 1", points: 2523, correct: 17, total: 21 },
    { username: "User 2", points: 2520, correct: 17, total: 21 },
    { username: "User 3", points: 2305, correct: 15, total: 20 },
    { username: "User 4", points: 2100, correct: 14, total: 20 },
    { username: "User 5", points: 2000, correct: 13, total: 20 },
  ];

  return (
    <div className="standings-container">
      <h2>League Standings</h2>
      <div className="standings-list">
        {rankings.map((user, index) => (
          <div key={index} className="standings-item">
            <span className="rank">{index + 1}.</span>
            <span className="username">{user.username}</span>
            <span className="points">{user.points}</span>
            <span className="record">{user.correct}/{user.total}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Standings;
