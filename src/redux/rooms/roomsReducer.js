import axios from 'axios';

const FETCH_ROOMS = 'lodging-app-frontend/rooms/FETCH_ROOMS';
const initialState = [];

export const fetchRooms = (token) => async (dispatch) => {
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

const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROOMS:
      return action.payload;
    default:
      return state;
  }
};

export default (roomsReducer);
