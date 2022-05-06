import React from 'react';
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
import { Mer, CharProps as ChartProps } from "../../types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Газ и нефть',
    },
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
    },
    y1: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

export function Chart(props: ChartProps) {
  const toDate = (mer: Mer) => {
    const date = new Date(mer["dt"] as string);
    const month = date.getMonth() + 1;
    return `${month >= 10 ? month : "0" + month.toString()}/${date.getFullYear()}`
  }

  const labels = props.data.map(toDate);
  const gas = props.data.map(item => item["gas"]);
  const oil = props.data.map(item => item["oil"]);

  const chartData = {
    labels: labels,
    datasets: [{
      label: 'Газ',
      data: gas,
      fill: true,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
      yAxisID: 'y'
    },
    {
      label: 'Нефть',
      data: oil,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      fill: true,
      yAxisID: 'y1',
    },
    ]

  };

  return <Line options={options} data={chartData} />;
}