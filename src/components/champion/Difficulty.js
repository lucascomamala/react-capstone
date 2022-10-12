/* eslint-disable*/
const Difficulty = ({ champ }) => {
  switch (champ.info.difficulty) {
    case 0:
    case 1:
    case 2:
    case 3:
      return (
        <li className="specs-item">
          <div className="specs-item-icon">
            <span className="bAShPU">
              <span className="HoSWX">
                <span className="cYOqOf"></span>
                <span className="kDkeJC"></span>
                <span className="kDkeJC"></span>
              </span>
            </span>
          </div>
          <div className="gJhFPq difficulty-string">Difficulty</div>
          <div className="kPaHxk difficulty">Low</div>
        </li>);
    case 4:
    case 5:
    case 6:
    case 7:
      return (
        <li className="specs-item">
          <div className="specs-item-icon">
            <span className="bAShPU">
              <span className="HoSWX">
                <span className="cYOqOf"></span>
                <span className="cYOqOf"></span>
                <span className="kDkeJC"></span>
              </span>
            </span>
          </div>
          <div className="gJhFPq difficulty-string">Difficulty</div>
          <div className="kPaHxk difficulty">Moderate</div>
        </li>);
    case 8:
    case 9:
    case 10:
      return (
        <li className="specs-item">
          <div className="specs-item-icon">
            <span className="bAShPU">
              <span className="HoSWX">
                <span className="cYOqOf"></span>
                <span className="cYOqOf"></span>
                <span className="cYOqOf"></span>
              </span>
            </span>
          </div>
          <div className="gJhFPq difficulty-string">Difficulty</div>
          <div className="kPaHxk difficulty">High</div>
        </li>);
  }
}

export default Difficulty;
