import React from 'react'
import { useRouter } from 'next/router'

import {
    Button,
} from '@material-ui/core';

export default function BackButton() {
    const router = useRouter()
    return (
        <Button 
            onClick={() => router.push('/')} 
            variant='outlined' 
            color='primary'
            style={{marginBottom: 40, fontSize: 10,}}
            >
            Back
        </Button>
    )
}
