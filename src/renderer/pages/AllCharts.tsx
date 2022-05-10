import { Box, Toolbar, Grid, Paper } from '@mui/material';
import React from 'react';
import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton';
import { ChartProps, isOnlineProps, InfoWellProps } from '@renderer/types';
import { OilLiqGasArea } from '@components/charts/Production/OilLiqGasArea';
import { InfoWell } from '@components/info/Infowell';
import { OilLiqGasBar } from '@components/charts/Production/OilLiqGasBar';
import { OilLiqGasBrushBar } from '@components/charts/Production/OilLiqGasBrushBar';
import { OilLiqGasPie } from '@components/charts/Production/OilLiqGasPie';

export function AllCharts(props: ChartProps & InfoWellProps & isOnlineProps) {
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
                            {props.isOnline ?
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 400 }}>
                                    <OilLiqGasPie data={props.data} />
                                </Paper>
                                :
                                <Skeleton variant="rectangular" width="100%" height="100%">
                                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 400 }}>
                                        <OilLiqGasPie data={props.data} />
                                    </Paper>
                                </Skeleton>
                            }
                        </Grid>
                        {/* Chart 2 */}
                        <Grid item xs={12} md={6}>
                            {props.isOnline ?
                                <Paper
                                    sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 400 }}>
                                    <InfoWell data={props.data} WellId={props.WellId} />
                                </Paper> :
                                <Skeleton variant="rectangular" width="100%" height="100%">
                                    <Paper
                                        sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 400 }}>
                                        <InfoWell data={props.data} WellId={props.WellId} />
                                    </Paper>
                                </Skeleton>
                            }
                        </Grid>
                        {/* Chart 3 */}
                        <Grid item xs={12}>
                            {props.isOnline ?
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 600 }}>
                                    <OilLiqGasBrushBar data={props.data} />
                                </Paper> :
                                <Skeleton variant="rectangular" width="100%" height="100%">
                                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 600 }}>
                                        <OilLiqGasBrushBar data={props.data} />
                                    </Paper>
                                </Skeleton>
                            }
                        </Grid>
                        {/* Chart 4 */}
                        <Grid item xs={12}>
                            {props.isOnline ?
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 600 }}>
                                    <OilLiqGasArea data={props.data} />
                                </Paper> :
                                <Skeleton variant="rectangular" width="100%" height="100%">
                                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 600 }}>
                                        <OilLiqGasArea data={props.data} />
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