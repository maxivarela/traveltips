import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Button,
    TextField,
    Toolbar,
    Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
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
                                <Typography variant="h5" component="h1" >
                                    Travel Tips
                                </Typography>
                            </Button>
                        </Link>
                    </div>
                    <TextField 
                        id="outlined-basic" 
                        label="search" 
                        // color='primary'
                        placeholder="search for a tip"
                        variant="outlined" 
                        size="small" 
                        autoComplete='true'
                        InputProps={{
                            shrink: 'true',
                            endAdornment: <SearchIcon style={{fontSize: 16}}/>
                        }}
                        />
                    <Button>
                        <MenuIcon style={{ fontSize: 16 }}/>
                    </Button>
                        
                    
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                </Toolbar>
            </AppBar>
        </>
    );
}