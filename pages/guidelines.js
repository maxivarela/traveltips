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
                A travel tip is:
                <ul>
                    <li>Find free (or discounted) stuff.</li>
                    <li>Avoid Stress - scams, hassle, frustration, hassle, trouble, worry.</li>
                    <li>Keep Safe.</li>
                    <li>Solve a specific problem.</li>
                    <li>Local/Expert knowledge.</li>
                    <li>Secret/Not well known/New information</li>
                </ul>

                A tip is NOT:
                <ul>
                    <li>review(s) - ‘Best bags for solo travel’ but if this was given as an advice from an experienced traveler, then it is a tip</li>
                    <li>opinion(s) , eg. a blogger who just researched Top 5 things to do in Tokyo.</li>
                </ul>

                Examples of tips:
                <ul>
                    <li>Free Museum entrance to the Prado.</li>
                    <li>How to eat cheap in Istanbul ...or anything about budget travel.</li>
                    <li>Avoid these Scams in Prague.</li>
                    <li>Secret spots in Lisbon.</li>
                    <li>Lesson(s) learned during 2 years of solo traveling.</li>
                    <li>Local Ramen spot in Kyoto.</li>
                    <li>Off the beaten path</li>
                </ul>
            </Typography>

        </Container>
    )
}
