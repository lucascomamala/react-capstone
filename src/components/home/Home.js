/* eslint-disable */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Champion from './Champion';
import SearchFilters from './SearchFilters';
import './Home.css';
import { filterChamps } from '../../redux/HomeSlice';

const HomePage = () => {
  const state = useSelector((state) => state.champions);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (query === '') {
      dispatch(filterChamps());
    } else {
      dispatch(filterChamps(query));
    }
  }, [query]);

  return (
    <div className="home-container">
      <div className="champion-section">
        <SearchFilters search={(q) => setQuery(q)} />
        <div className="champion-grid">
          {state.detailed ? state.filtered.map((champ) => (
            <Link state={champ.id} key={champ.id} className="champion-card" to="champion">
              <Champion champ={champ} />
            </Link>
          )) : <div className="loading">Loading...</div>}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
