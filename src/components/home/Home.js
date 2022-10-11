/* eslint-disable */
import { useSelector } from 'react-redux';
import Champion from './Champion';
import './Home.css';

const Home = () => {
  const state = useSelector((state) => state.main);
  return (
    <div className="home-container">
      <div className="champion-grid">
        {state.simpleChampList.map((champ) => (
          <Champion key={champ.id} champ={champ} />
        ))}
      </div>
    </div>
  );
};

export default Home;
