import axios from 'axios';

const FETCH_RESERVATIONS = 'lodging-app-frontend/reservations/FETCH_RESERVATIONS';
const POST_RESERVATION = 'lodging-app-frontend/reservations/POST_RESERVATION';
const initialState = [];

export const postReservation = (token, data) => async (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.post('http://127.0.0.1:3000/api/v1/reservations', data, config);
  const message = Object.values(response.data);
  dispatch({
    type: POST_RESERVATION,
    payload: message,
  });
};

export const fetchReservations = (token) => async (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get('http://127.0.0.1:3000/api/v1/reservations', config);
  const reservations = Object.values(response.data);
  dispatch({
    type: FETCH_RESERVATIONS,
    payload: reservations,
  });
};

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESERVATIONS:
      return action.payload;
    case POST_RESERVATION:
      return action.payload;
    default:
      return state;
  }
};

export default (reservationsReducer);
