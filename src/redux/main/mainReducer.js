// import axios from 'axios';

const FETCH_ROOMS = 'lodging-app-frontend/main/FETCH_ROOMS';
const initialState = [];

export const fetchRooms = (dispatch) => {
  const rooms = [{ hotel: 'Hotel 1', description: 'test 1' }, { hotel: 'Hotel 2', description: 'test 2' }];
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
