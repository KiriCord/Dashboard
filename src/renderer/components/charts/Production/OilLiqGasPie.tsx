import React from "react";
import { useTheme } from '@mui/material/styles';
import { PieChart, Pie, Legend, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { MerProps, Mer } from "../../../types";
import Title from "@components/info/Title";
import { Box, Typography } from "@mui/material";

const COLORS = ['#82ca9d', '#8884d8', '#82A6CA'];

export const OilLiqGasPie = (props: MerProps) => {
    const gas = props.dataMer.map(item => Number.parseInt(item["gas"].toFixed())).reduce((a, b) => a + b, 0);
    const oil = props.dataMer.map(item => Number.parseInt(item["oil"].toFixed())).reduce((a, b) => a + b, 0);
    const liq = props.dataMer.map(item => Number.parseInt(item["liq"].toFixed())).reduce((a, b) => a + b, 0);
    const data = [
        { name: 'Газ', value: gas },
        { name: 'Нефть', value: oil },
        { name: 'Жидкость', value: liq }
    ]

    const theme = useTheme();

    return (
        <>
            <Title>Общая добыча</Title>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        isAnimationActive={true}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </>
    );
}