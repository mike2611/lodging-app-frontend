import axios from 'axios';

const FETCH_HOTELS = 'lodging-app-frontend/hotels/FETCH_HOTELS';
const initialState = [];

export const fetchHotels = (token, cityId) => async (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get(`http://127.0.0.1:3000/api/v1/cities/${cityId}/hotels`, config);
  const cities = Object.values(response.data);
  dispatch({
    type: FETCH_HOTELS,
    payload: cities,
  });
};

const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOTELS:
      return action.payload;
    default:
      return state;
  }
};

export default (hotelsReducer);
