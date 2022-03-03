import axios from 'axios';

const FETCH_HOTELS = 'lodging-app-frontend/hotels/FETCH_HOTELS';
const initialState = [];

export const fetchHotels = (token, cityId) => async (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get(`https://radiant-thicket-51613.herokuapp.com/api/v1/cities/${cityId}/hotels`, config);
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
