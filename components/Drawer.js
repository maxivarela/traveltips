import React, { useState } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
} from '@material-ui/core';

const Drawer = () => {
    const classes = useStyles();
    const [state, setState] = useState(false)

    const toggleDrawer = () => (item) => {
        if (item && item.type === 'keydown' && (item.key === 'Tab' || item.key === 'Shift')) {
            return;
        }
        setState(!state);
    };

    return (
        <div>
            <SwipeableDrawer
                anchor={'right'}
                open={state}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                >
                <div className='drawer'>
                    
                </div>
            </SwipeableDrawer>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    
}));

export default Drawer