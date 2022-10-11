/* eslint-disable */
import { useSelector } from 'react-redux';
import Champion from './Champion';
import './Home.css';

const HomePage = () => {
  const state = useSelector((state) => state.main);
  return (
    <div className="home-container">
      <div className="champion-section">
        <div className="champion-grid">
          {state.simpleChampList.length ? state.simpleChampList.map((champ) => (
            <Champion key={champ.id} champ={champ} />
          )) : <div className="loading">Loading...</div>}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
