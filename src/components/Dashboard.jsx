import React, { useEffect, useState } from 'react';
import { fetchVitals, fetchRiskScores } from '../api/api';
import PatientInfo from './PatientInfo';
import VitalsChart from './VitalsChart';
import RiskScores from './RiskScores';
import Alerts from './Alerts';

function Dashboard() {
  const [vitals, setVitals] = useState([]);
  const [riskScores, setRiskScores] = useState({});
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    let isMounted = true; // Track if component is mounted
    const interval = setInterval(() => {
      fetchVitals()
        .then(res => {
          if (isMounted) setVitals(res.data);
        })
        .catch(err => console.error(err));
  
      fetchRiskScores()
        .then(res => {
          if (isMounted) setRiskScores(res.data);
        })
        .catch(err => console.error(err));
    }, 5000);
  
    return () => {
      isMounted = false; // Cleanup on unmount
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (riskScores.risk_score > 0.7) {
      setAlerts(prev => [...prev, {
        message: "High Risk Detected!",
        type: "Critical",
        time: Date.now(),
      }]);
    }
  }, [riskScores]);

  return (
    <div className="dashboard">
      <h1>Smart ICU Monitoring System</h1>

      <PatientInfo patient={{
        name: "John Doe",
        age: 65,
        id: "12345",
        status: "Critical"
      }} />

      <VitalsChart data={vitals} title="Heart Rate" dataKey="heart_rate" />
      <VitalsChart data={vitals} title="Oxygen Level" dataKey="oxygen_level" />
      <VitalsChart data={vitals} title="Blood Pressure" dataKey="blood_pressure" />

      <RiskScores scores={{
        sepsis: riskScores.sepsis || 0,
        cardiac: riskScores.cardiac || 0,
        organ: riskScores.organ || 0
      }} />

      <Alerts alerts={alerts} />
    </div>
  );
}

export default Dashboard;

