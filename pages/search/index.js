import Head from 'next/head'
import TipsComponent from '../../components/TipsComponent'
import { getTipsBySearch } from '../api'
import { useRouter } from 'next/router'

import {
    Button,
    Typography,
} from '@material-ui/core';

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
    return (
        <div style={{ padding: '1rem', }}>
            <Head>
                <title> Travel Tips for {search}</title>
                <meta name='keywords' content='travel tips' />
            </Head>
            <Button onClick={() => router.back()}>
                <Typography color='primary' style={{ fontSize: 12, }}>
                    Back
                </Typography>
            </Button>
            <h2>
                Travel Tips for "{search}" : {data?.length} items
            </h2>
            <TipsComponent tips={data} />
        </div>
    )
}
