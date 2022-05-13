import React from "react";
import Typography from '@mui/material/Typography';
import { MerSumCumProps, InfoWellProps } from "@renderer/types";
import Title from "./Title";
import { Box } from "@mui/material";

{/* <Typography component="p" variant="subtitle1" sx={{ pt: 3 }}>

</Typography> */}

export const AccumPerfomance = (props: InfoWellProps & MerSumCumProps) => {

    const qn = props.dataMerSumCum.map(item => item["qn"]).reduce((a, b) => a + b, 0).toFixed(2);
    const ql = props.dataMerSumCum.map(item => item["ql"]).reduce((a, b) => a + b, 0).toFixed(2);
    const zak = props.dataMerSumCum.map(item => item["zak"]).reduce((a, b) => a + b, 0).toFixed(2);

    return (
        <>
            <Title>Накопленные показатели</Title>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <Typography align="left" component="p" variant="subtitle1">Qн, т</Typography>
                <Typography align="right" component="p" variant="subtitle1">{qn}</Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <Typography align="left" component="p" variant="subtitle1">Qж, т</Typography>
                <Typography align="right" component="p" variant="subtitle1">{ql}</Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <Typography align="left" component="p" variant="subtitle1">Закачка, т</Typography>
                <Typography align="right" component="p" variant="subtitle1">{zak}</Typography>
            </Box>
        </>
    );
}