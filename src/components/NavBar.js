import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavBar = () => (
  <div>
    <img className="m-3" src={logo} alt="logo" width="250px" />
    <div className="mt-3 nav">
      <ul className="nav-menu">
        <li className="mb-3 p-0">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active-style px-3 py-2' : 'nav-elements')}> Home </NavLink>
        </li>
        <li className="mb-3">
          <NavLink to="/reserve" className={({ isActive }) => (isActive ? 'active-style px-3 py-2' : 'nav-elements')}>Reserve</NavLink>
        </li>
        <li className="mb-3">
          <NavLink to="/my_reservations" className={({ isActive }) => (isActive ? 'active-style px-3 py-2' : 'nav-elements')}>Reservations</NavLink>
        </li>
        <li className="mb-3">
          <NavLink to="/add" className={({ isActive }) => (isActive ? 'active-style px-3 py-2' : 'nav-elements')}>Add room</NavLink>
        </li>
        <li className="mb-3">
          <NavLink to="/delete" className={({ isActive }) => (isActive ? 'active-style px-3 py-2' : 'nav-elements')}>Delete room</NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default NavBar;
