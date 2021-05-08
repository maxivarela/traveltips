import Link from 'next/link';
import { NextSeo } from 'next-seo'

import { Container, } from '@material-ui/core';

export default function DevelopersPage() {
    const SEO = {
        title: 'Developers Page',
        description: 'Developers page for Travel Tips'
    }
    return (
        <Container maxWidth="sm" style={{ margin: '40px auto' }}>
            <NextSeo {...SEO} noindex={true} />
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
