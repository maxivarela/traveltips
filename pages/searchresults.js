import Head from 'next/head'
import GridComponent from '../components/GridComponent'
import { getTipsBySearch } from '../lib/api'
import BackButton from '../components/shared/BackButton'
import { useRouter } from 'next/router'

import {
    Container,
} from '@material-ui/core';

//this runs in build time. don't put code here that you expect to run in browser
export const getServerSideProps = async (context) => {
    
    try {
        const { search } = await context.query
        const data = await getTipsBySearch(search)
        return {
            props: {
                search, 
                data
            },
        }
    } catch (error) {
        throw error;
    }
}

export default function Search({search, data}) {
    const router = useRouter()
    const { locale, locales } = router

    return (
        <Container maxWidth='lg' style={{ padding: '2rem 1rem', }}>
            <Head>
                <title> Travel Tips for {search}</title>
                <meta name='keywords' content='travel tips' />
                {locales.map(loc => <link rel="alternate" hreflang={loc} href={`https://traveltips.vercel.app/${loc}${router.asPath}`}/>)}
            </Head>
            <BackButton />
            <h2>
                Travel Tips for {search}
            </h2>
            <GridComponent tips={data} locale={locale} locales={locales}/>
        </Container>
    )
}
