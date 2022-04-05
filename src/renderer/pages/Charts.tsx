import { Box, Toolbar, Grid, Paper } from '@mui/material';
import React from 'react';
import Container from '@mui/material/Container';
import { Multitype } from "../components/charts/Multitype";
import { Debits } from "../components/charts/Debits";
import { Production } from "../components/charts/Production";
import { Accumulated } from "../components/charts/Accumulated";
import Skeleton from '@mui/material/Skeleton';
import CircularProgress from '@mui/material/CircularProgress';

//
//<CircularProgress sx={{ marginLeft: '50%' }} />

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
                            <Skeleton variant="rectangular" width="100%" height="100%">
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', }}>
                                    <Debits />
                                </Paper>
                            </Skeleton>
                        </Grid>
                        {/* Chart 2 */}
                        <Grid item xs={12} md={6}>
                            <Skeleton variant="rectangular" width="100%" height="100%">
                                <Paper
                                    sx={{ p: 2, display: 'flex', flexDirection: 'column', }}>
                                    <Production />
                                </Paper>
                            </Skeleton>
                        </Grid>
                        {/* Chart 3 */}
                        <Grid item xs={12} md={6}>
                            <Skeleton variant="rectangular" width="100%" height="100%">
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Accumulated />
                                </Paper>
                            </Skeleton>
                        </Grid>
                        {/* Chart 4 */}
                        <Grid item xs={12} md={6}>
                            <Skeleton variant="rectangular" width="100%" height="100%">
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Multitype />
                                </Paper>
                            </Skeleton>
                        </Grid>
                        {/* Chart 5 */}
                        <Grid item xs={12}>
                            <Skeleton variant="rectangular" width="100%" height="100%">
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Multitype />
                                </Paper>
                            </Skeleton>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Dashboard;