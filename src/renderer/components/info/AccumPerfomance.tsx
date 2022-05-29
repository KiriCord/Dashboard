import React from "react";
import Typography from '@mui/material/Typography';
import { MerSumCumProps, InfoWellProps } from "@renderer/types";
import Title from "./Title";
import { Box } from "@mui/material";

{/* <Typography component="p" variant="subtitle1" sx={{ pt: 3 }}>

</Typography> */}

export const AccumPerfomance = (props: InfoWellProps & MerSumCumProps) => {
    const liq = props.dataMerSumCum.map(item => item["liq"]).at(-1)?.toFixed(2);
    const oil = props.dataMerSumCum.map(item => item["oil"]).at(-1)?.toFixed(2);
    const zak = props.dataMerSumCum.map(item => item["zak"]).at(-1)?.toFixed(2);

    return (
        <>
            <Title>Накопленные показатели</Title>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <Typography align="left" component="p" variant="subtitle1">Qн, т</Typography>
                <Typography align="right" component="p" variant="subtitle1">{oil}</Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <Typography align="left" component="p" variant="subtitle1">Qж, м3</Typography>
                <Typography align="right" component="p" variant="subtitle1">{liq}</Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <Typography align="left" component="p" variant="subtitle1">Закачка, м3</Typography>
                <Typography align="right" component="p" variant="subtitle1">{zak}</Typography>
            </Box>
        </>
    );
}