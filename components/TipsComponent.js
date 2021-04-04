import { Carousel } from 'react-responsive-carousel';
import ImageComponent from './shared/ImageComponent'
import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Button,
    IconButton,
    Toolbar,
    Typography,
} from '@material-ui/core';


const TipsComponent = ({tips}) => {
    const classes = useStyles()

    return ( 
        <>
            {tips?.map(item => (
                <div
                    key={item.id}
                    className={"Card"}
                    >  

                    <div style={{display: 'flex', alignItems: 'center', }}>
                        <img src={item?.userImage} alt="" style={{ width: 30, height: 30, borderRadius: 50, objectFit: 'cover' }} /> 
                        <div style={{marginLeft: 10,}}>
                            {item.user}
                        </div> 
                    </div>
                        
                    <div style={{marginTop: 20,}}>
                        {
                        item?.image.includes('youtube.com') 
                        ?
                        <iframe
                                    style={{
                                        width: '100%', 
                                        height: '30vh', 
                                        borderRadius: 5,
                                        borderWidth: '0 !important',
                                        margin: '0 !important',}}
                            src={item?.image}
                            allowFullScreen
                            mozallowfullscreen="mozallowfullscreen"
                            msallowfullscreen="msallowfullscreen"
                            oallowfullscreen="oallowfullscreen"
                            webkitallowfullscreen="webkitallowfullscreen"
                            allow="accelerometer"
                            title={item?.image}
                            type="*"
                        />
                        :
                                <img 
                                    src={item?.image} 
                                    alt='' 
                                    style={{ 
                                        width: '100%', 
                                        height: '30vh', 
                                        objectFit: 'cover',
                                        borderRadius: 5, }}
                                    />
                        }   
                    </div>

                    <div>
                        <div style={{ margin: '20px auto', fontSize: 20}}>
                            {item?.title}
                        </div>
                    </div>
                    
                    <div >
                        <div style={{ margin: '20px auto', }}>
                            {item?.description.substring(0,300)}
                        </div>
                    </div>

                    <div className={classes.tagsContainer}>
                        {item?.tags?.map(tag=> {
                            return (
                                <div style={{
                                    marginBottom: 10,
                                    display: 'inline-block',
                                    textAlign: 'left',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    marginRight: 5,
                                    color: '#26978A',
                                    textTransform: 'capitalize',}} key={tag}>
                                    {(tag != "") && tag + ','}
                                </div>
                            )
                        })}
                    </div>
                    <Link 
                        href={`./tips/${item.id}`}
                        style={{ pointer: 'cursor', marginTop: 20,}}
                        >
                        MORE DETAILS
                    </Link>
                </div>
            ))}
        </>
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

export default TipsComponent;