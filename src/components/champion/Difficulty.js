import PropTypes from 'prop-types';

const Difficulty = ({ champ }) => {
  switch (champ.info.difficulty) {
    case 0:
    case 1:
    case 2:
    case 3:
      return (
        <li className="specs-item">
          <div className="specs-item-icon">
            <span className="difficulty-icon">
              <span className="difficulty-bar">
                <span className="difficulty-on" />
                <span className="difficulty-off" />
                <span className="difficulty-off" />
              </span>
            </span>
          </div>
          <div className="specs-string">Difficulty</div>
          <div className="specs-value">Low</div>
        </li>
      );
    case 4:
    case 5:
    case 6:
    case 7:
      return (
        <li className="specs-item">
          <div className="specs-item-icon">
            <span className="difficulty-icon">
              <span className="difficulty-bar">
                <span className="difficulty-on" />
                <span className="difficulty-on" />
                <span className="difficulty-off" />
              </span>
            </span>
          </div>
          <div className="specs-string">Difficulty</div>
          <div className="specs-value">Moderate</div>
        </li>
      );
    case 8:
    case 9:
    case 10:
    default:
      return (
        <li className="specs-item">
          <div className="specs-item-icon">
            <span className="difficulty-icon">
              <span className="difficulty-bar">
                <span className="difficulty-on" />
                <span className="difficulty-on" />
                <span className="difficulty-on" />
              </span>
            </span>
          </div>
          <div className="specs-string">Difficulty</div>
          <div className="specs-value">High</div>
        </li>
      );
  }
};

Difficulty.propTypes = {
  champ: PropTypes.shape({
    info: PropTypes.shape({
      difficulty: PropTypes.number,
    }),
  }).isRequired,
};

export default Difficulty;
