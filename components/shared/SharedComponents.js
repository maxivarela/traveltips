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
