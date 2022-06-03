import Title from '@components/info/Title';
import { Box, Typography, useTheme } from '@mui/material';
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
import { MerProps, Mer } from "../../../types";


function createData(labels: string[], oil: Number[], gas: Number[], liq: Number[]) {
    let res = labels.map((item, index) => {
        return { 'Дата': item, 'Нефть, т': oil[index], 'Газ, м3': gas[index], 'Жидкость, т': liq[index] }
    });
    return res;
}


export const OilLiqGasBrushBar = (props: MerProps) => {
    const toDate = (mer: Mer) => {
        const date = new Date(mer["dt"] as string);
        const month = date.getMonth() + 1;
        return `${month >= 10 ? month : "0" + month.toString()}/${date.getFullYear()}`
    }

    const label = props.dataMer.map(toDate);
    const gas = props.dataMer.map(item => Number.parseInt(item["gas"].toFixed()));
    const oil = props.dataMer.map(item => Number.parseInt(item["oil"].toFixed()));
    const liq = props.dataMer.map(item => Number.parseInt(item["liq"].toFixed()));

    const theme = useTheme();

    return (
        <>
            <Title>Гистограмма добычи</Title>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={createData(label, oil, gas, liq)}
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
                    <Brush dataKey="Дата" height={30} stroke="#726F9B" endIndex={10} />
                    <Bar dataKey="Нефть, т" fill="#8884d8" />
                    <Bar dataKey="Газ, м3" fill="#82ca9d" />
                    <Bar dataKey="Жидкость, т" fill="#82A6CA" />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}
