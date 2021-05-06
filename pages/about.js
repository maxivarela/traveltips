import { NextSeo } from 'next-seo'

import {
    Container,
    Typography,
} from '@material-ui/core';

export default function About() {
    const SEO = {
        title: 'About Travel Tips',
        description: 'Travel tips, hacks for solo travel.'
    }
    return (
        <Container maxWidth="sm" style={{ margin: '40px auto' }}>
            <NextSeo {...SEO} />
            <h2>
                About Page
            </h2>
            <Typography variant='body1' component='h3'>
                TripTips is a social platform to create, explore, and share travel tips, tricks, hacks, and secrets.
            </Typography>

        </Container>
    )
}
