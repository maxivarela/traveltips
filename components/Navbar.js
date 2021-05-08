import {useState, useContext} from "react";
import Link from 'next/link';
import clsx from "clsx";
import SearchBar from "material-ui-search-bar";
import { useRouter } from 'next/router'

import { AuthContext } from '../lib/AuthContext'
import Drawer from '../components/Drawer'
import MenuList from '../components/MenuList'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    AppBar,
    Button,
    CssBaseline,
    IconButton,
    MenuItem,
    Select,
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
    const {locale, locales} = router
    const [searchTerm, setSearchTerm] = useState('')
    const [open, setOpen] = useState(false);
    const { currentUser, setCurrentUser} = useContext(AuthContext)

    const language = ['English', 'العربية', 'Deutsch', 'Español', 'Français', 'हिन्दी', '日本語', 'Português', 'Русский', '中文（简体)']

    const changeLanguage = (e) => {
        const locale = e.target.value
        router.push(router.pathname, router.asPath, { locale })
    };

    const handleSearch = () => {
        router.push({
            pathname: '/searchresults',
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
                        style={{height: 36, width: 200}}
                    />
                    <Select
                        onChange={changeLanguage}
                        defaultValue={locale}
                        className={classes.formLang}
                        >
                        {locales.map((loc, index) => (
                            <MenuItem key={index} value={loc} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 180, wrap: 'no-wrap', }} >
                                <div> {loc.toUpperCase()}</div><div>{language[index]}</div>
                            </MenuItem>
                        ))}
                    </Select>
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
                <MenuList toggleDrawer={toggleDrawer} state={state} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            </Drawer>
        </>
            
    );
}

const useStyles = makeStyles((theme) => ({
    hide: {
        display: "none"
    },
    formLang: {
        fontSize: 12,
        fontWeight: 500,
        color: '#26978A',
        marginLeft: 20, 
        marginRight: 0,
        width: 90, 
        height: 36, 
    }
}));