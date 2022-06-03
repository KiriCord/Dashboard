import React from "react";
import { useTheme } from '@mui/material/styles';
import { AreaChart, Area, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, CartesianGrid } from 'recharts';
import { MerProps, Mer } from "../../../types";
import { Box, Typography } from "@mui/material";
import Title from "@components/info/Title";


function createData(labels: string[], liq: Number[]) {
    let res = labels.map((item, index) => {
        return { 'Дата': item, 'Жидкость, т': liq[index] }
    });
    return res;
}

export const LiqArea = (props: MerProps) => {
    const toDate = (mer: Mer) => {
        const date = new Date(mer["dt"] as string);
        const month = date.getMonth() + 1;
        return `${month >= 10 ? month : "0" + month.toString()}/${date.getFullYear()}`
    }

    const labels = props.dataMer.map(toDate);
    const liq = props.dataMer.map(item => Number.parseInt(item["liq"].toFixed()));

    const theme = useTheme();

    return (
        <>
            <Title>График добычи</Title>
            <ResponsiveContainer>
                <AreaChart
                    data={createData(labels, liq)}
                    margin={{
                        top: 0,
                        right: 25,
                        bottom: 0,
                        left: 0,
                    }}
                >
                    <defs>
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
                    <Area type="monotone" dataKey="Жидкость, т" stroke="#82A6CA" fillOpacity={1} fill="url(#colorLiq)" />
                    <Tooltip />
                    <Legend />
                </AreaChart>
            </ResponsiveContainer>
        </>
    );
}