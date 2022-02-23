import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Details from './components/Details';
import MyReservations from './components/MyReservations';
import ReserveRoom from './components/ReserveRoom';

const App = () => (
  <Router>
    <div className="d-flex">
      <NavBar />
      <Routes>
        <Route path="/room/:roomId" exact element={<Details />} />
        <Route path="/reserve_room/" exact element={<ReserveRoom />} />
        <Route path="/my_reservations/" exact element={<MyReservations />} />
        <Route exact path="/" element={<Main />} />
      </Routes>
    </div>
  </Router>
);

export default App;
