import axios from 'axios';

const FETCH_TOKEN = 'lodging-app-frontend/login/FETCH_TOKEN';
const initialState = '';

export const fetchToken = (name) => async (dispatch) => {
  const response = await axios.post(`http://localhost:3000/api/v1/login?name=${name}`);
  const token = Object.values(response.data);
  dispatch({
    type: FETCH_TOKEN,
    payload: token[0],
  });
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOKEN:
      return action.payload;
    default:
      return state;
  }
};

export default (loginReducer);
