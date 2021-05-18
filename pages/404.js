import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import {
    Container,
} from '@material-ui/core';

export default function NotFound() {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return (
        <Container maxWidth='lg'>
            Hi, are you lost?
            <Link href='/'>
                <a>
                    Homepage
                </a>
            </Link>
        </Container>
    )
}
