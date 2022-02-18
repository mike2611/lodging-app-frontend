import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './components/Details';

const App = () => (
  <Router>
    <Routes>
      <Route path="/room/:roomId" exact element={<Details />} />
    </Routes>
  </Router>
);

export default App;
