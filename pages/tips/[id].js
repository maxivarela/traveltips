import DetailComponent from '../../components/DetailComponent';
import firebase, {postToJSON} from '../../lib/firebase'
import BackButton from '../../components/shared/BackButton';
import { NextSeo, ArticleJsonLd } from 'next-seo'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { getTip} from '../../lib/api'


import {
    Container,
} from '@material-ui/core';

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
        const doc = await getTip(id)
        const data = postToJSON(doc)

        return {
            props: { id, data },
            revalidate: 500,
        }
    } catch (err) {
        console.log(err)
    }
}

export const Details = ({id, data}) => {
    
    const router = useRouter()
    const { locale, locales } = router

    if (!data) return <div>Loading...</div>

    const articleTitle = 
        (locale === 'en'
        ?
        data?.title
        : locale === 'ar' ? data?.translatedTitle?.ar
            : locale === 'de' ? data?.translatedTitle?.de
                : locale === 'es' ? data?.translatedTitle?.es
                    : locale === 'fr' ? data?.translatedTitle?.fr
                        : locale === 'hi-IN' ? data?.translatedTitle?.hi
                            : locale === 'ja' ? data?.translatedTitle?.ja
                                : locale === 'pt' ? data?.translatedTitle?.pt
                                    : locale === 'ru' ? data?.translatedTitle?.ru
                                        : locale === 'zh' ? data?.translatedTitle?.zh
                                            : ''
)
    const articleDescription = 
        (locale === 'en'
        ?
        data?.description
        : locale === 'ar' ? data?.translatedDescription?.ar
            : locale === 'de' ? data?.translatedDescription?.de
                : locale === 'es' ? data?.translatedDescription?.es
                    : locale === 'fr' ? data?.translatedDescription?.fr
                        : locale === 'hi-IN' ? data?.translatedDescription?.hi
                            : locale === 'ja' ? data?.translatedDescription?.ja
                                : locale === 'pt' ? data?.translatedDescription?.pt
                                    : locale === 'ru' ? data?.translatedDescription?.ru
                                        : locale === 'zh' ? data?.translatedDescription?.zh
                                            : '')

    const youtubeId = data?.image[0]?.split('/').pop()
    const shareUrl = `https://hacktravels.com/tips/${id}`
    const appId = '296712571894670'
    // const articleTitle = data?.translatedTitle?.locale
    const articleAuthor = data?.username
    const articleImage = data?.image[0]
    // const articleDescription = data?.description

    const SEO = {
        title: articleTitle,
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
        <Container maxWidth='sm' style={{padding: '2rem 1rem',}}>
            <Head>
                {locales.map((loc, index) => <link key={index} rel="alternate" hrefLang={loc} href={`https://hacktravels.com/${loc}${router.asPath}`}/>)}
            </Head>
            <NextSeo {...SEO} nofollow={true} />
            <ArticleJsonLd {...JSONLD}/>
            <BackButton />
            <DetailComponent id={id} item={data} locale={locale}/>
        </Container>
    );
}

export default Details;