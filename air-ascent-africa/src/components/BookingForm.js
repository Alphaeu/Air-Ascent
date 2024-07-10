import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookFlight } from '../redux/actions';

const BookingForm = ({ flightId }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    flightId,
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
    <div>
      <form onSubmit={handleSubmit}>
        <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
        <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <button type="submit">Book Flight</button>
      </form>
      {error && <div>{error}</div>}
      {booking && <div>Booking Confirmed: {booking.id}</div>}
    </div>
  );
};

export default BookingForm;

