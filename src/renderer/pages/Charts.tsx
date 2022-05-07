import { Box, Toolbar, Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { Production } from "../components/charts/Production";
import Skeleton from '@mui/material/Skeleton';
import { isOnlineProps } from '@renderer/types';

export function Charts(props: isOnlineProps) {
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
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', }}>
                                    <Production />
                                </Paper>
                                :
                                <Skeleton variant="rectangular" width="100%" height="100%">
                                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', }}>
                                        <Production />
                                    </Paper>
                                </Skeleton>
                            }
                        </Grid>
                        {/* Chart 2 */}
                        <Grid item xs={12} md={6}>
                            {props.isOnline ?
                                <Paper
                                    sx={{ p: 2, display: 'flex', flexDirection: 'column', }}>
                                    <Production />
                                </Paper> :
                                <Skeleton variant="rectangular" width="100%" height="100%">
                                    <Paper
                                        sx={{ p: 2, display: 'flex', flexDirection: 'column', }}>
                                        <Production />
                                    </Paper>
                                </Skeleton>
                            }
                        </Grid>
                        {/* Chart 3 */}
                        <Grid item xs={12} md={6}>
                            {props.isOnline ?
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Production />
                                </Paper> :
                                <Skeleton variant="rectangular" width="100%" height="100%">
                                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                        <Production />
                                    </Paper>
                                </Skeleton>
                            }
                        </Grid>
                        {/* Chart 4 */}
                        <Grid item xs={12} md={6}>
                            {props.isOnline ?
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Production />
                                </Paper> :
                                <Skeleton variant="rectangular" width="100%" height="100%">
                                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                        <Production />
                                    </Paper>
                                </Skeleton>
                            }
                        </Grid>
                        {/* Chart 5 */}
                        <Grid item xs={12}>
                            {props.isOnline ?
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Production />
                                </Paper> :
                                <Skeleton variant="rectangular" width="100%" height="100%">
                                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                        <Production />
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