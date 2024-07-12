import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './userReducer';
import flightReducer from './flightReducer';
import bookingReducer from './bookingReducer';

const rootReducer = combineReducers({
  user: userReducer,
  flights: flightReducer,
  bookings: bookingReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

