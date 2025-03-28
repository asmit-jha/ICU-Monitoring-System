const Patient = require('../models/Patient');

// Get all patients
exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a patient
exports.addPatient = async (req, res) => {
  const { name, age, heartRate, oxygenLevel, bloodPressure } = req.body;

  const newPatient = new Patient({
    name,
    age,
    heartRate,
    oxygenLevel,
    bloodPressure
  });

  try {
    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
