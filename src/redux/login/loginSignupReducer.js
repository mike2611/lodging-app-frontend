import axios from 'axios';

const FETCH_TOKEN = 'lodging-app-frontend/loginSignup/FETCH_TOKEN';
const CREATE_USER = 'lodging-app-frontend/loginSignup/CREATE_USER';
const initialState = '';

export const fetchToken = (name) => async (dispatch) => {
  try {
    const response = await axios.post(`http://localhost:3000/api/v1/login?name=${name}`);
    const token = Object.values(response.data);
    dispatch({
      type: FETCH_TOKEN,
      payload: token[0],
    });
  } catch (e) {
    dispatch({
      type: FETCH_TOKEN,
      payload: 'null',
    });
  }
};

export const createUser = (name, birthDate) => async (dispatch) => {
  try {
    const response = await axios.post(`http://localhost:3000/api/v1/signup?name=${name}`, { params: { birth_date: birthDate } });
    const token = Object.values(response.data);
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
    case FETCH_TOKEN:
      return action.payload;
    case CREATE_USER:
      return action.payload;
    default:
      return state;
  }
};

export default (loginReducer);
