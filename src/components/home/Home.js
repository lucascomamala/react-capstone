/* eslint-disable */
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Champion from './Champion';
import './Home.css';

const HomePage = () => {
  const state = useSelector((state) => state.champions);

  return (
    <div className="home-container">
      <div className="champion-section">
        <div className="champion-grid">
          {state.detailed ? state.detailed.map((champ) => (
            <Link state={champ.id} key={champ.id} className="champion-card" to="champion">
              <Champion champ={champ} />
            </Link>
          )) : <div className="loading">Loading...</div>}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
