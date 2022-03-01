import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import NavBar from './components/NavBar';
import NavBarMobile from './components/NavBarMobile';
import Details from './components/Details';
import MyReservations from './components/MyReservations';
import ReserveRoom from './components/ReserveRoom';
import ReserveFromNavbar from './components/ReserveFromNavbar';
import Login from './components/Login';
import Signup from './components/Signup';
import PrivateRoute from './components/PrivateRoute';
import DeleteRoom from './components/DeleteRoom';
import AddRoom from './components/AddRoom';

const App = () => (
  <Router>
    <div className="d-flex flex-column flex-md-row">
      <div className="d-md-block d-none">
        <NavBar />
      </div>
      <div className="d-flex justify-content-center me-4 d-md-none">
        <NavBarMobile />
      </div>
      <Routes>
        <Route path="/room/:id" exact element={<PrivateRoute><Details /></PrivateRoute>} />
        <Route path="/room/:id/reserve" exact element={<PrivateRoute><ReserveRoom /></PrivateRoute>} />
        <Route path="/reserve_room" exact element={<PrivateRoute><ReserveFromNavbar /></PrivateRoute>} />
        <Route path="/my_reservations/" exact element={<PrivateRoute><MyReservations /></PrivateRoute>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<PrivateRoute><Main /></PrivateRoute>} />
        <Route exact path="/add" element={<PrivateRoute><AddRoom /></PrivateRoute>} />
        <Route path="/delete" element={<PrivateRoute><DeleteRoom /></PrivateRoute>} />
      </Routes>
    </div>
  </Router>
);

export default App;
