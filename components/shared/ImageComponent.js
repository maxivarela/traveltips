import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import {
} from '@material-ui/core'

const ImageComponent = ({ image }) => {
    const classes = useStyles()

    // fallback if image link is broken
    const clueCharacters = [
        'https://i.imgur.com/EigNj6l.png',
    ]
    const character = clueCharacters[Math.floor(Math.random() * clueCharacters.length)]
    const addDefaultSrc = (e) => e.target.src = character

    return (
        <div className={classes.imageContainer} >
            {image
            ?
                image && image.includes('youtube.com')
                    ?
                    <>
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
                    </>
                    :
                    image &&
                    <>
                        <div onError={addDefaultSrc}>
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
