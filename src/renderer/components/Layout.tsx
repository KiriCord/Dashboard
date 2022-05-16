import React from 'react';
import Rout from '../Rout';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';


const Layout = () => {

    const mdTheme = createTheme({
        palette: {
            mode: 'dark',
        }
    });

    return (
        <>
            <ThemeProvider theme={mdTheme}>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <Rout />
                </Box>
            </ThemeProvider >
        </>
    );
}

export default Layout;