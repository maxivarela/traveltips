import Head from 'next/head'
import TipsComponent from '../../components/TipsComponent'
import { getTipsBySearch } from '../api'

const searchTerm='lisbon'
//this runs in build time. don't put code here that you expect to run in browser
export const getServerSideProps = async (context) => {
    const {search} = await context.query
    try {
        const data = await getTipsBySearch(search)
        return data
    } catch (error) {
        throw error;
    }
}

export default function Search({ data }) {
    return (
        <div style={{ padding: '1rem', }}>
            <Head>
                <title> Travel Tips</title>
                <meta name='keywords' content='travel tips' />
            </Head>
            <h2>
                Search Results
            </h2>

            <TipsComponent tips={data} />
        </div>
    )
}
