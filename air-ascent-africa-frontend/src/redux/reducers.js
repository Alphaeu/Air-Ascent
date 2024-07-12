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

// User Reducer
export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_SUCCESS:
    case USER_LOGIN_SUCCESS:
      return { ...state, userInfo: action.payload };
    case USER_REGISTER_FAIL:
    case USER_LOGIN_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

// Flight Reducer
export const flightReducer = (state = { flights: [] }, action) => {
  switch (action.type) {
    case FLIGHT_SEARCH_SUCCESS:
      return { ...state, flights: action.payload };
    case FLIGHT_SEARCH_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

// Booking Reducer
export const bookingReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOK_FLIGHT_SUCCESS:
      return { ...state, booking: action.payload };
    case BOOK_FLIGHT_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

