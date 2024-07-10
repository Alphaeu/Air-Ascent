import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFlightStatus } from '../redux/actions';

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
    <div>
      <form onSubmit={handleSubmit}>
        <input name="flightNumber" value={formData.flightNumber} onChange={handleChange} placeholder="Flight Number" required />
        <input name="date" type="date" value={formData.date} onChange={handleChange} required />
        <button type="submit">Get Flight Status</button>
      </form>
      {error && <div>{error}</div>}
      {flightStatus && (
        <div>
          <h3>{flightStatus.airline}</h3>
          <p>Flight Number: {flightStatus.flightNumber}</p>
          <p>Status: {flightStatus.status}</p>
        </div>
      )}
    </div>
  );
};

export default FlightStatus;

