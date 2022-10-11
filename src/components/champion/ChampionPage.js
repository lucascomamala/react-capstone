/* eslint-disable*/
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import './ChampionPage.css';

const ChampionPage = () => {
  const location = useLocation();
  const individualHero = location.state;
  // const individualHeroComics = individualHero.comics.items;
  console.log(location);
  return (
    <div className="champion-page-container">
     
    </div>
  );
}

export default ChampionPage;
