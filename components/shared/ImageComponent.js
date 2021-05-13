
import { makeStyles } from '@material-ui/core/styles';
import {
} from '@material-ui/core'
import Image from 'next/image'

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
                        // this loads imageThumbnail instead of the Youtube embedded video.
                        srcDoc={`
                            <style>
                                *{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;height:100%;top:0;bottom:0;margin:auto;object-fit:cover;}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;}
                            </style>
                                <a href=${image}>
                                    <img src=${`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`} alt=${title}>
                                    <span>
                                        ▶
                                    </span>
                                </a>
                                `}
                        src={image}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="auto"
                        title={image}
                        type="*"
                    ></iframe>
                    :
                    image && 
                    <>
                        <Image
                            layout='fill'
                            objectFit='cover'
                            src={image}
                            alt={title?.substring(0, 50)} 
                            style={{ width: "100%", height: "100%" , objectFit: "cover", }}
                            className={classes.image}
                        />
                    </>
                    
                    // <img src={image} width={'400'} height={'300'} alt={title?.substring(0,50)} className={classes.image}/>
                
            :
            null
            }   
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    image: {
        width: '100% !important',
        height: '100% !important',
        objectFit: 'cover',
    },
    video: {
        width: '100% !important',
        height: '100% !important',
        objectFit: 'cover',
    },
}));

export default ImageComponent
