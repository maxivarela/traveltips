import Head from 'next/head'
import TipsComponent from '../../components/TipsComponent'
import firebase from '../../firebase'

//this runs in build time. don't put code here that you expect to run in browser
export const getStaticProps = async () => {
    try {
        const res = await firebase.firestore().collection('tips').where('tags', 'array-contains', "disability").orderBy('createdAt', 'desc').limit(10).get()
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

export default function DisabilityTravel({data}) {
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
