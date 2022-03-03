import axios from 'axios';

const FETCH_CITIES = 'lodging-app-frontend/cities/FETCH_CITIES';
const initialState = [];

export const fetchCities = (token) => async (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get('https://radiant-thicket-51613.herokuapp.com/api/v1/cities', config);
  const cities = Object.values(response.data);
  dispatch({
    type: FETCH_CITIES,
    payload: cities,
  });
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITIES:
      return action.payload;
    default:
      return state;
  }
};

export default (citiesReducer);
