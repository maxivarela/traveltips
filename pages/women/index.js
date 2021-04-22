import Head from 'next/head'
import TipsComponent from '../../components/TipsComponent'
import firebase from '../../components/firebase'

//this runs in build time. don't put code here that you expect to run in browser
export const getStaticProps = async () => {
    try {
        const res = await firebase.firestore().collection('tips').where('tags', 'array-contains', "women").orderBy('createdAt', 'desc').limit(10).get()
        const data = await res.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return {
            props: { data },
            revalidate: 10,
        }
    } catch (error) {
        console.error(error);
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
