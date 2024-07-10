import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchFlights } from '../redux/actions';
import styles from './FlightSearch.module.css';

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
  <div className={styles.container}>
    <form onSubmit={handleSubmit} className={styles.form}>
      <input name="origin" value={formData.origin} onChange={handleChange} placeholder="Origin" required className={styles.input} />
      <input name="destination" value={formData.destination} onChange={handleChange} placeholder="Destination" required className={styles.input} />
      <input name="departure_date" type="date" value={formData.departure_date} onChange={handleChange} required className={styles.input} />
      <button type="submit" className={styles.button}>Search Flights</button>
    </form>
    {error && <div className={styles.error}>{error}</div>}
    {flights && flights.map(flight => (
      <div key={flight.id} className={styles.flightCard}>
        {flight.airline} - {flight.price.amount} {flight.price.currency}
      </div>
    ))}
  </div>
  );
};

export default FlightSearch;

