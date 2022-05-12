import * as React from 'react';
import Typography from '@mui/material/Typography';

interface TitleProps {
    children?: React.ReactNode;
}

export default function Title(props: TitleProps) {
    return (
        <Typography align='center' component="div" variant="overline" color="primary" gutterBottom>
            {props.children}
        </Typography>
    );
}