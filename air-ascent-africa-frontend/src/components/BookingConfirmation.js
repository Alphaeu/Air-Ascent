import React from 'react';
import { useSelector } from 'react-redux';
import styles from './BookingConfirmation.module.css';

const BookingConfirmation = () => {
  const { booking } = useSelector(state => state.bookings);

  return (
    <div className={styles.container}>
      {booking ? (
        <div className={styles.confirmation}>
          <h2>Booking Confirmation</h2>
          <p>Booking ID: {booking.id}</p>
          <p>Flight: {booking.flightId}</p>
          <p>Name: {booking.firstName} {booking.lastName}</p>
          <p>Email: {booking.email}</p>
        </div>
      ) : (
        <div className={styles.noBooking}>No booking confirmed</div>
      )}
    </div>
  );
};

export default BookingConfirmation;

