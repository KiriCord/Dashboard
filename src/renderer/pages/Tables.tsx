import React from 'react';
import { Box, Toolbar, Grid, Paper } from '@mui/material';
import Table from "../components/table/table";
import { Debits } from "../components/charts/Debits";

const Tables = (props: any) => {
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

/*
ПОД TABLE
<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <Table />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

*/