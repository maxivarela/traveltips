import {useContext} from 'react'
import {AuthContext} from '../../lib/AuthContext'
import Head from 'next/head'
import CardComponent from '../../components/CardComponent';
import firebase, {postToJSON} from '../../lib/firebase'
import SocialShare from '../../components/SocialShare';
import BackButton from '../../components/shared/BackButton';
import { NextSeo, ArticleJsonLd } from 'next-seo'

import {
    Container,
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
    const {currentUser} = useContext(AuthContext)

    if (!data) return <div>Loading...</div>

    const youtubeId = data?.image[0]?.split('/').pop()
    const shareUrl = `https://traveltips.vercel.app/tips/${id}`
    const appId = '296712571894670'
    const articleTitle = data?.title
    const articleAuthor = data?.username
    const articleImage = data?.image[0]
    const articleDescription = data?.description

    const SEO = {
        title: data?.title,
        description: articleDescription.substring(0, 140),
        canonical: shareUrl,
        openGraph: {
            type: 'article',
            url: shareUrl,
            title: articleTitle.substring(0, 50), 
            description: articleDescription.substring(0, 140),
            images: [{
                url: articleImage?.includes('youtube') ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg` : articleImage,
                alt: articleTitle.substring(0, 50),
            }],
            locale: 'en_US',
            site_name: 'TripTips',
            article: {
                publishedTime: new Date(data?.createdAt).toLocaleDateString(),
                modifiedTime: new Date(data?.updatedAt).toLocaleDateString(),
                authors: [data?.username]
            },
        },
        facebook :{
            appId: appId
        },
        twitter: {
            title: articleTitle.substring(0, 50),
            description: articleDescription.substring(0, 140),
            image: articleImage?.includes('youtube') ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg` : articleImage,
            handle: '@nonoumasy',
            site: '@TripTips7',
            cardType: 'summary_large_image',
        },
    }

    const JSONLD = {
        url: shareUrl,
        title: articleTitle.substring(0, 50),
        images: [articleImage?.includes('youtube') ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg` : articleImage],
        datePublished: (new Date(data?.createdAt).toLocaleDateString()),
        dateModified: (new Date(data?.updatedAt).toLocaleDateString()),
        authorName: [data?.username],
        publisherName: "TripTips",
        publisherLogo: "https://firebasestorage.googleapis.com/v0/b/travel-tips-29526.appspot.com/o/Frame%20435.png?alt=media&token=ac6a2ddf-894c-4806-bb25-8e92ea3a4614",
        description: articleDescription.substring(0, 140),

    }
            
    return ( 
        <Container maxWidth='sm'>
            <NextSeo {...SEO} />
            <ArticleJsonLd {...JSONLD}/>
            <BackButton />
            <CardComponent item={data} maxCharLength={10000} currentUser={currentUser}/>
            <SocialShare id={id} data={data} />
            <div style={{marginBottom: 80,}}> </div>
        </Container>
    );
}

export default Details;