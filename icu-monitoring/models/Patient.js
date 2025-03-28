const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  heartRate: Number,
  oxygenLevel: Number,
  bloodPressure: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Patient', PatientSchema);
