import React from 'react';
import { Box, Toolbar, Grid, Paper } from '@mui/material';
import Table from "../components/table/table";

const Tables = () => {
    return (
        <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
        >
            <Toolbar />
            <Table />
        </Box>
    );
}

export default Tables;