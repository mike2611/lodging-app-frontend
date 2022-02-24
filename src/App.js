import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Details from './components/Details';
import MyReservations from './components/MyReservations';
import ReserveRoom from './components/ReserveRoom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

const App = () => (
  <Router>
    <div className="d-flex">
      <NavBar />
      <Routes>
        <Route path="/room/:roomId" exact element={<PrivateRoute><Details /></PrivateRoute>} />
        <Route path="/reserve_room/" exact element={<ReserveRoom />} />
        <Route path="/my_reservations/" exact element={<MyReservations />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<PrivateRoute><Main /></PrivateRoute>} />
      </Routes>
    </div>
  </Router>
);

export default App;
