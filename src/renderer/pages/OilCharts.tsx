import { Box, Toolbar, Grid, Paper, Skeleton } from '@mui/material';
import React from 'react';
import Container from '@mui/material/Container';
import { MerProps, InfoWellProps, isOnlineProps } from "../types";
import { InfoWell } from '@components/info/Infowell';
import { TestChart } from '@components/charts/Test';


const OilCharts = (props: MerProps & InfoWellProps & isOnlineProps) => {
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
                <Container maxWidth="lg" sx={{ mt: 2, mb: 2 }}>
                    <Grid container spacing={2}>
                        {/* Chart 1*/}
                        <Grid item xs={12} md={6}>
                            {props.isOnline ?
                                <Paper
                                    sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 400 }}>
                                    <TestChart dataMer={props.dataMer} />
                                </Paper> :
                                <Skeleton variant="rectangular" width="100%" height="100%">
                                    <Paper
                                        sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 400 }}>
                                        <TestChart dataMer={props.dataMer} />
                                    </Paper>
                                </Skeleton>
                            }
                        </Grid>
                        {/* Chart 2 */}
                        <Grid item xs={12} md={6}>
                            {props.isOnline ?
                                <Paper
                                    sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 400 }}>
                                    <InfoWell dataMer={props.dataMer} WellId={props.WellId} />
                                </Paper> :
                                <Skeleton variant="rectangular" width="100%" height="100%">
                                    <Paper
                                        sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 400 }}>
                                        <InfoWell dataMer={props.dataMer} WellId={props.WellId} />
                                    </Paper>
                                </Skeleton>
                            }
                        </Grid>
                        {/* Chart 3 */}
                        <Grid item xs={12} md={6}>
                            {props.isOnline ?
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 400 }}>
                                    <TestChart dataMer={props.dataMer} />
                                </Paper> :
                                <Skeleton variant="rectangular" width="100%" height="100%">
                                    <Paper
                                        sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 400 }}>
                                        <TestChart dataMer={props.dataMer} />
                                    </Paper>
                                </Skeleton>
                            }
                        </Grid>
                        {/* Chart 4  */}
                        <Grid item xs={12} md={6}>
                            {props.isOnline ?
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 400 }}>
                                    <TestChart dataMer={props.dataMer} />
                                </Paper> :
                                <Skeleton variant="rectangular" width="100%" height="100%">
                                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 400 }}>
                                        <TestChart dataMer={props.dataMer} />
                                    </Paper>
                                </Skeleton>
                            }
                        </Grid>
                        {/* Chart 5  */}
                        <Grid item xs={12}>
                            {props.isOnline ?
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 600 }}>
                                    <TestChart dataMer={props.dataMer} />
                                </Paper> :
                                <Skeleton variant="rectangular" width="100%" height="100%">
                                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 600 }}>
                                        <TestChart dataMer={props.dataMer} />
                                    </Paper>
                                </Skeleton>
                            }
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default OilCharts;