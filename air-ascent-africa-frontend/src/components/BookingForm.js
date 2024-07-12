import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookFlight } from '../redux/actions';
import styles from './BookingForm.module.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const dispatch = useDispatch();
  const { booking, error } = useSelector(state => state.bookings);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(bookFlight(formData));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required className={styles.input} />
        <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required className={styles.input} />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className={styles.input} />
        <button type="submit" className={styles.button}>Book Flight</button>
      </form>
      {error && <div className={styles.error}>{error}</div>}
      {booking && <div className={styles.confirmation}>Booking Confirmed: {booking.id}</div>}
    </div>
  );
};

export default BookingForm;

