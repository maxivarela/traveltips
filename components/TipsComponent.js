import CardComponent from './CardComponent';
import Masonry from 'react-masonry-css'

import { makeStyles } from '@material-ui/core/styles';
import {

} from '@material-ui/core';

const TipsComponent = ({tips}) => {
    
    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    };

    return ( 
        <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {tips?.map(item => (
                <div key={item.id} >
                    <CardComponent item={item}/>
                </div>
            ))}
        </Masonry>
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