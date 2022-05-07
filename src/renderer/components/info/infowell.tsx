import React from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { InfoWellProps } from "@renderer/types";



export const InfoWell = (props: InfoWellProps) => {
    return (
        <>
            <Typography color="primary" align='center' component="div" variant="h5" gutterBottom>
                Информация о скважине
            </Typography>
            <Typography component="p" variant="subtitle1">
                Месторождение - Овальное
            </Typography>
            <Typography component="p" variant="subtitle1">
                Номер скважены - {props.WellId}
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                01/2010 - 05/2015
            </Typography>
        </>
    );
}