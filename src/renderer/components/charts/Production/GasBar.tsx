import Title from '@components/info/Title';
import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush } from 'recharts';
import { MerProps, Mer } from "../../../types";


function createData(labels: string[], gas: Number[]) {
    let res = labels.map((item, index) => {
        return { 'Дата': item, 'Газ': gas[index] }
    });
    return res;
}

export const GasBar = (props: MerProps) => {
    const toDate = (mer: Mer) => {
        const date = new Date(mer["dt"] as string);
        const month = date.getMonth() + 1;
        return `${month >= 10 ? month : "0" + month.toString()}/${date.getFullYear()}`
    }

    const label = props.dataMer.map(toDate);
    const gas = props.dataMer.map(item => Number.parseInt(item["gas"].toFixed()));
    const theme = useTheme();
    return (
        <>
            <Title>Гистограмма добычи</Title>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={createData(label, gas)}
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
                    <Brush dataKey="Дата" height={30} stroke="#82ca9d" endIndex={20} />
                    <Bar dataKey="Газ" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}
