import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Button,
    IconButton,
    TextField,
    Toolbar,
    Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

export default function Navbar() {
    const classes = useStyles();

    return (
        <>
            <AppBar position="static" elevation={0}>
                <Toolbar style={{ backgroundColor: '#111', }}>

                    <div style={{ flexGrow: 1,}}>
                        <Link href='/'>
                            <Button color="inherit" >
                                <Typography variant="h5" component="h1" >
                                    <span style={{ color: '#009688' }}>Trip</span>Tips
                                </Typography>
                            </Button>
                        </Link>
                    </div>
                    
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    );
}

const useStyles = makeStyles((theme) => ({

}));