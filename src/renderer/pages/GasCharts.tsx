import { Box, Toolbar, Grid, Paper, Skeleton } from '@mui/material';
import React from 'react';
import Container from '@mui/material/Container';
import { MerProps, InfoWellProps, IsOnlineProps } from "../types";
import { GasArea } from '@components/charts/Production/GasArea';
import { InfoWell } from '@components/info/Infowell';
import { GasBar } from '@components/charts/Production/GasBar';

const GasCharts = (props: MerProps & InfoWellProps & IsOnlineProps) => {
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
                                    {/* <Chart data={props.data} /> */}
                                    <GasArea dataMer={props.dataMer} />
                                </Paper> :
                                <Skeleton variant="rectangular" width="100%" height="100%">
                                    <Paper
                                        sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 400 }}>
                                        {/* <Chart data={props.data} /> */}
                                        <GasArea dataMer={props.dataMer} />
                                    </Paper>
                                </Skeleton>
                            }
                        </Grid>
                        {/* Chart 2 */}
                        <Grid item xs={12} md={6}>
                            {props.isOnline ?
                                <Paper
                                    sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 400 }}>
                                    {/* <div style={{ height: "100%", width: "100%" }}> */}
                                    <InfoWell dataMer={props.dataMer} wellId={props.wellId} oilfield={props.oilfield} />
                                    {/* </div> */}
                                </Paper> :
                                <Skeleton variant="rectangular" width="100%" height="100%">
                                    <Paper
                                        sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 400 }}>
                                        <InfoWell dataMer={props.dataMer} wellId={props.wellId} oilfield={props.oilfield} />
                                    </Paper>
                                </Skeleton>
                            }
                        </Grid>
                        {/* Chart 2  */}
                        <Grid item xs={12}>
                            {props.isOnline ?
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 600 }}>
                                    <GasBar dataMer={props.dataMer} />
                                </Paper> :
                                <Skeleton variant="rectangular" width="100%" height="100%">
                                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 600 }}>
                                        <GasBar dataMer={props.dataMer} />
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

export default GasCharts;