import React from "react";
import Typography from '@mui/material/Typography';
import { MerProps, InfoWellProps } from "@renderer/types";
import Title from "./Title";
import { Box } from "@mui/material";

{/* <Typography component="p" variant="subtitle1" sx={{ pt: 3 }}>

</Typography> */}

export const AccumPerfomance = (props: InfoWellProps & MerProps) => {
    const liq_cum = props.dataMer.map(item => item["liq_cum"]).at(-1)?.toFixed(2);
    const oil_cum = props.dataMer.map(item => item["oil_cum"]).at(-1)?.toFixed(2);
    const zak_cum = props.dataMer.map(item => item["zak_cum"]).at(-1)?.toFixed(2);

    return (
        <>
            <Title>Накопленные показатели</Title>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <Typography align="left" component="p" variant="subtitle1">Qн, т</Typography>
                <Typography align="right" component="p" variant="subtitle1">{oil_cum}</Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <Typography align="left" component="p" variant="subtitle1">Qж, т</Typography>
                <Typography align="right" component="p" variant="subtitle1">{liq_cum}</Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <Typography align="left" component="p" variant="subtitle1">Закачка, м3</Typography>
                <Typography align="right" component="p" variant="subtitle1">{zak_cum}</Typography>
            </Box>
        </>
    );
}

