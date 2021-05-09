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
            <NextSeo {...SEO} nofollow={true}/>
            <h2>
                Developers Page
            </h2>
            <div>
                TripTips Api endpoint available here:
            </div>
            <Link
                href='https://hacktravels.com/api/tips'>
                <a target="_blank" rel="noreferrer" alt=''>
                    https://hacktravels.com/api/tips
                </a>
            </Link>
        </Container>
    )
}
