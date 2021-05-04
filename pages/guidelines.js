import { NextSeo } from 'next-seo'
import { Container, } from '@material-ui/core';

import {
    Typography,
} from '@material-ui/core';

export default function Guidelines() {
    const SEO = {
        title: 'Travel Tips Guidelines',
        description: 'Travel Tip guidelines'
    }
    return (
        <Container maxWidth="sm" style={{ height: 'calc(100vh - 13rem)', margin: '40px auto'}}>
            <NextSeo {...SEO} />
            <h2>
                Guidelines Page
            </h2>
            <Typography variant='body1' component='h3'>
                A tip is to:
                <ul>
                    <li>Find free (or discounted) stuff</li>
                    <li>Avoid Stress - scams, hassle, frustration, hassle, trouble, worry.</li>
                    <li>Keep Safe</li>
                    <li>Solves a specific problem</li>
                </ul>

                A tip is NOT:
                <ul>
                    <li>review(s) - ‘Best bags for solo travel’ but if this was given as an advice from an experienced traveler, then it is a tip</li>
                    <li>Guide, eg ‘Top 5 things to see in Lisbon’</li>
                    <li>Opinions , eg a blogger who just researched a top 5 things to do.</li>
                </ul>

                Examples of tips:
                <ul>
                    <li>Free stuff</li>
                    <li>How to eat cheap, anything about budget travel</li>
                    <li>Scams</li>
                    <li>Tip on where to go</li>
                    <li>Lesson(s) learned</li>
                    <li>Secrets</li>
                </ul>
            </Typography>

        </Container>
    )
}
