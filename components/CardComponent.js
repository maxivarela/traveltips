import { Carousel } from 'react-responsive-carousel';
import ImageComponent from './shared/ImageComponent'
import Link from 'next/link';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    IconButton,
    Toolbar,
    Typography,
} from '@material-ui/core';


const CardComponent = ({ item}) => {
    const classes = useStyles()
    const today = new Date
    return ( 
        <Card
            style={{
                marginBottom: 40,
                borderRadius: 5,
                boxShadow: '0 10px 10px 0 rgba(0, 0, 0, 0.1)'
            }}
            >
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" style={{ backgroundColor: '#222' }}>
                        {item?.userImage
                            ?
                            <img src={item?.userImage} alt="" style={{ width: '100%', height: 40, borderRadius: 50, objectFit: 'cover' }} />
                            :
                            <Typography>
                                {item?.username.split(" ").map((n) => n[0]).join("").toUpperCase()}
                            </Typography>
                        }

                    </Avatar>}
                title={<Typography color='primary' style={{ fontWeight: 'bold' }}>{item.username}</Typography>}
                subheader={today.toLocaleDateString()}
            >
            </CardHeader>

            {/* { item?.image?.length > 1  && console.log('lisa', item)} */}
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
                    <audio controls style={{ width: '100%' }}>
                        <source src={item?.audio} type="audio/ogg" />
                        <source src={item?.audio} type="audio/mpeg" />
                    </audio>
                </CardContent>
                :
                null
            }

            <CardContent>
                <Typography variant='body1' component='h2' style={{ marginBottom: 10, fontWeight: 600, }}>
                    {item?.title}
                </Typography>
                <Typography >
                    {item?.description.substring(0, 300)}
                </Typography>
                {item?.tags?.map(tag => {
                    return (
                        <div style={{
                            display: 'inline-block',
                            marginTop: 10,
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

            <CardActions style={{ marginBottom: 20 }}>
                <Link
                    href={`./tips/${item.id}`}
                >
                    <Button>
                        <Typography variant='h5' color='primary'>
                            MORE DETAILS
                                    </Typography>
                    </Button>
                </Link>
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