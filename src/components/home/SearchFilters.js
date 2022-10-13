/* eslint-disable react/button-has-type */
import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchFilter = ({ search }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [difficulty, setDifficulty] = useState('');

  // Name search box handler
  const handleNameChange = (nameQ) => {
    setName(nameQ);
    search({ name: nameQ, role, difficulty });
  };
  const resetName = () => {
    setName('');
    search({ name: '', role, difficulty });
  };

  // Role select handler
  const handleRoleChange = (roleQ) => {
    setRole(roleQ);
    search({ name, role: roleQ, difficulty });
  };

  // Difficulty select handler
  const handleDifficultyChange = (diffQ) => {
    setDifficulty(diffQ);
    search({ name, role, difficulty: diffQ });
  };

  return (
    <div className="champion-filters">
      <div className="name-filter">
        <form className="search-box">
          <input value={name} onChange={(e) => { handleNameChange(e.target.value); }} type="text" placeholder=" " />
          <button type="reset" onClick={resetName} aria-label="clear search" />
        </form>
      </div>
      <div className="role-filter">
        <label className="select" htmlFor="slct-role">
          <select id="slct-role" required="required" value={role} onChange={(e) => { handleRoleChange(e.target.value); }}>
            <option value="">Filter by role...</option>
            {' '}
            { /* Can add disabled="disabled" to the first option to disable it */ }
            <option value="Mage">Mage</option>
            <option value="Tank">Tank</option>
            <option value="Support">Support</option>
            <option value="Assassin">Assassin</option>
            <option value="Fighter">Fighter</option>
            <option value="Marksman">Marksman</option>
          </select>
          <svg className="sprites">
            <polyline points="1 1 5 5 9 1" />
          </svg>
        </label>
      </div>
      <div className="difficulty-filter">
        <label className="select" htmlFor="slct-difficulty" value={difficulty} onChange={(e) => { handleDifficultyChange(e.target.value); }}>
          <select id="slct-difficulty" required="required">
            <option value="">Filter by difficulty...</option>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>
          <svg className="sprites">
            <polyline points="1 1 5 5 9 1" />
          </svg>
        </label>
      </div>
    </div>
  );
};

SearchFilter.propTypes = {
  search: PropTypes.func.isRequired,
};

export default SearchFilter;
