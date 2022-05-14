import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableChartIcon from '@mui/icons-material/TableChart';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import PropaneIcon from '@mui/icons-material/Propane';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import { Link } from 'react-router-dom';

export const Sidebar = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Графики
        </ListSubheader>
        <ListItemButton component={Link} to="/">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Общее" />
        </ListItemButton>
        <ListItemButton component={Link} to="/charts/oil">
            <ListItemIcon>
                <OilBarrelIcon />
            </ListItemIcon>
            <ListItemText primary="Нефть" />
        </ListItemButton>
        <ListItemButton component={Link} to="/charts/gas">
            <ListItemIcon>
                <PropaneIcon />
            </ListItemIcon>
            <ListItemText primary="Газ" />
        </ListItemButton>
        <ListItemButton component={Link} to="/charts/liq">
            <ListItemIcon>
                <LocalDrinkIcon />
            </ListItemIcon>
            <ListItemText primary="Жидкость" />
        </ListItemButton>
    </React.Fragment>
);

export const SecondSidebar = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Таблицы
        </ListSubheader>
        <ListItemButton component={Link} to="/table/mer">
            <ListItemIcon>
                <TableChartIcon />
            </ListItemIcon>
            <ListItemText primary="МЭР" />
        </ListItemButton>
        <ListItemButton component={Link} to="/table/dictelems">
            <ListItemIcon>
                <TableChartIcon />
            </ListItemIcon>
            <ListItemText primary="Dictelems" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <TableChartIcon />
            </ListItemIcon>
            <ListItemText primary="Таблица 3" />
        </ListItemButton>
    </React.Fragment>
);


