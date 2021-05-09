import { useContext } from 'react'
import ImageComponent from './shared/ImageComponent'
import Link from 'next/link';
import {useRouter} from 'next/router'
import {MoreDetails} from './MoreDetails'
import {AuthContext} from '../lib/AuthContext'
import SocialShare from '../components/SocialShare';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Divider,
    IconButton,
    Tooltip,
    Typography,
} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { NavigateBeforeSharp } from '@material-ui/icons';

const DetailComponent = ({ id, item, locale, youtubeThumbnail}) => {
    const classes = useStyles()
    const { currentUser } = useContext(AuthContext)
    const router = useRouter()
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const youtubeId = item?.image[0]?.split('/').pop()

    const tagClickHandler = (tag) => (
        router.push({
            pathname: '/searchresults',
            query: { search: tag }
        })
    )

    return ( 
        <>
            {item?.location
                &&
                <Link href="/">
                    <a style={{ display: 'flex', alignItems: 'center', marginBottom: 5, }}>
                        <LocationOnIcon style={{ fontSize: 12, }} />
                        &nbsp;{item?.location.split(',')[0]}
                    </a>
                </Link>
            }

            <Typography variant='h6' component='h1' style={{marginBottom: 20, fontSize: 40, fontWeight: 600, lineHeight: 1.1, }}>
                {
                    locale === 'en'
                        ?
                        item?.title
                        : locale === 'ar' ? item?.translatedTitle?.ar
                            : locale === 'de' ? item?.translatedTitle?.de
                                : locale === 'es' ? item?.translatedTitle?.es
                                    : locale === 'fr' ? item?.translatedTitle?.fr
                                        : locale === 'hi-IN' ? item?.translatedTitle?.hi
                                            : locale === 'ja' ? item?.translatedTitle?.ja
                                                : locale === 'pt' ? item?.translatedTitle?.pt
                                                    : locale === 'ru' ? item?.translatedTitle?.ru
                                                        : locale === 'zh' ? item?.translatedTitle?.zh
                                                            : ''
                }
            </Typography>
            
            <div className='flexRow' style={{margin: '20px auto'}}>
                <img
                    src={item?.userImage}
                    alt={item?.username}
                    style={{ borderRadius: 50, objectFit: 'cover', width: 24, height: 24, marginRight: 10,}}
                />
                <Typography>
                    {item?.username}
                </Typography>
            </div>

            <Typography variant='body2' component='h2' style={{ marginTop: 10, fontWeight: 500, }}>
                {item?.tags?.length > 0 &&
                    <div>
                        Tags: {item?.tags?.map(tag => {
                        return (
                            <div 
                                onClick={() => tagClickHandler(tag)}
                                className='tags' 
                                key={tag}
                                >
                                {(tag != "") && tag + ','}&nbsp;
                            </div>
                        )
                    })}
                    </div>
                }
                <div>
                    Last Updated: {new Date(item?.updatedAt).toLocaleDateString()}
                </div>
            </Typography>
            <div style={{ 
                overflow: 'hidden',
                borderRadius: 10,
                margin: '40px auto',
                height: 400,
                }}
                >
                {item?.image
                    ?
                    (
                        item?.image?.length > 1
                            ?
                            <Slider {...settings} >
                                {item?.image?.map(image => <ImageComponent key={item.id} image={image} />)}
                            </Slider>
                            :
                            item?.image?.map(image => <ImageComponent key={item.id} image={image} title={item.title} youtubeId={youtubeId}/>)
                    )
                    :
                    null
                }
            </div>
                
            {item?.description &&
                <Typography variant='body1' component='h3' style={{ whiteSpace: 'pre-wrap', marginBottom: 20, }}>
                    {
                        locale === 'en'
                        ?
                        item?.description
                        : locale === 'ar' ? item?.translatedDescription?.ar
                            : locale === 'de' ? item?.translatedDescription?.de
                                : locale === 'es' ? item?.translatedDescription?.es
                                    : locale === 'fr' ? item?.translatedDescription?.fr
                                        : locale === 'hi-IN' ? item?.translatedDescription?.hi
                                            : locale === 'ja' ? item?.translatedDescription?.ja
                                                : locale === 'pt' ? item?.translatedDescription?.pt
                                                    : locale === 'ru' ? item?.translatedDescription?.ru
                                                        : locale === 'zh' ? item?.translatedDescription?.zh
                                                            : ''
                    }
                </Typography>
            }
                
            {item?.link && 
                <Typography style={{ margin: '20px auto', fontWeight: 500,}}>
                    Link:&nbsp;
                    <Link href={item?.link} >
                        <a target="_blank" rel="noreferrer" alt={item?.link}>
                            {item?.link}
                        </a>
                    </Link>
                </Typography>
            }
            { item?.location &&
                <Typography style={{ margin: '20px auto', fontWeight: 500, }}>
                    Address:&nbsp;
                    <Link href='/' >
                        <a target="_blank" rel="noreferrer" alt={item?.link}>
                            {item?.location}
                        </a>
                    </Link>
                </Typography>

            }

            <Divider style={{marginTop: 40}}/>

            <div className='flexRowBetween' style={{ margin: '20px auto'}}>
                <div className='flexRow' >
                    <Tooltip title='Like' placement='top'>
                        <IconButton onClick={() => alert('todo')} aria-label="add a like">
                            <Typography variant='h5' color='primary'>
                                <FavoriteBorderIcon fontSize="small" />
                            </Typography>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title='Bookmark' placement='top'>
                        <IconButton variant='outlined' onClick={() => alert('todo')} aria-label="add a bookmark">
                            <Typography variant='h5' color='primary'>
                                <BookmarkBorderIcon fontSize="small" />
                            </Typography>
                        </IconButton>
                    </Tooltip>
                </div>
                <div>
                    <SocialShare id={id} data={item} />
                </div>

                {item?.user === currentUser?.uid &&
                    <MoreDetails id={item?.id} />
                }
            </div>
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    
}));

export default DetailComponent;