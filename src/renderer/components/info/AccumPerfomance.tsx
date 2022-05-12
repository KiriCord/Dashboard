import React from "react";
import Typography from '@mui/material/Typography';
import { ChartProps, InfoWellProps } from "@renderer/types";
import Title from "./Title";


export const AccumPerfomance = (props: InfoWellProps & ChartProps) => {

    return (
        <>
            <Title>Накопленные показатели</Title>
            <Typography component="p" variant="subtitle1" sx={{ pt: 3 }}>
                Qн, т -
            </Typography>
            <Typography component="p" variant="subtitle1">
                Qж, т -
            </Typography>
            <Typography component="p" variant="subtitle1">
                Закачка, т -
            </Typography>
        </>
    );
}