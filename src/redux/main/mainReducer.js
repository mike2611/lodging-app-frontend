import axios from 'axios';

const FETCH_ROOMS = 'lodging-app-frontend/main/FETCH_ROOMS';
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NDU3Mzc3MzB9.R9IIkV672R7GIdL8FJsQiVKS1CQZA_cE2QjtA2WKx2U';
const initialState = [];

export const fetchRooms = () => async (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get('http://127.0.0.1:3000/api/v1/rooms', config);
  const rooms = Object.values(response.data);
  dispatch({
    type: FETCH_ROOMS,
    payload: rooms,
  });
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROOMS:
      return action.payload;
    default:
      return state;
  }
};

export default (mainReducer);
