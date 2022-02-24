import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import roomsReducer from './rooms/roomsReducer';
import loginReducer from './login/loginReducer';
import reservationsReducer from './reservations/reservationsReducer';

const reducer = combineReducers({
  roomsReducer,
  loginReducer,
  reservationsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
