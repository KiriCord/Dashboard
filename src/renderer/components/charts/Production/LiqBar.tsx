import Title from '@components/info/Title';
import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush } from 'recharts';
import { MerProps, Mer } from "../../../types";


function createData(labels: string[], liq: Number[]) {
    let res = labels.map((item, index) => {
        return { 'Дата': item, 'Жидкость, т': liq[index] }
    });
    return res;
}

export const LiqBar = (props: MerProps) => {
    const toDate = (mer: Mer) => {
        const date = new Date(mer["dt"] as string);
        const month = date.getMonth() + 1;
        return `${month >= 10 ? month : "0" + month.toString()}/${date.getFullYear()}`
    }

    const label = props.dataMer.map(toDate);
    const liq = props.dataMer.map(item => Number.parseInt(item["liq"].toFixed()));
    const theme = useTheme();
    return (
        <>
            <Title>Гистограмма добычи</Title>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={createData(label, liq)}
                    margin={{
                        top: 0,
                        right: 25,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Дата" /><YAxis />
                    <Tooltip />
                    <Legend />
                    <Brush dataKey="Дата" height={30} stroke="#82A6CA" endIndex={20} />
                    <Bar dataKey="Жидкость, т" fill="#82A6CA" />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}
