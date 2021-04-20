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
    Typography,
} from '@material-ui/core';
// import ShareIcon from '@material-ui/icons/Share';

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
                                {item.username ? item?.username.split(" ").map((n) => n[0]).join("").toUpperCase() : 'A'}
                            </Typography>
                        }

                    </Avatar>}
                title={<Typography color='primary' style={{ fontWeight: 500 }}>{item.username ? item.username : 'Anonymous'}</Typography>}
                subheader={today.toLocaleDateString()}
            >
            </CardHeader>

            {item?.image?.length > 0
                ?
                Array.isArray(item?.image)
                    ?
                    <Carousel showThumbs={false} dynamicHeight>
                        {item?.image?.map(image => <ImageComponent key={item.id} image={image} />)}
                    </Carousel>
                    :
                    <ImageComponent key={item.id} image={item?.image} />
                :
                null
            }

            {item?.audio
                ?
                <CardContent>
                    <audio controls style={{ width: '100%',}} preload="none">
                        <source src={item?.audio} type="audio/ogg" />
                        <source src={item?.audio} type="audio/mpeg" />
                    </audio>
                </CardContent>
                :
                null
            }

            <CardContent style={{ padding: '20px 30px', }}>
                <Typography variant='body1' component='h2' style={{ marginBottom: 10, fontWeight: 500, }}>
                    {item?.title}
                </Typography>
                <Typography style={{ whiteSpace: 'pre-wrap', marginBottom: 20,}}>
                    {item?.description?.substring(0, maxCharLength)}
                    {item?.description.length >= 300 && '...'}
                </Typography>

                {item?.link && 
                <div style={{ margin: '10px auto', width: '100%',}}>
                    Link: &nbsp;
                    <Link href={item?.link} >
                        <a target="_blank" rel="noreferrer">
                        {item?.link}
                        </a>
                    </Link>
                </div>
                }
                    
                <Typography variant='body2' component='h2' style={{ margin: '10px auto', fontWeight: 500, }}>
                    {item?.location && <div> Location: {item?.location}</div>}
                    
                    <div>
                        Tags: {item?.tags?.map(tag => {
                        return (
                            <div className='tags' key={tag}>
                                {(tag != "") && tag + ','}
                            </div>
                        )
                    })}
                    </div>
                    <div>
                        Last Updated: {today.toLocaleDateString()}
                    </div>
                </Typography>
            </CardContent>

            {/* <CardActions style={{ marginBottom: 20 }}>
                <Link href={``}>
                    <Button>
                        <Typography variant='h5' color='primary'>
                            SHARE
                        </Typography>
                    </Button>
                </Link>
            </CardActions> */}
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