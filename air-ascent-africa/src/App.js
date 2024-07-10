import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import FlightSearch from './components/FlightSearch';
import FlightResults from './components/FlightResults';
import BookingForm from './components/BookingForm';
import BookingConfirmation from './components/BookingConfirmation';
import FlightStatus from './components/FlightStatus';
import UserAccount from './components/UserAccount';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" exact component={FlightSearch} />
          <Route path="/results" component={FlightResults} />
          <Route path="/book" component={BookingForm} />
          <Route path="/confirmation" component={BookingConfirmation} />
          <Route path="/status" component={FlightStatus} />
          <Route path="/account" component={UserAccount} />
        </div>
      </Router>
    </Provider>
  );
};

export default App;

