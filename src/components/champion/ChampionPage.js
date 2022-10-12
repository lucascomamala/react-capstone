/* eslint-disable*/
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Role from './Role.js'
import Difficulty from './Difficulty.js';
import './ChampionPage.css';

const ChampionPage = () => {
  const state = useSelector((state) => state.champions);
  const location = useLocation();
  const champKey = location.state;
  const champ = state.detailed.find((champ) => champ.id === champKey);
  
  useEffect(() => {
    window.scrollTo(20, 0);
  }, []);

  return (
    <div className="champ-page-container">
      <section className="champ-display">
        <div className="background-asset">
          <div className="background-img">
            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg`} />
          </div>
        </div>
        <div className="inner-section">
          <div className="foreground-asset">
            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg`} />
          </div>
          <div className="info-dock">
            <div className="champ-name">
              <div className="name-wrapper">
                <h1 className=" name-heading">
                  <span className="name-title">
                    <div className="show-nw">
                      <span>{champ.title}</span>
                    </div>
                  </span>
                  <strong className="fXBrkV">
                    <div className="show-se" >
                      <span>{champ.name}</span>
                    </div>
                  </strong>
                </h1>
              </div>
            </div>
            <div className="champ-info">
              <div className="specs">
                <ul className="specs-list">
                  <Role champ={champ} />
                  <Difficulty champ={champ} />
                </ul>
              </div>
              <div className="info-divider"></div>
              <div className="champ-lore">
                <p>{champ.lore}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <img className="champ-img-full" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg`} alt={champ.id} />
      <img className="champ-img-mobile" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id}_0.jpg`} alt={champ.id} /> */}

    </div>
  );
}

export default ChampionPage;
