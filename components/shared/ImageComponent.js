import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import {
} from '@material-ui/core'

const ImageComponent = ({ image }) => {
    const classes = useStyles()

    return (
        <div className={classes.imageContainer} >
            {image
            ?
                image && image.includes('youtube.com')
                    ?
                    <iframe
                        className={classes.video}
                        src={image}
                        allowFullScreen
                        mozallowfullscreen="mozallowfullscreen"
                        msallowfullscreen="msallowfullscreen"
                        oallowfullscreen="oallowfullscreen"
                        webkitallowfullscreen="webkitallowfullscreen"
                        allow="accelerometer"
                        title={image}
                        type="*"
                    ></iframe>
                    :
                    image &&
                    <>
                        <div onError={(e) => e.target.src = 'https://i.imgur.com/Gz9TnHe.png'}>
                            <img src={image} alt='' className={classes.media}/>
                        </div>
                    </>
                
            :
            null
            }   
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    imageContainer: {
        width: '100%',
        overflow: 'hidden',
        transition: '0.4s',
        '@media print': {
            height: '400px !important',
        }
    },
    media: {
        width: '100% !important',
        height: '40vh',
        objectFit: 'cover',
        transition: '0.4s',
        // border: '1px solid #999',
    },
    video: {
        width: '100% !important',
        height: '40vh',
        margin: '0 !important',
        border: 'none !important',
    },
}));

export default ImageComponent
