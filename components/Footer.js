
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
            <footer style={{ display:'flex', justifyContent: 'center', backgroundColor: '#111', padding: 10, textAlign: 'center', color: '#fff', fontSize: 14,}}>
                    ©{new Date().getFullYear()}
                    <Link 
                        target='_blank' 
                        rel="noreferrer" 
                        href="https://www.linkedin.com/in/nonoumasy/" 
                        >
                        <a>
                        &nbsp; Nonoumasy.&nbsp;
                        </a>
                    </Link>
                    {windowSize.width >= 600 &&
                    <>
                    <Link href='/terms' target='_blank' rel="noreferrer" >
                        <a>Terms </a> 
                    </Link>
                    {'&'}
                    <Link href='/privacy' target='_blank' rel="noreferrer">
                        <a> Privacy Policy. </a>
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