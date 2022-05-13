import React from "react";
import Typography from '@mui/material/Typography';
import { InfoWellProps, MerSumCumProps } from "@renderer/types";
import Title from "./Title";
import { Box } from "@mui/material";

export const CurrentPerfomance = (props: InfoWellProps & MerSumCumProps) => {

    //таблица trinj
    //поля FactPriem
    return (
        <>
            <Title>Текущие показатели</Title>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <Typography align="center" component="p" variant="subtitle1" color="text.secondary">~</Typography>
                <Typography align="right" component="p" variant="subtitle1" color="text.secondary">МЭР</Typography>
                <Typography align="center" component="p" variant="subtitle1" color="text.secondary">ТР</Typography>
            </Box>
            <Typography component="p" variant="subtitle1">
                Qн, т/сут -
            </Typography>
            <Typography component="p" variant="subtitle1">
                Qж, т/сут -
            </Typography>
            <Typography component="p" variant="subtitle1">
                Обв, % -
            </Typography>
        </>
    );
}