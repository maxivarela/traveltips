import { Carousel } from 'react-responsive-carousel';
import ImageComponent from './shared/ImageComponent'
import Link from 'next/link';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { makeStyles } from '@material-ui/core/styles';
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    IconButton,
    Tooltip,
    Typography,
} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ShareIcon from '@material-ui/icons/Share';

const CardComponent = ({ item, maxCharLength}) => {
    const classes = useStyles()
    const today = new Date

    return ( 
        <Card
            style={{
                marginBottom: 20,
                borderRadius: 5,
                boxShadow: '0 10px 10px 0 rgba(0, 0, 0, 0.1)'
            }}
            >
            
            <CardHeader
                style={{ padding: '20px 30px', }}
                avatar={
                    <Avatar aria-label="recipe" style={{ backgroundColor: '#222' }}>

                        {item?.userImage
                            ?
                            <img src={item?.userImage} alt="" style={{ width: '100%', height: 40, borderRadius: 50, objectFit: 'cover' }} />
                            :
                            <Typography color='primary'>
                                {item.username ? item?.username?.split(" ").map(n => n[0]).join("").toUpperCase() : 'A'}
                            </Typography>
                        }

                    </Avatar>}
                title={<Typography color='primary' style={{ fontWeight: 500 }}>{item.username ? item.username : 'Anonymous'}</Typography>}
                subheader={item?.city}
            >
            </CardHeader>

            {item?.image?.length > 0
                ?
                (
                    item?.image?.length > 1
                        ?
                        <Carousel showThumbs={false} dynamicHeight>
                            {item?.image?.map(image => <ImageComponent key={item.id} image={image} />)}
                        </Carousel>
                        :
                        // <ImageComponent key={item.id} image={item?.image} />
                        item?.image?.map(image => <ImageComponent key={item.id} image={image} />)
                )
                :
                null
            }

            {/* {item?.audio
                ?
                <CardContent>
                    <audio controls style={{ width: '100%',}} preload="none">
                        <source src={item?.audio} type="audio/ogg" />
                        <source src={item?.audio} type="audio/mpeg" />
                    </audio>
                </CardContent>
                :
                null
            } */}

            <CardContent style={{ padding: '20px 30px', }}>
                <Typography variant='h6' component='h2' style={{ marginBottom: 20, fontWeight: 700, lineHeight: 1.3,}}>
                    {item?.title}
                </Typography>

                {item?.description &&
                    <Typography style={{ whiteSpace: 'pre-wrap', marginBottom: 20, }}>
                        {item?.description?.substring(0, maxCharLength)}
                    </Typography>
                }
                

                {item?.link && 
                    <div style={{ margin: '20px auto', width: '100%', fontWeight: 500,}}>
                        Link:&nbsp;
                        <Link href={item?.link} >
                            <a target="_blank" rel="noreferrer">
                            {item?.link}
                            </a>
                        </Link>
                    </div>
                }
                    
                <Typography variant='body2' component='h2' style={{ marginTop: 10, fontWeight: 500, }}>
                    {item?.location && <div> Location: {item?.location}</div>}
                    
                    {item?.tags?.length > 1 && 
                        <div>
                            Tags: {item?.tags?.map(tag => {
                            return (
                                <div className='tags' key={tag}>
                                    {(tag != "") && tag + ','}
                                </div>
                            )
                        })}
                        </div>
                    }
                    
                    <div>
                        Last Updated: { new Date(Date.parse(item?.updatedAt)).toLocaleDateString()}
                    </div>
                </Typography>
            </CardContent>

            <CardActions className='flexRow' style={{marginBottom: 20 , padding: '0px 20px'}}>
                <div>
                    <Tooltip title='Like' placement='top'>
                        <IconButton onClick={() => alert('todo')}>
                            <Typography variant='h5' color='primary'>
                                <FavoriteBorderIcon />
                            </Typography>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='Bookmark' placement='top'>
                        <IconButton onClick={() => alert('todo')}>
                            <Typography variant='h5' color='primary'>
                                <BookmarkBorderIcon />
                            </Typography>
                        </IconButton>
                    </Tooltip>
                    
                </div>
                <Tooltip title='Share' placement='top'>
                    <IconButton onClick={() => alert('todo')}>
                        <Typography variant='h5' color='primary'>
                            <ShareIcon />
                        </Typography>
                    </IconButton>
                </Tooltip>
                
            </CardActions>
        </Card>
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

export default CardComponent;