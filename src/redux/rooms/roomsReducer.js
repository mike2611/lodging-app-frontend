import axios from 'axios';

const FETCH_ROOMS = 'lodging-app-frontend/rooms/FETCH_ROOMS';
const DELETE_ROOM = 'lodging-app-frontend/rooms/DELETE_ROOM';
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

export const deleteRoom = (token, id) => async (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  await axios.delete(`http://localhost:3000/api/v1/rooms/${id}`, config);
  const response = await axios.get('http://127.0.0.1:3000/api/v1/rooms', config);
  const rooms = Object.values(response.data);
  dispatch({
    type: DELETE_ROOM,
    payload: rooms,
  });
};

const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROOMS:
      return action.payload.filter(
        (room) => room.deleted === false,
      );
    case DELETE_ROOM:
      return action.payload.filter(
        (room) => room.deleted === false,
      );
    default:
      return state;
  }
};

export default (roomsReducer);
