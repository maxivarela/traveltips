import Head from 'next/head'
import TipsComponent from '../../components/TipsComponent'
import { getTipsByCategory } from '../api'

//this runs in build time. don't put code here that you expect to run in browser
export const getStaticProps = async () => {
    try {
        const data = await getTipsByCategory('women')
        return data
    } catch (error) {
        throw error;
    }
}

export default function WomenTravel({ data }) {
    return (
        <div style={{ padding: '1rem', }}>
            <Head>
                <title>Women Travel Tips</title>
                <meta name='keywords' content='travel tips' />
            </Head>
            <h2>
                Women Travel Tips
            </h2>
            <TipsComponent tips={data} />
        </div>
    )
}
