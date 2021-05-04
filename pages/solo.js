import TipsComponent from '../components/TipsComponent'
import { getTipsByCategory } from '../lib/api'
import { NextSeo } from 'next-seo'

export const getStaticProps = async () => {
    try {
        const data = await getTipsByCategory('solo')
        return data
    } catch (error) {
        throw error;
    }
}

export default function SoloTravel({ data }) {
    const SEO = {
        title: 'Solo Travel Tips',
        description: 'Travel tips, hacks for solo travel.'
    }
    return (
        <div style={{ padding: '1rem', }}>
            <NextSeo {...SEO} />
            <h2>
                Solo Travel Tips
            </h2>
            <TipsComponent tips={data} />
        </div>
    )
}
