import React from 'react';
import Rout from '../Rout';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';


const Layout = (props: any) => {

    const mdTheme = createTheme({
        palette: {
            mode: 'light',
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