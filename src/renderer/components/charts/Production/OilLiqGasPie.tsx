import React from "react";
import { useTheme } from '@mui/material/styles';
import { PieChart, Pie, Legend, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ChartProps, Mer } from "../../../types";
import Title from "@components/info/Title";

const COLORS = ['#82ca9d', '#8884d8', '#82A6CA'];

export const OilLiqGasPie = (props: ChartProps) => {
    const gas = props.data.map(item => item["gas"]).reduce((a, b) => a + b, 0);
    const oil = props.data.map(item => item["oil"]).reduce((a, b) => a + b, 0);
    const liq = props.data.map(item => item["liq"]).reduce((a, b) => a + b, 0);
    const data = [
        { name: 'Газ', value: gas },
        { name: 'Нефть', value: oil },
        { name: 'Жидкость', value: liq }
    ]

    return (
        <>
            <Title>Общая добыча</Title>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
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