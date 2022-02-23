import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router';
import Main from './components/Main';
import NavBar from './components/NavBar';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="d-flex">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  </Provider>
);

export default App;
