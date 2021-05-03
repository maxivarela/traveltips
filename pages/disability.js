import Head from 'next/head'
import TipsComponent from '../components/TipsComponent'
import { getTipsByCategory } from '../lib/api'

export const getStaticProps = async () => {
    try {
        const data = await getTipsByCategory('disability')
        return data
    } catch (error) {
        throw error;
    }
}

export default function DisabilityTravel({ data }) {
    return (
        <div style={{ padding: '1rem', }}>
            <Head>
                <title>Disability Travel Tips</title>
                <meta name='keywords' content='travel tips' />
            </Head>
            <h2>
                Disability Travel Tips
            </h2>

            <TipsComponent tips={data} />
        </div>
    )
}
