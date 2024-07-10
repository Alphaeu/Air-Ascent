import React from 'react';
import { useSelector } from 'react-redux';

const FlightResults = () => {
  const { flights } = useSelector(state => state.flights);

  return (
    <div>
      {flights && flights.map(flight => (
        <div key={flight.id}>
          <h3>{flight.airline}</h3>
          <p>{flight.origin} to {flight.destination}</p>
          <p>{flight.departure_time} - {flight.arrival_time}</p>
          <p>{flight.price.amount} {flight.price.currency}</p>
        </div>
      ))}
    </div>
  );
};

export default FlightResults;

