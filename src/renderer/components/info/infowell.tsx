import React from "react";
import Typography from '@mui/material/Typography';
import { ChartProps, InfoWellProps, Mer } from "@renderer/types";
import Title from "./Title";


export const InfoWell = (props: InfoWellProps & ChartProps) => {
    const toDate = (mer: Mer) => {
        const date = new Date(mer["dt"] as string);
        const month = date.getMonth() + 1;
        return `${month >= 10 ? month : "0" + month.toString()}/${date.getFullYear()}`
    }

    const labels = props.data.map(toDate);

    return (
        <>
            <Title>Информация о скважине</Title>
            <Typography component="p" variant="subtitle1">
                Месторождение - Овальное
            </Typography>
            <Typography component="p" variant="subtitle1">
                Номер скважены - {props.WellId}
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                с {labels.find(Boolean)} по {labels[labels.length - 1]}
            </Typography>

        </>
    );
}