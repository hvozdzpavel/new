import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Link} from "react-router-dom";

export const mainListItems = (
    <React.Fragment>
        <ListItemButton component={Link} to="/admin">
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Сurrency input" />
        </ListItemButton>
        <ListItemButton component={Link} to="/OperationsList">
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Operations list" />
        </ListItemButton>
        <ListItemButton component={Link} to="/">
            <ListItemIcon>
                <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Exit" />
        </ListItemButton>
    </React.Fragment>
);