import React from "react";
import Typography from '@mui/material/Typography';
import { MerProps, InfoWellProps, Mer } from "@renderer/types";
import Title from "./Title";
import { Divider } from "@mui/material";

const also = <T, R>(action: (arg: T) => void, f: (arg: T) => R, value: T) => {
    action(value);
    return f(value);
}

export const InfoWell = (props: InfoWellProps & MerProps) => {
    const toDate = (mer: Mer) => {
        const date = new Date(mer["dt"] as string);
        const month = date.getMonth() + 1;
        return `${month >= 10 ? month : "0" + month.toString()}/${date.getFullYear()}`
    }

    const labels = props.dataMer.map(toDate);
    const oilMax = Math.max(...props.dataMer.map(item => item["oil"]).filter(v => Number.isFinite(v)));
    const oilMin = Math.min(...props.dataMer.map(item => item["oil"]).filter(v => Number.isFinite(v)));
    const gasMax = Math.max(...props.dataMer.map(item => item["gas"]).filter(v => Number.isFinite(v)));
    const gasMin = Math.min(...props.dataMer.map(item => item["gas"]).filter(v => Number.isFinite(v)));
    const liqMax = Math.max(...props.dataMer.map(item => item["liq"]).filter(v => Number.isFinite(v)));
    const liqMin = Math.min(...props.dataMer.map(item => item["liq"]).filter(v => Number.isFinite(v)));

    return (
        <>
            <Title>Информация о скважине</Title>
            <Typography component="p" variant="subtitle1">
                Месторождение: Овальное
            </Typography>
            <Typography component="p" variant="subtitle1">
                Номер скважены: {props.WellId}
            </Typography>
            <Typography component="p" variant="subtitle1">
                Количество данных: {labels.length ? labels.length - 1 : "-"}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography component="p" variant="subtitle1">

                Максимальное значение нефти: {Number.isFinite(oilMax) ? oilMax.toFixed() : "0"} т
            </Typography>
            <Typography component="p" variant="subtitle1">
                Минимальное значение нефти: {Number.isFinite(oilMin) ? oilMin.toFixed() : "0"} т
            </Typography>
            <Typography component="p" variant="subtitle1">
                Максимальное значение газа: {Number.isFinite(gasMax) ? gasMax.toFixed() : "0"} м3
            </Typography>
            <Typography component="p" variant="subtitle1">
                Минимальное значение газа: {Number.isFinite(gasMin) ? gasMin.toFixed() : "0"} м3
            </Typography>
            <Typography component="p" variant="subtitle1">
                Максимальное значение жидкости: {Number.isFinite(liqMax) ? liqMax.toFixed() : "0"} т
            </Typography>
            <Typography component="p" variant="subtitle1">
                Минимальное значение жидкости: {Number.isFinite(liqMin) ? liqMin.toFixed() : "0"} т
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                с {labels.find(Boolean)} по {labels[labels.length - 1]}
            </Typography>

        </>
    );
}