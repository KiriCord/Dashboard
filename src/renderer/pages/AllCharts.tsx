import { Box, Toolbar, Grid, Paper } from '@mui/material';
import React from 'react';
import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton';
import { MerProps, isOnlineProps, InfoWellProps, TroilProps } from '@renderer/types';
import { OilLiqGasArea } from '@components/charts/Production/OilLiqGasArea';
import { InfoWell } from '@components/info/Infowell';
import { OilLiqGasBar } from '@components/charts/Production/OilLiqGasBar';
import { OilLiqGasBrushBar } from '@components/charts/Production/OilLiqGasBrushBar';
import { OilLiqGasPie } from '@components/charts/Production/OilLiqGasPie';
import { CurrentPerfomance } from '@components/info/CurrentPerfomance';
import { AccumPerfomance } from '@components/info/AccumPerfomance';
import { ActualGTM } from '@components/info/ActualGTM';

export function AllCharts(props: MerProps & InfoWellProps & isOnlineProps & TroilProps) {
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
                        {/* Item 1*/}
                        <Grid item xs={12} md={6}>
                            {props.isOnline ?
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 400 }}>
                                    <OilLiqGasPie dataMer={props.dataMer} />
                                </Paper>
                                :
                                <Skeleton variant="rectangular" width="100%" height="100%">
                                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 400 }}>
                                        <OilLiqGasPie dataMer={props.dataMer} />
                                    </Paper>
                                </Skeleton>
                            }
                        </Grid>
                        {/* Item 2 */}
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
                        {/* Item 3 */}
                        <Grid item xs={12} lg={4} md={4}>
                            {props.isOnline ?
                                <Paper
                                    sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 170 }}>
                                    <CurrentPerfomance WellId={props.WellId} dataTroil={props.dataTroil} dataMer={props.dataMer} />
                                </Paper>
                                :
                                <Skeleton variant="rectangular" width="100%" height="100%">
                                    <Paper
                                        sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 170 }}>
                                        <CurrentPerfomance WellId={props.WellId} dataTroil={props.dataTroil} dataMer={props.dataMer} />
                                    </Paper>
                                </Skeleton>
                            }
                        </Grid>
                        {/* Item 4 */}
                        <Grid item xs={12} lg={4} md={4}>
                            {props.isOnline ?
                                <Paper
                                    sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 170 }}>
                                    <AccumPerfomance dataMer={props.dataMer} WellId={props.WellId} />
                                </Paper>
                                :
                                <Skeleton variant="rectangular" width="100%" height="100%">
                                    <Paper
                                        sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 170 }}>
                                        <AccumPerfomance dataMer={props.dataMer} WellId={props.WellId} />
                                    </Paper>
                                </Skeleton>
                            }
                        </Grid>
                        {/* Item 5 */}
                        <Grid item xs={12} lg={4} md={4}>
                            {props.isOnline ?
                                <Paper
                                    sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 170 }}>
                                    <ActualGTM dataMer={props.dataMer} WellId={props.WellId} />
                                </Paper>
                                :
                                <Skeleton variant="rectangular" width="100%" height="100%">
                                    <Paper
                                        sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 170 }}>
                                        <ActualGTM dataMer={props.dataMer} WellId={props.WellId} />
                                    </Paper>
                                </Skeleton>
                            }
                        </Grid>
                        {/* Item 6 */}
                        <Grid item xs={12}>
                            {props.isOnline ?
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 600 }}>
                                    <OilLiqGasBrushBar dataMer={props.dataMer} />
                                </Paper> :
                                <Skeleton variant="rectangular" width="100%" height="100%">
                                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 600 }}>
                                        <OilLiqGasBrushBar dataMer={props.dataMer} />
                                    </Paper>
                                </Skeleton>
                            }
                        </Grid>
                        {/* Chart 7 */}
                        <Grid item xs={12}>
                            {props.isOnline ?
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 600 }}>
                                    <OilLiqGasArea dataMer={props.dataMer} />
                                </Paper> :
                                <Skeleton variant="rectangular" width="100%" height="100%">
                                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 600 }}>
                                        <OilLiqGasArea dataMer={props.dataMer} />
                                    </Paper>
                                </Skeleton>
                            }
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};