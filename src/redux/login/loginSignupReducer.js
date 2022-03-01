import axios from 'axios';

const CURRENT_SESSION = 'lodging-app-frontend/loginSignup/CURRENT_SESSION';
const LOGGIN = 'lodging-app-frontend/loginSignup/LOGGIN';
const CREATE_USER = 'lodging-app-frontend/loginSignup/CREATE_USER';
const initialState = '';

export const currentSession = () => async (dispatch) => {
  const token = sessionStorage.getItem('auth_token');
  dispatch({
    type: LOGGIN,
    payload: token || 'null',
  });
};

export const loggin = (name) => async (dispatch) => {
  try {
    const response = await axios.post(`http://localhost:3000/api/v1/login?name=${name}`);
    const token = Object.values(response.data);
    sessionStorage.setItem('auth_token', token);
    dispatch({
      type: LOGGIN,
      payload: token[0],
    });
  } catch (e) {
    dispatch({
      type: LOGGIN,
      payload: 'null',
    });
  }
};

export const createUser = (name, birthDate) => async (dispatch) => {
  try {
    const response = await axios.post(`http://localhost:3000/api/v1/signup?name=${name}`, { params: { birth_date: birthDate } });
    const token = Object.values(response.data);
    sessionStorage.setItem('auth_token', token);
    dispatch({
      type: CREATE_USER,
      payload: token[1],
    });
  } catch (e) {
    dispatch({
      type: CREATE_USER,
      payload: 'null',
    });
  }
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_SESSION:
      console.log(action.payload);
      return action.payload;
    case LOGGIN:
      return action.payload;
    case CREATE_USER:
      return action.payload;
    default:
      return state;
  }
};

export default (loginReducer);
