import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

function VitalsChart({ data, title, dataKey }) {
  return (
    <div>
      <h3>{title}</h3>
      <LineChart width={400} height={250} data={data}>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#eee" />
        <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default VitalsChart;