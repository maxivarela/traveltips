import Link from 'next/link';
import { NextSeo } from 'next-seo'

import { Container, } from '@material-ui/core';

export default function DevelopersPage() {
    const SEO = {
        title: 'Developers Page',
        description: 'Developers page for Travel Tips'
    }
    return (
        <Container maxWidth="sm" style={{ height: 'calc(100vh - 13rem)', margin: '40px auto' }}>
            <NextSeo {...SEO} />
            <h2>
                Developers Page
            </h2>
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
