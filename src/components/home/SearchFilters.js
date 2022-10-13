/* eslint-disable */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SearchFilter = ({ search }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.champions);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [difficulty, setDifficulty] = useState('');


  // Name search box handler
  const handleNameChange = (nameQ) => {
    setName(nameQ);
    search({ name: nameQ, role: role, difficulty: difficulty });
  };
  const resetName = () => {
    setName('');
    search({ name: '', role: role, difficulty: difficulty });
  };

  // Role select handler
  const handleRoleChange = (roleQ) => {
    setRole(roleQ);
    search({ name: name, role: roleQ, difficulty: difficulty });
  };

  // Difficulty select handler
  const handleDifficultyChange = (diffQ) => {
    setDifficulty(diffQ);
    search({ name: name, role: role, difficulty: diffQ });
  };

  return (
    <div className="champion-filters">
      <div className="name-filter">
        <form className="search-box">
          <input value={name} onChange={(e) => { handleNameChange(e.target.value); }} type="text" placeholder=" " />
          <button type="reset" onClick={resetName}></button>
        </form>
      </div>
      <div className="role-filter">
        <label className="select" htmlFor="slct-role">
          <select id="slct-role" required="required" value={role} onChange={(e) => { handleRoleChange(e.target.value); }}>
            <option value="">Filter by role...</option> { /*Can add disabled="disabled" to the first option to disable it*/ }
            <option value="Mage">Mage</option>
            <option value="Tank">Tank</option>
            <option value="Support">Support</option>
            <option value="Assassin">Assassin</option>
            <option value="Fighter">Fighter</option>
            <option value="Marksman">Marksman</option>
          </select>
          <svg className="sprites">
            <polyline points="1 1 5 5 9 1"></polyline>
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
            <polyline points="1 1 5 5 9 1"></polyline>
          </svg>
        </label>
      </div>
    </div>
  );
}

export default SearchFilter;
