
import Link from 'next/link' 
import useWindowSize from './shared/useWindowSize'

import { makeStyles } from '@material-ui/core/styles';
import {
    Typography
} from '@material-ui/core/';

export default function Footer() {
    const classes = useStyles();
    const windowSize = useWindowSize()

    return (
        <>
            <footer style={{ display:'flex', justifyContent: 'center', backgroundColor: '#111', padding: 10, textAlign: 'center', color: '#999', fontSize: 12,}}>
                    ©{new Date().getFullYear()}&nbsp;TripTips.&nbsp;
                    {windowSize.width >= 600 &&
                    <>
                    <Link href='/terms' target='_blank' rel="noreferrer" >
                        <a>Terms</a>
                    </Link>
                    &nbsp;{'&'}&nbsp;
                    <Link href='/privacy' target='_blank' rel="noreferrer">
                        <a> Privacy Policy.</a>
                    </Link>
                    </>
                    }
            </footer>
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    copyright: {
        fontSize: '12px !important',
        color: '#aaa',
    },
}));