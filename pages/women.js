import Head from 'next/head'
import TipsComponent from '../components/TipsComponent'
import { getTipsByCategory } from './api'

export const getStaticProps = async () => {
    try {
        const data = await getTipsByCategory('female')
        return data
    } catch (error) {
        throw error;
    }
}

export default function WomenTravel({ data }) {
    return (
        <div style={{ padding: '1rem', }}>
            <Head>
                <title>Female Travel Tips</title>
                <meta name='keywords' content='travel tips' />
            </Head>
            <h2>
                Female Travel Tips
            </h2>
            <TipsComponent tips={data} />
        </div>
    )
}
