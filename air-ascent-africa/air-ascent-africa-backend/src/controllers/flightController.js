const Flight = require('../models/Flight');

// Get all flights
exports.getAllFlights = async (req, res, next) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (err) {
    next(err);
  }
};

// Create a new flight
exports.createFlight = async (req, res, next) => {
  const { airline, flightNumber, departureTime, arrivalTime, price } = req.body;

  try {
    const newFlight = new Flight({
      airline,
      flightNumber,
      departureTime,
      arrivalTime,
      price,
    });

    await newFlight.save();
    res.status(201).json({ message: 'Flight created successfully', flight: newFlight });
  } catch (err) {
    next(err);
  }
};

// Delete a flight by ID
exports.deleteFlight = async (req, res, next) => {
  const { id } = req.params;

  try {
    await Flight.findByIdAndDelete(id);
    res.json({ message: 'Flight deleted successfully' });
  } catch (err) {
    next(err);
  }
};

