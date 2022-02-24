import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import roomsReducer from './rooms/roomsReducer';
import loginSignupReducer from './login/loginSignupReducer';
import reservationsReducer from './reservations/reservationsReducer';

const reducer = combineReducers({
  roomsReducer,
  loginSignupReducer,
  reservationsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
