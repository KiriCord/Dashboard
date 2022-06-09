import React from "react";
import Typography from '@mui/material/Typography';
import { InfoWellProps, MerProps, TroilProps } from "@renderer/types";
import Title from "./Title";
import { Box } from "@mui/material";

export const CurrentPerfomance = (props: MerProps & TroilProps) => {

    const qn = props.dataMer.map(item => item["oil"]).at(-1)?.toFixed();
    const ql = props.dataMer.map(item => item["liq"]).at(-1)?.toFixed();
    const obvod = props.dataMer.map(item => item["obvod"]).at(-1)?.toFixed();

    const qliquid = props.dataTroil.map(item => item["qliquid"]).at(-1)?.toFixed();
    const qnefti = props.dataTroil.map(item => item["qnefti"]).at(-1)?.toFixed();
    const obvodnen = props.dataTroil.map(item => item["obvodnen"]).at(-1)?.toFixed();

    return (
        <>
            <Title>Текущие показатели</Title>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <Typography align="center" component="p" variant="subtitle1" color="text.secondary"> </Typography>
                <Typography align="center" component="p" variant="subtitle1" color="text.secondary">МЭР</Typography>
                <Typography align="center" component="p" variant="subtitle1" color="text.secondary">ТР</Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <Typography align="center" component="p" variant="subtitle1" color="text.secondary">Qн, т/сут</Typography>
                <Typography align="center" component="p" variant="subtitle1">{qn ? qn : "-"}</Typography>
                <Typography align="center" component="p" variant="subtitle1">{qnefti ? qnefti : "-"}</Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <Typography align="center" component="p" variant="subtitle1" color="text.secondary">Qж, т/сут</Typography>
                <Typography align="center" component="p" variant="subtitle1">{ql ? ql : "-"}</Typography>
                <Typography align="center" component="p" variant="subtitle1">{qliquid ? qliquid : "-"}</Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <Typography align="center" component="p" variant="subtitle1" color="text.secondary">Обв, %</Typography>
                <Typography align="center" component="p" variant="subtitle1">{obvod ? obvod : "-"}</Typography>
                <Typography align="center" component="p" variant="subtitle1">{obvodnen ? obvodnen : "-"}</Typography>
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