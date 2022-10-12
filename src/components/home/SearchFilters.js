/* eslint-disable */
const SearchFilter = () => {
  return (
    <div className="champion-filters">
      <div className="name-filter">
        <form className="search-box">
          <input type="text" placeholder=" " />
          <button type="reset"></button>
        </form>
      </div>
      <div className="role-filter">
        <label class="select" for="slct-role">
          <select id="slct-role" required="required">
            <option value="" disabled="disabled" selected="selected">Filter by role...</option>
            <option value="#">Mage</option>
            <option value="#">Tank</option>
            <option value="#">Support</option>
            <option value="#">Assassin</option>
            <option value="#">Fighter</option>
            <option value="#">Marksman</option>
          </select>
          <svg class="sprites">
            <polyline points="1 1 5 5 9 1"></polyline>
          </svg>
        </label>
      </div>
      <div className="difficulty-filter">
        <label class="select" for="slct-difficulty">
          <select id="slct-difficulty" required="required">
            <option value="" disabled="disabled" selected="selected">Filter by difficulty...</option>
            <option value="#">Low</option>
            <option value="#">Moderate</option>
            <option value="#">High</option>
          </select>
          <svg class="sprites">
            <polyline points="1 1 5 5 9 1"></polyline>
          </svg>
        </label>
      </div>
    </div>
  );
}

export default SearchFilter;
