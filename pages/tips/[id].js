import Head from 'next/head'
import CardComponent from '../../components/CardComponent';
import firebase from '../../components/firebase'
import {useRouter} from 'next/router'

import {
    Button,
    Container,
    Typography,
} from '@material-ui/core';

//next will build a page for each of the items in this path array
export const getStaticPaths = async () => {
    const res = await firebase.firestore().collection('tips').get()
    const data = await res.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const paths = data.map(item => {
        return {
            params: {id: item.id}
        }
    })

    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps = async (context) => {
    try {
        const id = context.params.id

        const doc = await firebase.firestore().collection('tips').doc(id).get()
        const data = doc.data()

        return {
            props: { data },
            revalidate: 10,
        }
    } catch (err) {
        console.log(err)
    }
}

const Details = ({data}) => {
    const router = useRouter()

    if (!data) return <div>Loading...</div>
    
    return ( 
        <Container maxWidth='sm'>
            <Head>
                <title>{data.title}</title>
                <meta name={data.title} content='travel tips' />
            </Head>
            <Button 
                onClick={() => router.back()}
                style={{marginBottom: 20,}}
                >
                <Typography color='primary' style={{fontSize: 12, }}>
                    Back
                </Typography>
            </Button>
            <CardComponent item={data} />
        </Container>
    );
}

export default Details;