import Head from 'next/head'
import TipsComponent from '../components/TipsComponent'
import { getTipsByCategory } from '../lib/api'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

export const getStaticProps = async () => {
    try {
        const data = await getTipsByCategory('solo')
        return data
    } catch (error) {
        throw error;
    }
}

export default function SoloTravel({ data }) {
    const router = useRouter()
    const { locale, locales } = router

    const SEO = {
        title: 'Solo Travel Tips',
        description: 'Travel tips, hacks for solo travel.'
    }
    return (
        <div style={{ padding: '1rem', }}>
            <Head>
                {locales.map(loc => {
                    return (
                        <link rel="alternate" hreflang={loc} href={`https://traveltips.vercel.app/${loc}${router.asPath}`} />
                    )
                })}
            </Head>
            <NextSeo {...SEO} />
            <h2>
                Solo Travel Tips
            </h2>
            <TipsComponent tips={data} locale={locale} locales={locales}/>
        </div>
    )
}
