import CardComponent from './CardComponent';
import Masonry from 'react-masonry-css'
import Link from 'next/link';
import FabButton from '../components/FabButton'

import { makeStyles } from '@material-ui/core/styles';

const TipsComponent = ({ tips}) => {
    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    };

    return (
        <>
            <FabButton />
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
                >
                {tips?.map(item => {
                    
                    return (
                        <div key={item.id} >
                            <CardComponent item={item} maxCharLength={240} />
                            <Link href={`./tips/${item.id}`}>
                                <a>
                                    more
                                </a>
                            </Link>
                        </div>
                    )
                })}
            </Masonry>
        </>
    );
}

const useStyles = makeStyles((theme) => ({

}));

export default TipsComponent;