import axios from 'axios';

const FETCH_ROOMS = 'lodging-app-frontend/rooms/FETCH_ROOMS';
const POST_ROOM = 'lodgin-app-frontend/rooms/POST_ROOM';
const DELETE_ROOM = 'lodging-app-frontend/rooms/DELETE_ROOM';
const initialState = [];

export const postRoom = (token, data) => async (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  let message = '';
  const response = await axios.post('https://radiant-thicket-51613.herokuapp.com/api/v1/rooms', data, config).catch((error) => {
    if (error.response) {
      message = error.response.data.message;
    }
  });
  if (message === '') message = response.data.success;
  dispatch({
    type: POST_ROOM,
    payload: message === 'The room was created succesfully' ? initialState : message,
  });
};

export const fetchRooms = (token) => async (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get('https://radiant-thicket-51613.herokuapp.com/api/v1/rooms', config);
  const rooms = Object.values(response.data);
  dispatch({
    type: FETCH_ROOMS,
    payload: rooms,
  });
};

export const deleteRoom = (token, id) => async (dispatch) => {
  const config = {
    headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NDY0MjcxMTJ9.lNT6MQUPA7FkfpcHMtnHg53-tM_tUS64mkcod5ClIMY' },
  };
  await axios.delete(`https://radiant-thicket-51613.herokuapp.com/api/v1/rooms/${id}`, config);
  const response = await axios.get('https://radiant-thicket-51613.herokuapp.com/api/v1/rooms', config);
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
    case POST_ROOM:
      return action.payload;
    case DELETE_ROOM:
      return action.payload.filter(
        (room) => room.deleted === false,
      );
    default:
      return state;
  }
};

export default (roomsReducer);
