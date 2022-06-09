import React, { useEffect, useState } from 'react';
import { Box, Toolbar, Grid } from '@mui/material';
import Table from "../components/table/TableDictelems";
import { IsOnlineProps, Dictelems } from '@renderer/types';

const DictelemsTable = (props: IsOnlineProps) => {
    const [dictelems, setDictelems] = useState([] as Dictelems[]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/dictelems/Овальное`).then(req => req.json()).then(newDictelems => setDictelems(newDictelems));
    }, [])
    return (
        <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                flexGrow: 1,
                height: '100%',
                overflow: 'auto',
            }}
        >
            <Toolbar />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Table dataDictelems={dictelems} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default DictelemsTable;