import React from "react";
import Typography from '@mui/material/Typography';
import { ChartProps, InfoWellProps } from "@renderer/types";
import Title from "./Title";
import { Box } from "@mui/material";

export const ActualGTM = (props: InfoWellProps & ChartProps) => {

    return (
        <>
            <Title>Актуальный ГТМ</Title>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <Typography align="center" component="p" variant="subtitle1" >dQн -</Typography>
                <Typography align="center" component="p" variant="subtitle1">dQж -</Typography>
            </Box>
            <Typography align="center" color="text.primary" component="h6" variant="h6">
                LastDate
            </Typography>
        </>
    );
}