import {useContext} from 'react'
import {AuthContext} from '../../lib/AuthContext'
import Head from 'next/head'
import CardComponent from '../../components/CardComponent';
import firebase, {postToJSON} from '../../lib/firebase'
import {useRouter} from 'next/router'
import SocialShare from '../../components/SocialShare';

import {
    Button,
    Container,
    Typography,
} from '@material-ui/core';



//SSR
// export const getServerSideProps = async (context) => {
//     try {
//         const id = context.params.id
//         const doc = await firebase
//             .firestore()
//             .collection('tips')
//             .doc(id)
//             .get()
//         const data = doc.data()

//         return {
//             props: { id, data },
//             // revalidate: 10,
//         }
//     } catch (err) {
//         console.log(err)
//     }
// }

// SSG
export const getStaticPaths = async () => {
    const res = await firebase.firestore().collection('tips').get()
    const data = res.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const paths = data.map(item => {
        return {
            params: {id: item.id.toString()}
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
        const doc = await firebase
            .firestore()
            .collection('tips')
            .doc(id)
            .get()
        const data = postToJSON(doc)

        return {
            props: { id, data },
            revalidate: 5000,
        }
    } catch (err) {
        console.log(err)
    }
}

const Details = ({id, data}) => {
    const router = useRouter()
    const {currentUser} = useContext(AuthContext)

    if (!data) return <div>Loading...</div>

    const youtubeId = data?.image[0]?.split('/').pop()
    const shareUrl = `https://traveltips.vercel.app/tips/${id}`
    const appId = '296712571894670'
    const articleTitle = data?.title
    const articleAuthor = data?.username
    const articleImage = data?.image[0]
    const articleDescription = data?.description
            
    return ( 
        <Container maxWidth='sm'>
            <Head>
                <title>{data.title}</title>
                <meta name="pinterest-rich-pin" content="true" />
                <meta itemprop='url' content={shareUrl} />
                <meta itemprop='name' content={articleTitle} />
                <meta name={data.title} content='travel tips' />
                <meta property="og:site_name" content={'TripTips'} key="ogsitename" />
                <meta property='og:type' content={'article'} />
                <meta property='fb:app_id' content={appId} />
                <meta property='og:title' content={articleTitle.substring(0,50)} key='ogtitle'/>
                <meta property='og:description' content={articleDescription.substring(0, 140)} key='desc'/>
                <meta property='og:url' content={shareUrl} key='ogurl' />
                <meta property='og:image' content={articleImage?.includes('youtube') ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg` : articleImage} key='ogimage'/>
                <meta property='og:video' content={articleImage} />
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="twitter:title" content={articleTitle.substring(0,50)}></meta>
                <meta name="twitter:description" content={articleDescription.substring(0,140)}></meta>
                <meta name="twitter:image" content={articleImage?.includes('youtube') ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg` : articleImage}></meta>
                <meta property="article:published_time" content={new Date(Date.now())} />
                <meta property="article:author" content={articleAuthor} />
            </Head>

            <div className='flexRow' style={{marginBottom: 20, marginTop: 40}}>
                <Button onClick={() => router.push('/')} variant='outlined' color='primary'>
                    Back
                </Button>
            </div>

            <CardComponent id={id} item={data} maxCharLength={10000} currentUser={currentUser}/>
            <SocialShare id={id} data={data} />
            <div style={{marginBottom: 80,}}> </div>
        </Container>
    );
}

export default Details;