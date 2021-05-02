import Link from 'next/link';
import firebase from '../lib/firebase'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Avatar,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import InfoIcon from '@material-ui/icons/Info';
import GroupIcon from '@material-ui/icons/Group';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import HomeIcon from '@material-ui/icons/Home';
import AccessibleIcon from '@material-ui/icons/Accessible';
import AirlineSeatReclineExtraIcon from '@material-ui/icons/AirlineSeatReclineExtra';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import ListIcon from '@material-ui/icons/List';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';

export default function MenuList({ currentUser, state, toggleDrawer}) {
    const classes = useStyles()
    const theme = useTheme();

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
            <div className={classes.drawerHeader} >
                <IconButton onClick={toggleDrawer(!state)}>
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
                        <ListItemText primary={"Female Travel"} />
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
            
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        width: 300,
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-start"
    },
}));