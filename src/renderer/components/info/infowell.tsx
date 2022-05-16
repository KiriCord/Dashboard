import React from "react";
import Typography from '@mui/material/Typography';
import { MerProps, InfoWellProps, Mer } from "@renderer/types";
import Title from "./Title";
import { Divider } from "@mui/material";

export const InfoWell = (props: InfoWellProps & MerProps) => {
    const toDate = (mer: Mer) => {
        const date = new Date(mer["dt"] as string);
        const month = date.getMonth() + 1;
        return `${month >= 10 ? month : "0" + month.toString()}/${date.getFullYear()}`
    }

    const labels = props.dataMer.map(toDate);
    const oilMax = Math.max(...props.dataMer.map(item => item["oil"]));
    const oilMin = Math.min(...props.dataMer.map(item => item["oil"]));
    const gasMax = Math.max(...props.dataMer.map(item => item["gas"]));
    const gasMin = Math.min(...props.dataMer.map(item => item["gas"]));
    const liqMax = Math.max(...props.dataMer.map(item => item["liq"]));
    const liqMin = Math.min(...props.dataMer.map(item => item["liq"]));

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
                Количество данных: {labels.length - 1 ? labels.length - 1 : "-"}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography component="p" variant="subtitle1">

                Максимальное значение нефти: {oilMax > 0 ? oilMax.toFixed() : "0"}
            </Typography>
            <Typography component="p" variant="subtitle1">
                Минимальное значение нефти: {oilMin > 0 ? oilMin.toFixed() : "0"}
            </Typography>
            <Typography component="p" variant="subtitle1">
                Максимальное значение газа: {gasMax > 0 ? gasMax.toFixed() : "0"}
            </Typography>
            <Typography component="p" variant="subtitle1">
                Минимальное значение газа: {gasMin > 0 ? gasMin.toFixed() : "0"}
            </Typography>
            <Typography component="p" variant="subtitle1">
                Максимальное значение жидкости: {liqMax > 0 ? liqMax.toFixed() : "0"}
            </Typography>
            <Typography component="p" variant="subtitle1">
                Минимальное значение жидкости: {liqMin > 0 ? liqMin.toFixed() : "0"}
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                с {labels.find(Boolean)} по {labels[labels.length - 1]}
            </Typography>

        </>
    );
}