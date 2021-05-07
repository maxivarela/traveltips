import { Carousel } from 'react-responsive-carousel';
import ImageComponent from './shared/ImageComponent'
import Link from 'next/link';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export const CardComponent = ({ item, locale}) => {

    const TitleComponent = () => {
        return (
            <Typography variant='body1' component='h1' style={{ marginBottom: 20, fontWeight: 500, lineHeight: 1.1, color: '#333' }}>
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
        )
    }

    return ( 
        <>
            <div style={{
                    overflow: 'hidden', 
                    borderRadius: 10, 
                    marginBottom: 10,
                    height: 220,
                    }}
                    >
                {item?.image
                    ?
                    (
                        item?.image?.length > 1
                            ?
                            <Carousel
                                showThumbs={false}
                            >
                                {item?.image?.map(image => <ImageComponent key={item.id} image={image} title={item.title}/>)}
                            </Carousel>
                            :
                            item?.image?.map(image => <ImageComponent key={item.id} image={image} title={item.title} />)
                    )
                    :
                    null
                }
                
            </div>
            
            
            {
            item?.location
            &&
            <Link href="/">
                <a style={{ display: 'flex', alignItems: 'center', marginBottom: 5, }}>
                    <LocationOnIcon style={{ fontSize: 12, }}/> &nbsp;{item?.location}
                </a>
            </Link>
            }
            <Link href={`./tips/${item.id}`} >
                <a>
                    <TitleComponent />
                </a>
            </Link>

        </>
    );
}