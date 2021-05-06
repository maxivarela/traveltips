import Head from 'next/head'
import TipsComponent from '../../components/TipsComponent'
import { getTipsBySearch } from '../../lib/api'
import BackButton from '../../components/shared/BackButton';
import { useRouter } from 'next/router'

//this runs in build time. don't put code here that you expect to run in browser
export const getServerSideProps = async (context) => {
    
    try {
        const { search } = await context.query
        const data = await getTipsBySearch(search)
        return {
            props: {
                search, 
                data
            },
        }
    } catch (error) {
        throw error;
    }
}

export default function Search({search, data}) {
    const router = useRouter()
    const { locale, locales } = router

    return (
        <div style={{ padding: '1rem', }}>
            <Head>
                <title> Travel Tips for {search}</title>
                <meta name='keywords' content='travel tips' />
            </Head>
            <BackButton />
            <h2>
                Travel Tips for "{search}" : {data?.length} items
            </h2>
            <TipsComponent tips={data} locale={locale} locales={locales}/>
        </div>
    )
}
