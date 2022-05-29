import { Toolbar, IconButton, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Sidebar, SecondSidebar } from "../sidebar/Sidebar";
import Divider from '@mui/material/Divider';
import { StatusServer } from './StatusServer';

import React from 'react';
import { isOnlineProps } from '@renderer/types';
import { ToggleColorMode } from '@renderer/components/navbar/TogglingColor';

const drawerWidth: number = 240;

const AppBar = styled(MuiAppBar)(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    })
}));

const Drawer = styled(MuiDrawer)(
    ({ theme }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            })
        },
    }),
);


const Navbar = (props: isOnlineProps) => {

    return (
        <>
            <AppBar position="fixed">
                <Toolbar
                    sx={{
                        pr: '24px',
                    }}
                >
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        Dashboard

                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="inherit"
                        noWrap
                    >
                        Цветовая схема
                    </Typography>
                    <Box sx={{ marginRight: 3 }}>
                        <ToggleColorMode />
                    </Box>
                    {/* <Typography component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 8 }}>Test</Typography> */}
                    <Typography
                        variant="subtitle1"
                        color="inherit"
                        noWrap
                        sx={{ marginRight: 2 }}
                    >
                        Статус сервера
                    </Typography>
                    <StatusServer isOnline={props.isOnline} />
                </Toolbar>
            </AppBar>

            <Drawer variant="permanent">
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                    }}
                >
                </Toolbar>
                <Divider />
                <List component="nav">
                    {Sidebar}
                    <Divider sx={{ my: 1 }} />
                    {SecondSidebar}
                </List>
            </Drawer>
        </>
    );
}

export default Navbar;