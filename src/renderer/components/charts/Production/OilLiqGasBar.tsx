import Title from '@components/info/Title';
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MerProps, Mer } from "../../../types";


function createData(labels: string[], oil: Number[], gas: Number[], liq: Number[]) {
    let res = labels.map((item, index) => {
        return { 'Дата': item, 'Нефть': oil[index], 'Газ': gas[index], 'Жидкость': liq[index] }
    });
    return res;
}


export const OilLiqGasBar = (props: MerProps) => {
    const toDate = (mer: Mer) => {
        const date = new Date(mer["dt"] as string);
        const month = date.getMonth() + 1;
        return `${month >= 10 ? month : "0" + month.toString()}/${date.getFullYear()}`
    }

    const labelShorted = props.dataMer.map(toDate).filter((e, i) => (++i) % 40 === 0);
    const gasShorted = props.dataMer.map(item => item["gas"]).filter((e, j) => (++j) % 40 === 0);
    const oilShorted = props.dataMer.map(item => item["oil"]).filter((e, k) => (++k) % 40 === 0);
    const liqShorted = props.dataMer.map(item => item["liq"]).filter((e, k) => (++k) % 40 === 0);

    return (
        <>
            <Title>Добыча</Title>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={createData(labelShorted, oilShorted, gasShorted, liqShorted)}
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
                    <Bar dataKey="Нефть" fill="#8884d8" />
                    <Bar dataKey="Газ" fill="#82ca9d" />
                    <Bar dataKey="Жидкость" fill="#82A6CA" />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}
