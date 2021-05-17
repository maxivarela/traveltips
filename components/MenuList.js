import Link from 'next/link';
import firebase from '../lib/firebase'
import {useRouter} from 'next/router'

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
import CloudIcon from '@material-ui/icons/Cloud';
import FeedbackIcon from '@material-ui/icons/Feedback';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import AndroidIcon from '@material-ui/icons/Android';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function MenuList({ currentUser, setCurrentUser, state, toggleDrawer}) {
    const classes = useStyles()
    const theme = useTheme();
    const router = useRouter()
    
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
                    <a>
                        <ListItem button>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Tips"} />
                        </ListItem>
                    </a>
                    
                </Link>
                
                {currentUser && 
                    <ListItem 
                        button 
                        onClick={() =>
                        router.push({
                            pathname: '/profile',
                            query: { user: currentUser?.uid }
                        })}>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Profile"} />
                    </ListItem>
                }
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
                    <a>
                        <ListItem button>
                            <ListItemIcon>
                                <AccessibleIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Disability Travel"} />
                        </ListItem>
                    </a>
                </Link>

                <Link href='/female'>
                    <a>
                        <ListItem button>
                            <ListItemIcon>
                                <GroupIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Female Travel"} />
                        </ListItem>
                    </a>
                </Link>

                <Link href='/solo'>
                    <a>
                        <ListItem button>
                            <ListItemIcon>
                                <AirlineSeatReclineExtraIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Solo Travel"} />
                        </ListItem>
                    </a>
                </Link>

                <Link href='/bike'>
                    <a>
                        <ListItem button>
                            <ListItemIcon>
                                <DirectionsBikeIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Bike Travel"} />
                        </ListItem>
                    </a>
                </Link>
            </List>
            <Divider />
            <List>
                <Link href='/about'>
                    <a>
                        <ListItem button>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary={"About"} />
                        </ListItem>
                    </a>
                </Link>
                <Link href='/guidelines'>
                    <a>
                        <ListItem button>
                            <ListItemIcon>
                                <ListIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Guideline"} />
                        </ListItem>
                    </a>
                </Link>
                <Link href='/dev'>
                    <a>
                        <ListItem button>
                            <ListItemIcon>
                                <CloudIcon />
                            </ListItemIcon>
                            <ListItemText primary={"TripTips API"} />
                        </ListItem>
                    </a>
                </Link>
                <Divider />
                <Link href='/'>
                    <a>
                        <ListItem button>
                            <ListItemIcon>
                                <AndroidIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Get Android App"} />
                        </ListItem>
                    </a>
                </Link>
                <Link href='/'>
                    <a>
                        <ListItem button>
                            <ListItemIcon>
                                <PhoneIphoneIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Get iOS App"} />
                        </ListItem>
                    </a>
                    
                </Link>
                <Link 
                    href="mailto:nonoumasy@gmail.com?subject=Feedback"
                    target='_blank'
                    rel="noreferrer">
                    <a>
                        <ListItem button>
                            <ListItemIcon>
                                <FeedbackIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Send Feedback"} />
                        </ListItem>
                    </a>
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
                        <a>
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
                        </a>
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