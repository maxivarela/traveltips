import React from 'react'
import { useRouter } from 'next/router'

import {
    Button,
} from '@material-ui/core';

export default function BackButton() {
    const router = useRouter()
    return (
        <div className='flexRow' style={{ marginBottom: 20, marginTop: 40 }}>
            <Button onClick={() => router.push('/')} variant='outlined' color='primary'>
                Back
                </Button>
        </div>
    )
}
