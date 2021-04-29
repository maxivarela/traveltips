import {useState, useContext} from "react";
import Link from 'next/link';
import clsx from "clsx";
import SearchBar from "material-ui-search-bar";
import { useRouter } from 'next/router'

import { AuthContext } from '../contexts/AuthContext'
import Drawer from '../components/Drawer'
import MenuList from '../components/MenuList'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    AppBar,
    Button,
    CssBaseline,
    IconButton,
    Toolbar,
    Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 300;

export default function Navbar() {
    const classes = useStyles();
    const [state, setState] = useState(false);
    const theme = useTheme();
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState('')
    const [open, setOpen] = useState(false);
    const { currentUser } = useContext(AuthContext)

    const handleSearch = () => {
        router.push({
            pathname: '/search',
            query: { search: searchTerm }
        })
    }

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState(open);
    };

    const list = () => {
        return (
            <>
            
            </>
        )
    }

    return (
        <>
            <CssBaseline />
            <AppBar
                position="static"
                elevation={0}
                >
                <Toolbar 
                    style={{ backgroundColor: '#111', }}
                    >
                    <div style={{ flexGrow: 1, }}>
                        <Link href='/'>
                            <Button color="inherit" >
                                <Typography variant="h5" component="h1">
                                    <span 
                                        style={{ color: '#009688' }}
                                        >
                                        Trip
                                        </span>
                                        Tips
                            </Typography>
                            </Button>
                        </Link>
                    </div>

                    <SearchBar
                        value={searchTerm}
                        onChange={(item) => setSearchTerm(item.toLowerCase())}
                        onRequestSearch={handleSearch}
                        style={{height: 36,}}
                    />
                    
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={toggleDrawer(true)}
                        className={clsx(open && classes.hide)}
                        >
                        <MenuIcon />
                    </IconButton>
                    
                </Toolbar>
            </AppBar>
            <Drawer toggleDrawer={toggleDrawer} state={state}>
                <MenuList toggleDrawer={toggleDrawer} state={state} currentUser={currentUser}/>
            </Drawer>
        </>
            
    );
}

const useStyles = makeStyles((theme) => ({
    hide: {
        display: "none"
    },
}));