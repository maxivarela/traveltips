import Head from 'next/head'
import Link from 'next/link';

import { Container, } from '@material-ui/core';

export default function DevelopersPage() {
    return (
        <Container maxWidth="sm" style={{margin: '40px auto'}}>
            <Head>
                <title>TripTips Api</title>
                <meta name='keywords' content='travel tips' />
            </Head>
            <div>
                TripTips Api endpoint available here:
            </div>
            <Link
                href='https://traveltips.vercel.app/api/tips'>
                <a target="_blank" rel="noreferrer" alt=''>
                    https://traveltips.vercel.app/api/tips
                </a>
            </Link>
        </Container>
    )
}
