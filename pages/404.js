import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import {
    
    Container,
} from '@material-ui/core';

export default function NotFound() {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.back()
        }, 3000)
    }, [])

    return (
        <Container maxWidth='lg'>
            <h2> Hi, are you lost?</h2>
            <p>Go back to the <Link href='/'>Homepage</Link> </p>
        </Container>
    )
}
