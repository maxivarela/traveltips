import TipsComponent from '../components/TipsComponent'
import { getTipsByCategory } from '../lib/api'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

//this runs in build time. don't put code here that you expect to run in browser
export const getStaticProps = async () => {
    try {
        const data = await getTipsByCategory('bike')
        return data
    } catch (error) {
        throw error;
    }
}

export default function BikeTravel({ data }) {
    const router = useRouter()
    const { locale, locales } = router

    const SEO = {
        title: 'Bike Travel Tips',
        description: 'Travel tips, hacks for bike travel.'
    }

    return (
        <div style={{ padding: '1rem', }}>
            <NextSeo {...SEO} />
            <h2>
                Bike Travel Tips
            </h2>
            <TipsComponent tips={data} locale={locale} locales={locales}/>
        </div>
    )
}
