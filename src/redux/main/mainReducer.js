import axios from 'axios';

const FETCH_ROOMS = 'lodging-app-frontend/main/FETCH_ROOMS';
const initialState = [];

export const fetchRooms = () => async (dispatch) => {
  const response = await axios.get('http://127.0.0.1:3000/api/v1/rooms');
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
