import React from 'react';
import { useSelector } from 'react-redux';
import styles from './FlightResults.module.css';

const FlightResults = () => {
  const { flights } = useSelector(state => state.flights);

  return (
    <div className={styles.container}>
      {flights.map(flight => (
        <div key={flight.id} className={styles.flightCard}>
          <h3>{flight.airline}</h3>
          <p>Price: {flight.price.amount} {flight.price.currency}</p>
          <p>Departure: {flight.departureTime}</p>
          <p>Arrival: {flight.arrivalTime}</p>
          <Link to={`/book/${flight.id}`} className={styles.bookButton}>Book</Link>
        </div>
      ))}
    </div>
  );
};

export default FlightResults;

