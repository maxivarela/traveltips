import { useContext } from 'react'
import { Carousel } from 'react-responsive-carousel';
import ImageComponent from './shared/ImageComponent'
import Link from 'next/link';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {MoreDetails} from '../components/MoreDetails'
import {AuthContext} from '../lib/AuthContext'

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
import LocationOnIcon from '@material-ui/icons/LocationOn';

const CardComponent = ({ item, maxCharLength, locale, locales}) => {
    const classes = useStyles()
    const { currentUser } = useContext(AuthContext)

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
                    <Avatar aria-label="recipe" style={{ backgroundColor: '#222', width: 36, height: 36, }}>
                        {item?.userImage
                            ?
                            <img 
                                src={item?.userImage} 
                                alt="" 
                                style={{ borderRadius: 50, objectFit: 'cover', width: 40, height: 40,  }}
                                />
                            :
                            <Typography color='primary'>
                                {item.username 
                                    ? 
                                    item?.username?.split(" ").map(n => n[0]).join("").toUpperCase() 
                                    : 
                                    'A'
                                    }
                            </Typography>
                        }

                    </Avatar>}
                title={<Typography color='primary'>{item.username ? item.username : 'Anonymous'}</Typography>}
                subheader={<div style={{lineHeight: 1}}>{item?.city}</div>}
                >
            </CardHeader>

            {item?.image?.length > 0
                ?
                (
                    item?.image?.length > 1
                        ?
                        <Carousel 
                            showThumbs={false} 
                            // dynamicHeight
                            >
                            {item?.image?.map(image => <ImageComponent key={item.id} image={image} />)}
                        </Carousel>
                        :
                        // <ImageComponent key={item.id} image={item?.image} />
                        item?.image?.map(image => <ImageComponent key={item.id} image={image} title={item.title}/>)
                )
                :
                null
            }

            <CardContent style={{ padding: '20px 30px', }}>
                {item?.location 
                    && 
                    <Link href="/">
                        <a style={{ display: 'flex', alignItems: 'center', marginBottom: 5,}}>
                            <LocationOnIcon style={{ fontSize: 12,}} />
                            &nbsp;{item?.location}
                        </a>
                    </Link>}

                    <Typography variant='h6' component='h1' style={{ marginBottom: 20, fontWeight: 500, lineHeight: 1.1, }}>
                    {
                        locale === 'en'
                            ?
                            item?.title
                            : locale === 'ar' ? item?.translatedTitle?.ar
                                : locale === 'de' ? item?.translatedTitle?.de
                                    : locale === 'en' ? item?.translatedTitle?.en
                                        : locale === 'es' ? item?.translatedTitle?.es
                                            : locale === 'fr' ? item?.translatedTitle?.fr
                                                : locale === 'hi' ? item?.translatedTitle?.hi
                                                    : locale === 'ja' ? item?.translatedTitle?.ja
                                                        : locale === 'pt' ? item?.translatedTitle?.pt
                                                            : locale === 'ru' ? item?.translatedTitle?.ru
                                                                : locale === 'zh' ? item?.translatedTitle?.zh
                                                                    : ''
                    }
                    </Typography>
                
                {item?.description &&
                    <Typography variant='body1' component='h3' style={{ whiteSpace: 'pre-wrap', marginBottom: 20, }}>
                        {
                            locale === 'en'
                            ?
                            item?.description?.substring(0, maxCharLength)
                            : locale === 'ar' ? item?.translatedDescription?.ar?.substring(0, maxCharLength)
                                : locale === 'de' ? item?.translatedDescription?.de?.substring(0, maxCharLength)
                                    : locale === 'en' ? item?.translatedDescription?.en?.substring(0, maxCharLength)
                                        : locale === 'es' ? item?.translatedDescription?.es?.substring(0, maxCharLength)
                                            : locale === 'fr' ? item?.translatedDescription?.fr?.substring(0, maxCharLength)
                                                : locale === 'hi' ? item?.translatedDescription?.hi?.substring(0, maxCharLength)
                                                    : locale === 'ja' ? item?.translatedDescription?.ja?.substring(0, maxCharLength)
                                                        : locale === 'pt' ? item?.translatedDescription?.pt?.substring(0, maxCharLength)
                                                            : locale === 'ru' ? item?.translatedDescription?.ru?.substring(0, maxCharLength)
                                                                : locale === 'zh' ? item?.translatedDescription?.zh?.substring(0, maxCharLength)
                                                                    : ''
                        }
                    </Typography>
                }
                

                {item?.link && 
                    <div style={{ margin: '20px auto', width: '100%', fontWeight: 500,}}>
                        Link:&nbsp;
                        <Link href={item?.link} >
                            <a target="_blank" rel="noreferrer" alt={item?.link}>
                            {item?.link}
                            </a>
                        </Link>
                    </div>
                }
                    
                <Typography variant='body2' component='h2' style={{ marginTop: 10, fontWeight: 500, }}>
                    {item?.tags?.length > 0 && 
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
                        Last Updated: {new Date(item?.updatedAt).toLocaleDateString()}
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
                {item?.user === currentUser?.uid && 
                    <MoreDetails id={item?.id} />
                }
                
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