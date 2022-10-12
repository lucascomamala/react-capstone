/* eslint-disable */
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navigation-bar">
      <Link to="/" className="home-link">
        <span className="home-navlink">{location.pathname === '/' ? 'HOME' : 'GO BACK'}</span>
      </Link>
      <Link to="/" className="home-link">
        <img className="nav-logo" src="/media/logo.png" alt="league-logo" />
      </Link>
    </nav>
  );
};

export default Navbar;
