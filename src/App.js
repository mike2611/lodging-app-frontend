<<<<<<< HEAD
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import NavBar from './components/NavBar';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <NavBar />
  </Provider>
export default App;
