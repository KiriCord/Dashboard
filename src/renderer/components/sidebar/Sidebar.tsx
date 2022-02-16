import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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

export const Sidebar = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Дашборд
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Графики" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <TableChartIcon />
            </ListItemIcon>
            <ListItemText primary="Таблицы" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="Оценка" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Меню 1" />
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
            Пункт 1
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Меню 1" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Меню 2" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Меню 3" />
        </ListItemButton>
    </React.Fragment>
);


