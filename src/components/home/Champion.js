import PropTypes from 'prop-types';

const Champion = ({ champ }) => (
  <>
    <img src={`http://ddragon.leagueoflegends.com/cdn/12.19.1/img/champion/${champ.id}.png`} alt={champ.id} />
    <h2>{champ.name}</h2>
    <h5>{champ.title}</h5>
  </>
);

Champion.propTypes = {
  champ: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default Champion;
