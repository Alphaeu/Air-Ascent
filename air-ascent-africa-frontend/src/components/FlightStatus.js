import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFlightStatus } from '../redux/actions';
import styles from './FlightStatus.module.css';

const FlightStatus = () => {
  const [formData, setFormData] = useState({
    flightNumber: '',
    date: '',
  });
  const dispatch = useDispatch();
  const { flightStatus, error } = useSelector(state => state.flightStatus);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getFlightStatus(formData));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input name="flightNumber" value={formData.flightNumber} onChange={handleChange} placeholder="Flight Number" required className={styles.input} />
        <input name="date" type="date" value={formData.date} onChange={handleChange} required className={styles.input} />
        <button type="submit" className={styles.button}>Get Flight Status</button>
      </form>
      {error && <div className={styles.error}>{error}</div>}
      {flightStatus && (
        <div className={styles.statusCard}>
          <h3>{flightStatus.airline}</h3>
          <p>Flight Number: {flightStatus.flightNumber}</p>
          <p>Status: {flightStatus.status}</p>
        </div>
      )}
    </div>
  );
 };

export default FlightStatus;

