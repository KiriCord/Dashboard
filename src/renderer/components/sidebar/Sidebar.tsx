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
import { Link } from 'react-router-dom';

//component="a" href='/main_window'
//component="a" href='/page'

export const Sidebar = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Графики
        </ListSubheader>
        <Link to="/" style={{ textDecoration: 'none', color: '#202020' }}>
            <ListItemButton >
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Общее" />
            </ListItemButton>
        </Link>
        <Link to="/debit" style={{ textDecoration: 'none', color: '#202020' }}>
            <ListItemButton >
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Нефть" />
            </ListItemButton>
        </Link>
        <Link to="/test" style={{ textDecoration: 'none', color: '#202020' }}>
            <ListItemButton>
                <ListItemIcon>
                    <AssessmentIcon />
                </ListItemIcon>
                <ListItemText primary="Газ" />
            </ListItemButton>
        </Link>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Жидкость" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Меню 2" />
        </ListItemButton>
    </React.Fragment>
);

export const SecondSidebar = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Таблицы
        </ListSubheader>
        <Link to="/table" style={{ textDecoration: 'none', color: '#202020' }}>
            <ListItemButton>
                <ListItemIcon>
                    <TableChartIcon />
                </ListItemIcon>
                <ListItemText primary="МЭР" />
            </ListItemButton>
        </Link>
        <ListItemButton>
            <ListItemIcon>
                <TableChartIcon />
            </ListItemIcon>
            <ListItemText primary="Таблица 2" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <TableChartIcon />
            </ListItemIcon>
            <ListItemText primary="Таблица 3" />
        </ListItemButton>
    </React.Fragment>
);


