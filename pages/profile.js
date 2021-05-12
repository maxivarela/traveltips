import Head from 'next/head'
import GridComponent from '../components/GridComponent'
import { getUserTips } from '../lib/api'
import { useRouter } from 'next/router'

export const getServerSideProps = async (router) => {
    const id = router?.query?.user
    try {
        const data = await getUserTips(id)
        return {
            props: { data },
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default function Profile({ data }) {
    const router = useRouter()
    const { locale, locales } = router
    
    return (
        <div style={{ padding: '1rem', }}>
            <Head>
                <title>Profile Page</title>
                <meta name='keywords' content='travel tips' />
            </Head>
            <h2>
                Profile Page
            </h2>
            <GridComponent tips={data} locale={locale} locales={locales} />
        </div>
    )
}
