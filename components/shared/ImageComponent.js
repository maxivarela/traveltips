import { makeStyles } from '@material-ui/core/styles';
import {
} from '@material-ui/core'

const ImageComponent = ({ image, title }) => {
    const classes = useStyles()

    return (
        <>
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
                    image && <img src={image} alt={title?.substring(0,50)} className={classes.media}/>
                
            :
            null
            }   
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    media: {
        width: '100% !important',
        height: '100% !important',
        objectFit: 'cover',
        transition: '0.4s',
    },
    video: {
        width: '100% !important',
        height: '100% !important',
        border: 'none !important',
    },
}));

export default ImageComponent
