import ImageComponent from './shared/ImageComponent'
import Link from 'next/link';

import {
    Typography,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export const CardComponent = ({ item, locale}) => {
    const youtubeId = item?.image[0]?.split('/').pop()
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
        <article>
            {/* <div style={{
                position: 'relative',
                overflow: "hidden",
                width: "100% !important",
                height: 240,
                borderRadius: 10,
                marginBottom: 10,
                }}> */}
                {item?.image
                    &&
                    item?.image?.map((image) => <ImageComponent key={item.id} image={image} title={item.title} youtubeId={youtubeId} />
                    )
                }
            {/* </div> */}

            {
                item?.location
                &&
                <Link href="/">
                    <a style={{ display: 'flex', alignItems: 'center', marginBottom: 5, }}>
                        <LocationOnIcon style={{ fontSize: 12, }} /> &nbsp;{item?.location.split(',')[0]}
                    </a>
                </Link>
            }
            

            <Link href={`./tips/${item.id}`} >
                <a>
                    <TitleComponent />
                </a>
            </Link>
        </article>
    );
}