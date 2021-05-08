import { makeStyles } from '@material-ui/core/styles';
import {
} from '@material-ui/core'

const ImageComponent = ({ image, title, youtubeId }) => {
    const classes = useStyles()

    return (
        <>
            {image
            ?
                image && image.includes('youtube.com')
                    ?
                    <iframe
                        className={classes.video}
                        srcdoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;;text-shadow:0 0 0.5em black}</style><a href=${image}><img src=${`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`} alt=${title}><span>▶</span></a>`}
                        src={image}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        mozallowfullscreen="mozallowfullscreen"
                        msallowfullscreen="msallowfullscreen"
                        oallowfullscreen="oallowfullscreen"
                        webkitallowfullscreen="webkitallowfullscreen"
                        loading="lazy"
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
