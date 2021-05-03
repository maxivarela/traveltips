import {useState} from 'react'

import {
    Menu,
    Tooltip,
    Button,
} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export default function SimpleMenu (props) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Tooltip title='More Actions'>
                <Button >
                    <MoreHorizIcon
                        color='primary'
                        onClick={handleClick}
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        style={{ cursor: 'pointer', }}
                    />
                </Button>

            </Tooltip>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {props.children}
            </Menu>
        </div>
    );
}
