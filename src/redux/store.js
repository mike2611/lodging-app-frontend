import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import mainReducer from './main/mainReducer';
import loginSignupReducer from './login/loginSignupReducer';

const reducer = combineReducers({
  mainReducer,
  loginSignupReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
