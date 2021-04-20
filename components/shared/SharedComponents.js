import Link from 'next/link'

import {
    Button,
} from '@material-ui/core';

export function AddTip() {
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
            <Link href='./add'>
                <Button variant='contained' margin='dense' size='small' color='primary' disableElevation style={{ marginBottom: 20 }}>
                    Add Tip
                </Button>
            </Link>
        </div>
    )
}
