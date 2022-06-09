import React from 'react';
import { Box, Toolbar, Grid, Paper } from '@mui/material';
import Table from "../components/table/TableMer";
import { MerProps, InfoWellProps, IsOnlineProps } from '@renderer/types';

const MerTable = (props: MerProps & InfoWellProps & IsOnlineProps) => {
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
                    <Table dataMer={props.dataMer} wellId={props.wellId} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default MerTable;