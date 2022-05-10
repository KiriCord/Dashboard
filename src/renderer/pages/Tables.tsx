import React from 'react';
import { Box, Toolbar, Grid, Paper } from '@mui/material';
import Table from "../components/table/table";
import { ChartProps, InfoWellProps, isOnlineProps } from '@renderer/types';

const Tables = (props: ChartProps & InfoWellProps & isOnlineProps) => {
    return (
        <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                flexGrow: 1,
                height: '100%',
                overflow: 'auto',
            }}
        >
            <Toolbar />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Table data={props.data} WellId={props.WellId} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Tables;