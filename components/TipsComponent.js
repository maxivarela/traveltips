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
                        <Typography style={{marginLeft: 10,}}>
                            {item.user}
                        </Typography> 
                    </div>
                    <div style={{ margin: '20px auto', }}>
                        <ImageComponent image={item.image} />
                    </div>
                    
                    <Typography variant='h5' component='h2' style={{ margin: '20px auto', }}>
                        {item?.title}
                    </Typography>
                    <div >
                        <Typography style={{ margin: '20px auto', }}>
                            {item?.description}
                        </Typography>
                    </div>

                    <div className={classes.tagsContainer}>
                        {item?.tags?.map(tag=> {
                            return (
                                <div className={classes.tag} key={tag}>
                                    {(tag != "") && tag + ','}
                                </div>
                            )
                        })}
                    </div>
                    <Link 
                        href={`./tips/${item.id}`}
                        style={{pointer: 'cursor'}}
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
}));

export default TipsComponent;