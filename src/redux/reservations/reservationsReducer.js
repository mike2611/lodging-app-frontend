import axios from 'axios';

const FETCH_RESERVATIONS = 'lodging-app-frontend/reservations/FETCH_RESERVATIONS';
const POST_RESERVATION = 'lodging-app-frontend/reservations/POST_RESERVATION';
const CLEAR_RESERVATIONS_MSG = 'lodging-app-frontend/reservations/CLEAR_RESERVATIONS_MSG';
const initialState = { reservations: [], message: '' };

export const postReservation = (token, data) => async (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  let message = '';
  const response = await axios.post('http://127.0.0.1:3000/api/v1/reservations', data, config).catch((error) => {
    if (error.response) {
      message = error.response.data.message;
    }
  });
  if (message === '') message = response.data.success;
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

export const clearReservationMsg = {
  type: CLEAR_RESERVATIONS_MSG,
};

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESERVATIONS:
      return { ...state, reservations: action.payload };
    case POST_RESERVATION:
      return { ...state, message: action.payload };
    case CLEAR_RESERVATIONS_MSG:
      return { ...state, message: '' };
    default:
      return state;
  }
};

export default (reservationsReducer);
