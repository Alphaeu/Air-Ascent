import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchFlights } from '../redux/actions';

const FlightSearch = () => {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    departure_date: '',
  });
  const dispatch = useDispatch();
  const { flights, error } = useSelector(state => state.flights);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchFlights(formData));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="origin" value={formData.origin} onChange={handleChange} placeholder="Origin" required />
        <input name="destination" value={formData.destination} onChange={handleChange} placeholder="Destination" required />
        <input name="departure_date" type="date" value={formData.departure_date} onChange={handleChange} required />
        <button type="submit">Search Flights</button>
      </form>
      {error && <div>{error}</div>}
      {flights && flights.map(flight => (
        <div key={flight.id}>{flight.airline} - {flight.price.amount} {flight.price.currency}</div>
      ))}
    </div>
  );
};

export default FlightSearch;

