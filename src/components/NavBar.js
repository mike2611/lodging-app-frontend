import { BrowserRouter as Router, Routes, NavLink } from 'react-router-dom';
import { Route } from 'react-router';
import Main from './Main';
import logo from '../assets/logo.png';

const NavBar = () => (
  <Router>
    <div className="nav">
      <div className="nav-bar d-flex">
        <span><img className="main-logo" src={logo} alt="logo" /></span>
        <ul className="nav-menu d-flex">
          <li className="mb-3">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active-style px-5 py-2' : 'nav-elements')}> Home </NavLink>
          </li>
          <li className="mb-3">
            <NavLink to="/reserve" className={({ isActive }) => (isActive ? 'active-style px-5 py-2' : 'nav-elements')}>Reserve</NavLink>
          </li>
          <li className="mb-3">
            <NavLink to="/reservations" className={({ isActive }) => (isActive ? 'active-style px-5 py-2' : 'nav-elements')}>My reservations</NavLink>
          </li>
          <li className="mb-3">
            <NavLink to="/add" className={({ isActive }) => (isActive ? 'active-style px-5 py-2' : 'nav-elements')}>Add room</NavLink>
          </li>
          <li className="mb-3">
            <NavLink to="/delete" className={({ isActive }) => (isActive ? 'active-style px-5 py-2' : 'nav-elements')}>Delete room</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </Router>
);

export default NavBar;
