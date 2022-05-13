import React from "react";
import { useTheme } from '@mui/material/styles';
import { AreaChart, Area, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, CartesianGrid } from 'recharts';
import { MerProps, Mer } from "../../../types";


function createData(labels: string[], gas: Number[]) {
    let res = labels.map((item, index) => {
        return { 'Дата': item, 'Газ': gas[index] }
    });
    return res;
}

export const TestChart = (props: MerProps) => {
    const toDate = (mer: Mer) => {
        const date = new Date(mer["dt"] as string);
        const month = date.getMonth() + 1;
        return `${month >= 10 ? month : "0" + month.toString()}/${date.getFullYear()}`
    }

    const labels = props.dataMer.map(toDate);
    const gas = props.dataMer.map(item => item["gas"]);

    const theme = useTheme();
    return (
        <>
            <ResponsiveContainer>
                <AreaChart
                    data={createData(labels, gas)}
                    margin={{
                        top: 0,
                        right: 25,
                        bottom: 0,
                        left: 0,
                    }}
                >
                    <defs>
                        <linearGradient id="colorGas" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
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
                    <Area type="monotone" dataKey="Газ" stroke="#8884d8" fillOpacity={1} fill="url(#colorGas)" />
                    <Tooltip />
                    <Legend />
                </AreaChart>
            </ResponsiveContainer>
        </>
    );
}