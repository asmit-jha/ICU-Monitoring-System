import axios from 'axios';

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Change as needed
});

// Fetch vitals
export const fetchVitals = () => API.get('/vitals');
export const fetchRiskScores = () => API.get('/predict');