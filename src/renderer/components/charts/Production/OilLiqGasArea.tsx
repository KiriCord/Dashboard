import React from "react";
import { useTheme } from '@mui/material/styles';
import { AreaChart, Area, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, CartesianGrid, Brush, ReferenceLine } from 'recharts';
import { MerProps, Mer } from "../../../types";
import Title from "@components/info/Title";
import { Box, Typography } from "@mui/material";


function createData(labels: string[], oil: Number[], gas: Number[], liq: Number[]) {
    let res = labels.map((item, index) => {
        return { 'Дата': item, 'Нефть': oil[index], 'Газ': gas[index], 'Жидкость': liq[index] }
    });
    return res;
}


export const OilLiqGasArea = (props: MerProps) => {
    const toDate = (mer: Mer) => {
        const date = new Date(mer["dt"] as string);
        const month = date.getMonth() + 1;
        return `${month >= 10 ? month : "0" + month.toString()}/${date.getFullYear()}`
    }

    const labels = props.dataMer.map(toDate);
    const gas = props.dataMer.map(item => Number.parseInt(item["gas"].toFixed()));
    const oil = props.dataMer.map(item => Number.parseInt(item["oil"].toFixed()));
    const liq = props.dataMer.map(item => Number.parseInt(item["liq"].toFixed()));

    const theme = useTheme();
    return (
        <>
            <Title>График добычи</Title>
            <ResponsiveContainer>
                <AreaChart
                    data={createData(labels, oil, gas, liq)}
                    margin={{
                        top: 0,
                        right: 35,
                        bottom: 0,
                        left: 10,
                    }}
                >
                    <defs>
                        <linearGradient id="colorOil" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorGas" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorLiq" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82A6CA" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82A6CA" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="Дата"
                        stroke={theme.palette.text.secondary}
                        style={theme.typography.body2}
                    />
                    <YAxis
                        stroke={theme.palette.text.secondary}
                        style={theme.typography.body2}
                    >
                    </YAxis>
                    <ReferenceLine y={0} stroke="#000" />
                    <Brush dataKey="Дата" height={30} stroke="#726F9B" />
                    <Area type="monotone" dataKey="Нефть" stroke="#8884d8" fillOpacity={1} fill="url(#colorOil)" />
                    <Area type="monotone" dataKey="Газ" stroke="#82ca9d" fillOpacity={1} fill="url(#colorGas)" />
                    <Area type="monotone" dataKey="Жидкость" stroke="#82A6CA" fillOpacity={1} fill="url(#colorLiq)" />
                    <Tooltip />
                    <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                </AreaChart>
            </ResponsiveContainer>
        </>
    );
}



