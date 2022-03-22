import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


export const data = {
  labels: labels,
  datasets: [{
    label: 'First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: true,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]

};


export function Chart() {
  return <Line data={data} />;
}