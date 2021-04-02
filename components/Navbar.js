import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Button,
    IconButton,
    Toolbar,
    Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({

}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <>
            <AppBar position="static" elevation={0}>
                <Toolbar style={{ backgroundColor: '#111', }}>

                    <div style={{ flexGrow: 1,}}>
                        <Link href='/'>
                            <Button color="inherit" >
                                <Typography variant="h6" component="h1" >
                                    Travel Tips
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