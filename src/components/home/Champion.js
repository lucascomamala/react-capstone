/* eslint-disable */
const Champion = ({ champ }) => {
  return (
    <>
      <img src={`http://ddragon.leagueoflegends.com/cdn/12.19.1/img/champion/${champ.id}.png`} alt={champ.id} />
      <h2>{champ.name}</h2>
      <h5>{champ.title}</h5>
    </>
  );
};

export default Champion;
