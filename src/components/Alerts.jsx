import React from 'react';

function Alerts({ alerts }) {
  return (
    <div className="alerts">
      <h3>Alerts</h3>
      {alerts.length === 0 ? (
        <p>No alerts</p>
      ) : (
        <ul>
          {alerts.map((alert, index) => (
            <li key={index} style={{ color: alert.type === "Critical" ? "red" : "orange" }}>
              {alert.message} - {new Date(alert.time).toLocaleTimeString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Alerts;