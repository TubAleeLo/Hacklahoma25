import "../styles/Home.css";

const Home = ({ setCurrentPage }) => {
  return (
    <div className="home-container">
      {/* Welcome Section */}
      <div className="welcome-section">
        <h1>Welcome to QwyckEm's</h1>
        <p>Pick 'Ems done right. Create or join a team to get started!</p>
      </div>

      {/* Action Buttons Section */}
      <div className="home-actions">
        <button className="home-button" onClick={() => setCurrentPage("createTeam")}>
          Create Team
        </button>
        <button className="home-button" onClick={() => setCurrentPage("joinTeam")}>
          Join Team
        </button>
      </div>

      {/* Featured Section for Extra Depth */}
      <div className="featured-info">
        <div className="featured-card">
          <h2>🏆 Compete with Friends</h2>
          <p>Track standings, make picks, and challenge your league members.</p>
        </div>
        <div className="featured-card">
          <h2>📅 Weekly Matchups</h2>
          <p>Make your picks every week and climb the leaderboard.</p>
        </div>
        <div className="featured-card">
          <h2>🎉 Easy to Use</h2>
          <p>Simple and fast interface for making selections.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
