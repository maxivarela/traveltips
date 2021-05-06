import CardComponent from './CardComponent';
import Masonry from 'react-masonry-css'
import Link from 'next/link';

const TipsComponent = ({ tips, locale}) => {
    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    };

    return (
        <>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
                >
                {tips?.map(item => {
                    
                    return (
                        <div key={item.id} >
                            <CardComponent item={item} maxCharLength={240} locale={locale}/>
                            <Link href={`./tips/${item.id}`}>
                                <a>
                                    Travel Tip article
                                </a>
                            </Link>
                        </div>
                    )
                })}
            </Masonry>
        </>
    );
}

export default TipsComponent;