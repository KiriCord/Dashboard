import React from "react";
import Typography from '@mui/material/Typography';
import { InfoWellProps, MerCumProps, TroilProps } from "@renderer/types";
import Title from "./Title";
import { Box } from "@mui/material";

export const CurrentPerfomance = (props: InfoWellProps & MerCumProps & TroilProps) => {

    const qn = props.dataMerCum.map(item => item["qn"]);
    const ql = props.dataMerCum.map(item => item["ql"]).at(-1)?.toFixed(2);
    const obvod = props.dataMerCum.map(item => item["obvod"]).at(-1)?.toFixed(2);

    const qliquid = props.dataTroil.map(item => item["qliquid"]).at(-1)?.toFixed(2);
    const qnefti = props.dataTroil.map(item => item["qnefti"]).at(-1)?.toFixed(2);
    const obvodnen = props.dataTroil.map(item => item["obvodnen"]).at(-1)?.toFixed(2);

    return (
        <>
            <Title>Текущие показатели</Title>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <Typography align="center" component="p" variant="subtitle1" color="text.secondary"> </Typography>
                <Typography align="right" component="p" variant="subtitle1" color="text.secondary">МЭР</Typography>
                <Typography align="center" component="p" variant="subtitle1" color="text.secondary">ТР</Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <Typography align="center" component="p" variant="subtitle1" color="text.secondary">Qн, т/сут</Typography>
                <Typography align="right" component="p" variant="subtitle1" color="text.secondary">{qn}</Typography>
                <Typography align="center" component="p" variant="subtitle1" color="text.secondary">{qnefti}</Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <Typography align="center" component="p" variant="subtitle1" color="text.secondary">Qж, т/сут</Typography>
                <Typography align="right" component="p" variant="subtitle1" color="text.secondary">{ql}</Typography>
                <Typography align="center" component="p" variant="subtitle1" color="text.secondary">{qliquid}</Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <Typography align="center" component="p" variant="subtitle1" color="text.secondary">Обв, %</Typography>
                <Typography align="right" component="p" variant="subtitle1" color="text.secondary">{obvod}</Typography>
                <Typography align="center" component="p" variant="subtitle1" color="text.secondary">{obvodnen}</Typography>
            </Box>
            {/* <Typography component="p" variant="subtitle1">
                Qн, т/сут -
            </Typography>
            <Typography component="p" variant="subtitle1">
                Qж, т/сут -
            </Typography>
            <Typography component="p" variant="subtitle1">
                Обв, % -
            </Typography> */}
        </>
    );
}