/* eslint-disable */
import { NavLink, useLocation } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navigation-bar">
      <NavLink to="/" className="home-link">
        <img className="nav-logo" src="/media/logo.png" alt="league-logo" />
      </NavLink>
    </nav>
  );
};

export default Navbar;
