import React, { useEffect, useMemo, useState } from "react";
import { useTheme } from '@mui/material/styles';
import { PieChart, Pie, Legend, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { MerProps, Mer } from "../../../types";
import Title from "@components/info/Title";
import { Box, Typography } from "@mui/material";

const LIQ_COLOR = '#99CC99'
const OIL_COLOR = '#2f7cc9'
//const COLORS = ['#82ca9d', '#8884d8', '#82A6CA'];
//const COLORS = ['#CCFFCC', '#8ec6fe', '#82A6CA'];
const COLORS = [LIQ_COLOR, OIL_COLOR]


type dataGOL = {
    name: string;
    value: number;
}

export const OilLiqGasPie = (props: MerProps) => {
    const [data, setData] = useState<dataGOL[]>([]);


    useEffect(() => {
        // const gas = props.dataMer.map(item => Number.parseInt(item["gas"].toFixed())).reduce((a, b) => a + b, 0);
        const oil = props.dataMer.map(item => Number.parseInt(item["oil"].toFixed())).reduce((a, b) => a + b, 0);
        const liq = props.dataMer.map(item => Number.parseInt(item["liq"].toFixed())).reduce((a, b) => a + b, 0);

        setData([
            // { name: 'Газ, м3', value: gas },
            { name: 'Нефть, т', value: oil },
            { name: 'Жидкость, т', value: liq }
        ]);
    }, [props.dataMer]);


    const theme = useTheme();

    const chartData = useMemo(() => data.slice(), [props.dataMer, data]);
    return (
        <>
            <Title>Общая добыча</Title>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={115}
                        fill="#000000"
                        dataKey="value"
                        label
                    >
                        {chartData.map((entry, index) => (
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