import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';

export const mainListItems = (
    <React.Fragment>
        <ListItemButton onClick={() => window.location.assign(" admin")}>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Currency form" />
        </ListItemButton>
        <ListItemButton onClick={() => window.location.assign(" OperationsList")}>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Operations list" />
        </ListItemButton>

    </React.Fragment>
);