import Head from 'next/head'
import TipsComponent from '../components/TipsComponent'
import { getTipsByCategory } from '../lib/api'
import {NextSeo} from 'next-seo'
import { useRouter } from 'next/router'

export const getStaticProps = async () => {
    try {
        const data = await getTipsByCategory('disability')
        return data
    } catch (error) {
        throw error;
    }
}

export default function DisabilityTravel({ data }) {
    const router = useRouter()
    const { locale, locales } = router

    const SEO = {
        title: 'Disability Travel Tips',
        description: 'Travel tips, hacks for disability travel.'
    }

    return (
        <div style={{ padding: '1rem', }}>
            <NextSeo {...SEO} />
            <h2>
                Disability Travel Tips
            </h2>

            <TipsComponent tips={data} locale={locale} locales={locales}/>
        </div>
    )
}
