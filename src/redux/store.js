import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import roomsReducer from './rooms/roomsReducer';
import loginReducer from './login/loginReducer';

const reducer = combineReducers({
  roomsReducer,
  loginReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
