import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import Main from './components/Main';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
