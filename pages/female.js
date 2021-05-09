import Head from 'next/head'
import GridComponent from '../components/GridComponent'
import { getTipsByCategory } from '../lib/api'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

export const getStaticProps = async () => {
    try {
        const data = await getTipsByCategory('female')
        return data
    } catch (error) {
        throw error;
    }
}

export default function FemaleTravel({ data }) {
    const router = useRouter()
    const { locale, locales } = router

    const SEO = {
        title: 'Female Travel Tips',
        description: 'Travel tips, hacks for female travel.'
    }

    return (
        <div style={{ padding: '1rem', }}>
            <Head>
                {locales.map(loc => <link rel="alternate" hreflang={loc} href={`https://hacktravels.com/${loc}${router.asPath}`}/>)}
            </Head>
            <NextSeo {...SEO} nofollow={true} />
            <h2>
                Female Travel Tips
            </h2>
            <GridComponent tips={data} locale={locale} locales={locales}/>
        </div>
    )
}
