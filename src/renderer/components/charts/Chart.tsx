import React, { useEffect, useState } from 'react';
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

type Mer = {
  gas: Number,
  oil: Number,
  dt: String
}

export function Chart() {
  const [gas, setGas] = useState([]);
  const [oil, setOil] = useState([]);
  const [labels, setLabels] = useState(['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']);
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


  const fetchData = (well_id: string) =>
    fetch(`http://127.0.0.1:8000/mer/${well_id}`).then(req => req.json()).then(newData => {
      setGas(newData.map((item: Mer) => item["gas"]));
      setOil(newData.map((item: Mer) => item["oil"]));
      setLabels(newData.map((item: Mer) => {
        const date = new Date(item["dt"] as string);
        const month = date.getMonth() + 1;
        return `${month >= 10 ? month : "0" + month.toString()}/${date.getFullYear()}`
      }))
    });
  useEffect(() => {
    const eventSource = new EventSource("http://127.0.0.1:8000/events");
    eventSource.onmessage = event => {
      console.log(event.data)
      fetchData(event.data);
    }
    return () => eventSource.close();
  }, []);


  return <Line options={options} data={chartData} />;
}