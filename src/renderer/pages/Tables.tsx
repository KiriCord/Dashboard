import React from 'react';
import { Box, Toolbar, Grid, Paper } from '@mui/material';
import Table from "../components/table/table";
import { MerProps, InfoWellProps, isOnlineProps } from '@renderer/types';

const Tables = (props: MerProps & InfoWellProps & isOnlineProps) => {
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
                    <Table dataMer={props.dataMer} WellId={props.WellId} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Tables;