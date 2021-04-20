import Head from 'next/head'
import CardComponent from '../../components/CardComponent';
import firebase from '../../components/firebase'
import {useRouter} from 'next/router'

import DisqusComments from '../../components/DisqusComments';

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

    console.log('jisoo2', data)
    if (!data) return <div>Loading...</div>

    const deleteHandler = () => {
        alert('hello nono')
    }

    const editHandler = () => {
        alert('hello nono')
    }
            
    return ( 
        <Container maxWidth='sm'>
            <Head>
                <title>{data.title}</title>
                <meta name={data.title} content='travel tips' />
            </Head>
            <div className='flexRow' style={{marginBottom: 10,}}>
                <Button onClick={() => router.back()}>
                    <Typography color='primary' style={{ fontSize: 12, }}>
                        Back
                    </Typography>
                </Button>

                <div>
                    <Button onClick={editHandler}>
                        <Typography color='primary' style={{ fontSize: 12, }}>
                            Edit
                        </Typography>
                    </Button>
                    <Button onClick={deleteHandler}>
                        <Typography color='primary' style={{ fontSize: 12, }}>
                            Delete
                        </Typography>
                    </Button>
                </div>
            </div>
            <CardComponent item={data} maxCharLength={10000}/>
            <div>
                <DisqusComments item={data}/>
            </div>
        </Container>
    );
}

export default Details;