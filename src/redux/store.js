import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import mainReducer from './main/mainReducer';
import loginReducer from './login/loginReducer';

const reducer = combineReducers({
  mainReducer,
  loginReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
