import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            type: 'line' as const,
            label: 'Dataset 1',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            fill: false,
            data: [31, 44, 29, 57, 70, 71, 15],
        },
        {
            type: 'bar' as const,
            label: 'Dataset 2',
            backgroundColor: 'rgb(75, 192, 192)',
            data: [7, 10, 20, 40, 32, 54, 29],
            borderColor: 'white',
            borderWidth: 2,
        },
        {
            type: 'bar' as const,
            label: 'Dataset 3',
            backgroundColor: 'rgb(53, 162, 235)',
            data: [40, 21, 66, 75, 45, 20, 39],
        },
    ],
};

export function Multitype() {
    return <Chart type='bar' data={data} />;
}