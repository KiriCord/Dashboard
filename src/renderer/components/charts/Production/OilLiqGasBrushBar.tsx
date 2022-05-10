import Title from '@components/info/Title';
import React from 'react';
import {
    BarChart,
    Bar,
    Brush,
    ReferenceLine,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { ChartProps, Mer } from "../../../types";


function createData(labels: string[], oil: Number[], gas: Number[], liq: Number[]) {
    let res = labels.map((item, index) => {
        return { 'Дата': item, 'Нефть': oil[index], 'Газ': gas[index], 'Жидкость': liq[index] }
    });
    return res;
}


export const OilLiqGasBrushBar = (props: ChartProps) => {
    const toDate = (mer: Mer) => {
        const date = new Date(mer["dt"] as string);
        const month = date.getMonth() + 1;
        return `${month >= 10 ? month : "0" + month.toString()}/${date.getFullYear()}`
    }

    const labelShorted = props.data.map(toDate);
    const gasShorted = props.data.map(item => item["gas"]);
    const oilShorted = props.data.map(item => item["oil"]);
    const liqShorted = props.data.map(item => item["liq"]);

    return (
        <>
            <Title>Гистограмма добычи</Title>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={createData(labelShorted, oilShorted, gasShorted, liqShorted)}
                    margin={{
                        top: 0,
                        right: 35,
                        left: 10,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Дата" /><YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                    <ReferenceLine y={0} stroke="#000" />
                    <Brush dataKey="Дата" height={30} stroke="#8884d8" endIndex={10} />
                    <Bar dataKey="Нефть" fill="#8884d8" />
                    <Bar dataKey="Газ" fill="#82ca9d" />
                    <Bar dataKey="Жидкость" fill="#82A6CA" />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}