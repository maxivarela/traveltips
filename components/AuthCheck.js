import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../lib/AuthContext';

import {
    Button,
    Typography,
} from '@material-ui/core';


export default function AuthCheck(props) {
    const {currentUser} = useContext(AuthContext)

    function SignIn() {
        return (
            <div style={{ height: 'calc(100vh - 13rem)', }}>
                <div style={{marginBottom: 10,}}>You must be signed in.</div>
                <Link href="/signin">
                    <a>
                        <Button variant='contained' color='primary' disableElevation>
                            <Typography variant='h5' component='h3'>
                                Signin
                            </Typography>
                        </Button>
                    </a>
                </Link>
            </div>
        )
    }

    return (
        currentUser
            ? props.children
            : props.fallback || <SignIn />
    )    
}

