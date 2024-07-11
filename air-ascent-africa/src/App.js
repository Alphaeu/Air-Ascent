import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import FlightSearch from './components/FlightSearch';
import FlightResults from './components/FlightResults';
import BookingForm from './components/BookingForm';
import BookingConfirmation from './components/BookingConfirmation';
import FlightStatus from './components/FlightStatus';
import UserAccount from './components/UserAccount';
import styles from './App.module.css';import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from './components/Checkout';

const stripePromise = loadStripe(pk_test_51PbHqeHazhScmZJH1Q3KY9dR9oacVtEwq2jDmVxkQPOxF19ophodLStRUdLXaSpgBJ9cBy0r1mD2Czb4vbVnty8400Y13VQ7jX);

function App() {
  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  );
}


const App = () => {
  return (
    <Router>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <Link to="/">Home</Link>
          <Link to="/search">Search Flights</Link>
          <Link to="/status">Flight Status</Link>
          <Link to="/account">User Account</Link>
        </nav>
        <Switch>
          <Route path="/" exact component={FlightSearch} />
          <Route path="/search" component={FlightSearch} />
          <Route path="/results" component={FlightResults} />
          <Route path="/book/:id" component={BookingForm} />
          <Route path="/confirmation" component={BookingConfirmation} />
          <Route path="/status" component={FlightStatus} />
          <Route path="/account" component={UserAccount} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

