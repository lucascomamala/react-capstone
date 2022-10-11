/* eslint-disable */
import { Link } from 'react-router-dom';

const Champion = ({ champ }) => {
  return (
    <Link className="champion-card" to="champion">
      <img src={`http://ddragon.leagueoflegends.com/cdn/12.19.1/img/champion/${champ.id}.png`} alt={champ.id} />
      <h2>{champ.name}</h2>
      <h5>{champ.title}</h5>
    </Link>
  );
};

export default Champion;
