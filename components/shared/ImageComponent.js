import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import {
    CardMedia, Hidden,
} from '@material-ui/core'

const ImageComponent2 = ({ image }) => {
    const classes = useStyles()

    const clueCharacters = [
        'https://i.imgur.com/EigNj6l.png',
    ]

    const character = clueCharacters[Math.floor(Math.random() * clueCharacters.length)]

    const addDefaultSrc = (e) => e.target.src = character

    return (
        <div className={classes.imageContainer} >
            {image && image.includes('youtube.com')
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
                    <div
                        onError={addDefaultSrc}
                        className={classes.media}
                        >
                        <img src={image} alt=''/>
                    </div>
                </>
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
        width: '30vw',
        height: 300,
        objectFit: 'cover',
        borderRadius: 5,
        transition: '0.4s',
        // border: '1px solid #999',
    },
    video: {
        width: '100% !important',
        height: '40vh',
        borderRadius: 7,
        borderWidth: '0 !important',
        margin: '0 !important',
    },
}));

export default ImageComponent2
