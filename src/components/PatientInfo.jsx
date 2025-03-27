import React from 'react';

function PatientInfo({ patient }) {
  return (
    <div className="patient-info">
      <h2>{patient.name}</h2>
      <p><b>Age:</b> {patient.age}</p>
      <p><b>Medical ID:</b> {patient.id}</p>
      <p><b>Status:</b> {patient.status}</p>
    </div>
  );
}

export default PatientInfo;