import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './components/Details';
import ReserveRoom from './components/ReserveRoom';

const App = () => (
  <Router>
    <Routes>
      <Route path="/room/:roomId" exact element={<Details />} />
      <Route path="/reserve_room/" exact element={<ReserveRoom />} />
    </Routes>
  </Router>
);

export default App;
