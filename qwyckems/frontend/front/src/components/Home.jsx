import "../styles/Home.css";

const Home = ({ setCurrentPage }) => {
  return (
    <div className="home-container">
      <h2>Welcome to QwyckEm's</h2>
      <p>Select a league to get started.</p>
      <div className="home-buttons">
        <button className="btn" onClick={() => setCurrentPage("create-team")}>Create League</button>
        <button className="btn" onClick={() => setCurrentPage("join-team")}>Join League</button>
      </div>
    </div>
  );
};

export default Home;
