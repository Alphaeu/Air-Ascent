import axios from 'axios';
import { 
  USER_REGISTER_SUCCESS, 
  USER_REGISTER_FAIL, 
  USER_LOGIN_SUCCESS, 
  USER_LOGIN_FAIL, 
  FLIGHT_SEARCH_SUCCESS, 
  FLIGHT_SEARCH_FAIL, 
  BOOK_FLIGHT_SUCCESS, 
  BOOK_FLIGHT_FAIL 
} from './constants';

// Base API URL
const API_URL = 'http://localhost:3000/api';

// User Actions
export const registerUser = (userData) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${API_URL}/users/register`, userData);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.response.data.message });
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${API_URL}/users/login`, userData);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: error.response.data.message });
  }
};

// Flight Actions
export const searchFlights = (searchParams) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API_URL}/flights/search`, { params: searchParams });
    dispatch({ type: FLIGHT_SEARCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FLIGHT_SEARCH_FAIL, payload: error.response.data.message });
  }
};

// Booking Actions
export const bookFlight = (bookingData) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${API_URL}/bookings`, bookingData);
    dispatch({ type: BOOK_FLIGHT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: BOOK_FLIGHT_FAIL, payload: error.response.data.message });
  }
};

