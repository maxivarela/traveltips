import {useEffect, useCallback} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

import {
    Button,
} from '@material-ui/core';

export function AddTip() {
    return (
        <>
            <Link href='./add'>
                <Button variant='contained' margin='dense' size='small' color='primary' disableElevation style={{ marginBottom: 10 }}>
                    Add Tip
                </Button>
            </Link>
        </>
    )
}

// go back when 'esc' key is pressed
export const EscFunctionToCancel = () => {
    const router = useRouter()
    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            router.back()
        }
    }, [router]);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);
}