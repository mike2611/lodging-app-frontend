import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import logo from '../assets/logo.png';

const NavBar = () => (
  <Navbar className="d-flex d-md-block">
    <img className="d-none d-md-block m-3" src={logo} alt="logo" width="250px" />
    <ul className="m-3 flex-row flex-md-column nav-menu">
      <li className="me-2 mt-md-3 p-0">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-style px-3 py-2' : 'nav-elements')}> Home </NavLink>
      </li>
      <li className="me-2 mt-md-3">
        <NavLink to="/reserve_room" className={({ isActive }) => (isActive ? 'active-style px-3 py-2' : 'nav-elements')}>Reserve</NavLink>
      </li>
      <li className="me-2 mt-md-3">
        <NavLink to="/my_reservations" className={({ isActive }) => (isActive ? 'active-style px-3 py-2' : 'nav-elements')}>Reservations</NavLink>
      </li>
      <li className="me-2 mt-md-3">
        <NavLink to="/add" className={({ isActive }) => (isActive ? 'active-style px-3 py-2' : 'nav-elements')}>Add room</NavLink>
      </li>
      <li className="me-2 mt-md-3">
        <NavLink to="/delete" className={({ isActive }) => (isActive ? 'active-style px-3 py-2' : 'nav-elements')}>Delete room</NavLink>
      </li>
    </ul>
  </Navbar>
);

export default NavBar;
