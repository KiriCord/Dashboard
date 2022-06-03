import Title from '@components/info/Title';
import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush } from 'recharts';
import { MerProps, Mer } from "../../../types";


function createData(labels: string[], oil: Number[]) {
    let res = labels.map((item, index) => {
        return { 'Дата': item, 'Нефть, т': oil[index] }
    });
    return res;
}

export const OilBar = (props: MerProps) => {
    const toDate = (mer: Mer) => {
        const date = new Date(mer["dt"] as string);
        const month = date.getMonth() + 1;
        return `${month >= 10 ? month : "0" + month.toString()}/${date.getFullYear()}`
    }

    const label = props.dataMer.map(toDate);
    const oil = props.dataMer.map(item => Number.parseInt(item["oil"].toFixed()));
    const theme = useTheme();
    return (
        <>
            <Title>Гистограмма добычи</Title>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={createData(label, oil)}
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
                    <Brush dataKey="Дата" height={30} stroke="#8884d8" endIndex={20} />
                    <Bar dataKey="Нефть, т" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}
