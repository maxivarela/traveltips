
import Link from 'next/link' 
import useWindowSize from '../components/shared/useWindowSize'

import { makeStyles } from '@material-ui/core/styles';
import {
    Typography
} from '@material-ui/core/';

export default function Footer() {
    const classes = useStyles();
    const windowSize = useWindowSize()

    return (
        <>
            <footer>
                <div style={{ color: '#fff', display: 'inline' }}>
                    <Typography style={{ fontSize: 12, display: 'inline' }}>
                        ©{new Date().getFullYear()}
                    </Typography>
                    <Link 
                        target='_blank' 
                        rel="noreferrer" 
                        href="https://www.linkedin.com/in/nonoumasy/" 
                        style={{ display: 'inline' }}
                        >
                        <Typography 
                            variant='h5' 
                            style={{ fontSize: 12, display: 'inline'  }}
                            color='primary'
                            > 
                            &nbsp; Nonoumasy 
                        </Typography>
                    </Link>
                    {windowSize.width >= 600 &&
                        <>
                            <Link href='/terms'>
                            <Typography variant='h5' style={{ fontSize: 12, display: 'inline'}} color='primary'> Terms </Typography>
                            </Link>
                            <Link href='/privacy'>
                            <Typography variant='h5' style={{ fontSize: 12, display: 'inline' }} color='primary'> Privacy Policy. </Typography>
                            </Link>
                        </>
                            
                    }
                </div>
                
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