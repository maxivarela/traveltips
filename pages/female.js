import TipsComponent from '../components/TipsComponent'
import { getTipsByCategory } from '../lib/api'
import { NextSeo } from 'next-seo'

export const getStaticProps = async () => {
    try {
        const data = await getTipsByCategory('female')
        return data
    } catch (error) {
        throw error;
    }
}

export default function FemaleTravel({ data }) {
    const SEO = {
        title: 'Female Travel Tips',
        description: 'Travel tips, hacks for female travel.'
    }

    return (
        <div style={{ padding: '1rem', }}>
            <NextSeo {...SEO} />
            <h2>
                Female Travel Tips
            </h2>
            <TipsComponent tips={data} />
        </div>
    )
}
