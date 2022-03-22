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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    interaction: {
        mode: 'index' as const,
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: true,
            text: 'Дебиты по МЭР',
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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Q жидкости(замерный)(МЭР), м3/сут',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            yAxisID: 'y',
        },
        {
            label: 'Q нефти(замерный)(МЭР), т/сут',
            data: [34, 59, 13, 30, 49, 60, 80],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            yAxisID: 'y',
        },
        {
            label: 'Обводненность объемная(замерная)(МЭР), %',
            data: [55, 41, 28, 33, 55, 58, 70],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 180, 132, 0.5)',
            yAxisID: 'y',
        },
        {
            label: 'Приемистость(замерная)(МЭР), м3/сут',
            data: [17, 20, 40, 23, 57, 34, 22],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(200, 99, 132, 0.5)',
            yAxisID: 'y',
        },
    ],
};

export function Debits() {
    return <Line options={options} data={data} />;
}