import {useState, useContext} from "react";
import Link from 'next/link';
import clsx from "clsx";
import SearchBar from "material-ui-search-bar";
import { useRouter } from 'next/router'
import firebase from '../firebase'
import { AuthContext } from '../contexts/AuthContext'

const drawerWidth = 300;

import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    AppBar,
    Avatar,
    Button,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    TextField,
    Toolbar,
    Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InfoIcon from '@material-ui/icons/Info';
import GroupIcon from '@material-ui/icons/Group';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import HomeIcon from '@material-ui/icons/Home';
import AccessibleIcon from '@material-ui/icons/Accessible';
import AirlineSeatReclineExtraIcon from '@material-ui/icons/AirlineSeatReclineExtra';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import ListIcon from '@material-ui/icons/List';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';

export default function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState('')
    const [open, setOpen] = useState(false);
    const { currentUser } = useContext(AuthContext)

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleSearch = () => {
        router.push({
            pathname: '/search',
            query: { search: searchTerm }
        })
    }

    const signoutHandler = async () => {
        try {
            await firebase.auth().signOut()
            await setCurrentUser('')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <CssBaseline />
            <AppBar
                position="static"
                elevation={0}
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open
                })}
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
                        onClick={handleDrawerOpen}
                        className={clsx(open && classes.hide)}
                        >
                        <MenuIcon />
                    </IconButton>

                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                paper: classes.drawerPaper
                }}
                >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "rtl" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </div>

                <Divider />
                <List>
                    <Link href='/'>
                        <ListItem button>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Tips"} />
                        </ListItem>
                    </Link>
                    
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Inbox"} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ChatBubbleOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Live Chat"} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <Link href='/disability'>
                        <ListItem button>
                            <ListItemIcon>
                                <AccessibleIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Disability Travel"} />
                        </ListItem>
                    </Link>
                    
                    <Link href='/women'>
                        <ListItem button>
                            <ListItemIcon>
                                <GroupIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Women Travel"} />
                        </ListItem>
                    </Link>
                    
                    <Link href='/solo'>
                        <ListItem button>
                            <ListItemIcon>
                                <AirlineSeatReclineExtraIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Solo Travel"} />
                        </ListItem>
                    </Link>
                    
                    <Link href='/bike'>
                        <ListItem button>
                            <ListItemIcon>
                                <DirectionsBikeIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Bike Travel"} />
                        </ListItem>
                    </Link>

                </List>
                <Divider />
                <List>
                    <Link href='/about'>
                        <ListItem button>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary={"About"} />
                        </ListItem>
                    </Link>
                    <ListItem button>
                        <ListItemIcon>
                            <ListIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Guideline"} />
                    </ListItem>

                    <Link href='/dev'>
                        <ListItem button>
                            <ListItemIcon>
                                <SettingsApplicationsIcon />
                            </ListItemIcon>
                            <ListItemText primary={"TripTips API"} />
                        </ListItem>
                    </Link>
                </List>
                <Divider />

                <List>
                    {currentUser ?
                        <ListItem 
                            button
                            onClick={signoutHandler}
                            >
                            <ListItemIcon>
                                <Avatar
                                    alt=''
                                    src={currentUser ? currentUser?.providerData[0].photoURL : null}
                                    style={{ width: 24, height: 24 }}
                                />
                            </ListItemIcon>
                            <ListItemText>
                                Sign Out
                            </ListItemText>
                        </ListItem>
                    :
                        <Link href='/signin'>
                            <ListItem button>
                                <ListItemIcon>
                                    <Avatar
                                        alt=''
                                        src={null}
                                        style={{ width: 24, height: 24 }}
                                    />
                                </ListItemIcon>
                                <ListItemText>
                                    Sign in
                                </ListItemText>
                            </ListItem>
                        </Link>
                    }
                    
                </List>
            </Drawer>

        </>
            
    );
}

const useStyles = makeStyles((theme) => ({

    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginRight: drawerWidth
    },
    title: {
        flexGrow: 1
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        zIndex: 1000,
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-start"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginRight: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginRight: 0
    }
}));