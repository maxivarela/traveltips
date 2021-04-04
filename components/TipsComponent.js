import { Carousel } from 'react-responsive-carousel';
import ImageComponent from './shared/ImageComponent'
import Link from 'next/link';
import Image from 'next/image';

import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Avatar,
    Button,
    Card, 
    CardActions,
    CardContent,
    CardHeader,
    IconButton,
    Toolbar,
    Typography,
} from '@material-ui/core';


const TipsComponent = ({tips}) => {
    const classes = useStyles()

    const today = new Date

    return ( 
        <>
            {tips?.map(item => (
                <Card
                    key={item.id}
                    className={"Card"}
                    style={{marginBottom: 40,}}
                    >  
                    <CardHeader 
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                <img src={item?.userImage} alt="" style={{ width: '100%', height: 40, borderRadius: 50, objectFit: 'cover' }} />
                            </Avatar>} 
                        title={item.user}
                        subheader={today.toLocaleDateString()}
                            >
                    </CardHeader>

                    <div>
                        {
                            item?.image
                                ?
                                item?.image?.includes('youtube.com')
                                    ?
                                    <iframe
                                        style={{
                                            width: '100%',
                                            height: '30vh',
                                            borderWidth: '0 !important',
                                            margin: '0 !important',
                                        }}
                                        src={item?.image}
                                        allowFullScreen
                                        mozallowfullscreen="mozallowfullscreen"
                                        msallowfullscreen="msallowfullscreen"
                                        oallowfullscreen="oallowfullscreen"
                                        webkitallowfullscreen="webkitallowfullscreen"
                                        allow="accelerometer"
                                        title={item?.image}
                                        type="*"
                                    />
                                    :
                                    <img
                                        src={item?.image}
                                        alt=''
                                        style={{
                                            width: '100%',
                                            height: '30vh',
                                            objectFit: 'cover',
                                        }}
                                    />
                                :
                                []
                        }
                    </div>
                    
                    {item?.audio
                        ?
                        <CardContent>
                            <audio controls style={{ width: '100%' }}>
                                <source src={item?.audio} type="audio/ogg" />
                                <source src={item?.audio} type="audio/mpeg" />
                            </audio>
                        </CardContent>
                        :
                        null
                    }

                    <CardContent>
                        <Typography variant='h6' component='h2' style={{marginBottom: 10}}>
                            {item?.title}
                        </Typography>
                        <Typography >
                            {item?.description.substring(0, 300)}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        {item?.tags?.map(tag => {
                            return (
                                <div style={{
                                    display: 'inline-block',
                                    textAlign: 'left',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    marginRight: 5,
                                    color: '#26978A',
                                    textTransform: 'capitalize',
                                }} key={tag}>
                                    {(tag != "") && tag + ','}
                                </div>
                            )
                        })}
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link
                            href={`./tips/${item.id}`}
                            >
                            <Button>
                                MORE DETAILS
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            ))}
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    tagsContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 30,
        marginBottom: 20,
    },
    tag: {

        textAlign: 'left',
        fontSize: '14px',
        fontWeight: 400,
        marginRight: 5,
        color: '#26978A',
        textTransform: 'capitalize',
    },
    image: {
        width: 560, 
        height: 'auto', 
        objectFit: 'cover'
    }
}));

export default TipsComponent;