import { NavLink } from 'react-router-dom';
import {
  Navbar, Nav, NavDropdown,
} from 'react-bootstrap';

const NavBarMobile = () => (
  <Navbar className="d-flex d-md-block">
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active-style px-3 py-2' : 'nav-elements')}>Home</NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink to="/reserve" className={({ isActive }) => (isActive ? 'active-style px-3 py-2' : 'nav-elements')}>Reserve</NavLink>
        </Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item>
            <NavLink to="/my_reservations" className={({ isActive }) => (isActive ? 'active-style px-3 py-2' : 'nav-elements')}>Reservations</NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <NavLink to="/add" className={({ isActive }) => (isActive ? 'active-style px-3 py-2' : 'nav-elements')}>Add room</NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <NavLink to="/delete" className={({ isActive }) => (isActive ? 'active-style px-3 py-2' : 'nav-elements')}>Delete room</NavLink>
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBarMobile;
