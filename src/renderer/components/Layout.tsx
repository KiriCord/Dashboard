import React from 'react';
import Routes from '../Routes';
import Mainbar from './Mainbar';

const Layout = (props: any) => {
    return (
        <>
            <Mainbar />
            <Routes />
        </>
    );
}

export default Layout;