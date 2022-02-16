import { Box, Toolbar, Grid, Paper } from '@mui/material';
import React from 'react';
import Container from '@mui/material/Container';
import { Chart } from "../components/charts/Chart";

const Dashboard = (props: any) => {
    return (
        <>
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
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={2}>
                        {/* Chart 1*/}
                        <Grid item xs={12} md={6}>
                            <Paper
                                sx={{ p: 2, display: 'flex', flexDirection: 'column', }}>
                                <Chart />
                            </Paper>
                        </Grid>
                        {/* Chart 2 */}
                        <Grid item xs={12} md={6}>
                            <Paper
                                sx={{ p: 2, display: 'flex', flexDirection: 'column', }}>
                                <Chart />
                            </Paper>
                        </Grid>
                        {/* Chart 3 */}
                        <Grid item xs={12} md={6}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                <Chart />
                            </Paper>
                        </Grid>
                        {/* Chart 4 */}
                        <Grid item xs={12} md={6}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                <Chart />
                            </Paper>
                        </Grid>
                        {/* Chart 5 */}
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                <Chart />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Dashboard;