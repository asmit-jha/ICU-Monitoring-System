import React from 'react';

function RiskScores({ scores }) {
  const getColor = (score) => {
    if (score < 0.3) return "green";
    if (score < 0.6) return "orange";
    return "red";
  };

  return (
    <div className="risk-scores">
      <h3>Risk Scores</h3>
      <p><b>Sepsis:</b> <span style={{ color: getColor(scores.sepsis) }}>{scores.sepsis.toFixed(2)}</span></p>
      <p><b>Cardiac Arrest:</b> <span style={{ color: getColor(scores.cardiac) }}>{scores.cardiac.toFixed(2)}</span></p>
      <p><b>Organ Failure:</b> <span style={{ color: getColor(scores.organ) }}>{scores.organ.toFixed(2)}</span></p>
    </div>
  );
}

export default RiskScores;