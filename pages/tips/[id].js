import Head from 'next/head'
import CardComponent from '../../components/CardComponent';
import firebase from '../../firebase'
import {useRouter} from 'next/router'
import {deleteTip} from '../api'
import Link from 'next/link'
import DisqusComments from '../../components/DisqusComments';
import {
    EmailShareButton,
    FacebookShareButton,
    FacebookMessengerShareButton,
    LineShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    RedditShareButton,
    TwitterShareButton,
    ViberShareButton,
    WeiboShareButton,
    WhatsappShareButton,
} from "react-share";

import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    LineIcon,
    LinkedinIcon,
    PinterestIcon,
    RedditIcon,
    TwitterIcon,
    ViberIcon,
    WeiboIcon,
    WhatsappIcon,
} from "react-share";

import {
    Button,
    Container,
    Tooltip,
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
        const data = doc.data()

        return {
            props: { id, data },
            revalidate: 10,
        }
    } catch (err) {
        console.log(err)
    }
}

const Details = ({id, data}) => {
    const router = useRouter()
    if (!data) return <div>Loading...</div>

    const deleteHandler = async () => {
        window.confirm("Are you sure you wish to delete this tip?") &&
            await deleteTip(id).then(router.back())
    }

    const shareUrl = `https://traveltips.vercel.app/tips/${id}`
    const appId = '296712571894670'
    const articleTitle = data?.title
    const articleImage = data?.image[0]
    const articleDescription = data?.description
    const articleSource = 'https://traveltips.vercel.app/'
    const iconSize = 30
            
    return ( 
        <Container maxWidth='sm'>
            <Head>
                <title>{data.title}</title>
                <meta name={data.title} content='travel tips' />
                <meta property="og:site_name" content={'TripTips'} key="ogsitename" />
                <meta property='og:type' content={'website'} />
                <meta property='fb:app_id' content={appId} />
                <meta property='og:title' content={articleTitle} key='ogtitle'/>
                <meta property='og:description' content={articleDescription} key='desc'/>
                <meta property='og:image' content={articleImage} key='ogimage'/>
                {/* <meta property='og:image:url' content={articleImage} key='ogimage'/> */}
                <meta property='og:url' content={shareUrl} key='ogurl'/>
                <meta property='og:video' content={articleImage} />
                <meta property='og:video:url' content={articleImage} />
                <meta property='og:video:secure_url' content={articleImage} />
            </Head>
            <div className='flexRow' style={{marginBottom: 10, marginTop: 40}}>
                <Button onClick={() => router.back()}>
                    <Typography color='primary' style={{ fontSize: 12, }}>
                        Back
                    </Typography>
                </Button>
                <div>
                    <Button>
                        <Link
                            href={{ pathname: `../edit`, query: { id } }}
                            >
                            <Typography color='primary' style={{ fontSize: 12, }}>
                                Edit
                            </Typography>
                        </Link>
                    </Button>
                    
                    <Button onClick={(id) => deleteHandler(id)}>
                        <Typography color='primary' style={{ fontSize: 12, }}>
                            Delete
                        </Typography>
                    </Button>
                </div>
            </div>
            <CardComponent item={data} maxCharLength={10000}/>
            <div>
                <EmailShareButton 
                    url={shareUrl}
                    subject={articleTitle}
                    body={'Check this out:'}
                    style={{ marginRight: 10, }}
                    >
                    <EmailIcon size={iconSize} round={true} />
                </EmailShareButton>
                <FacebookShareButton 
                    url={shareUrl} 
                    quote={articleTitle}
                    hashtag={'traveltips'}
                    style={{ marginRight: 10, }}
                    >
                    <FacebookIcon size={iconSize} round={true} />
                </FacebookShareButton>
                <FacebookMessengerShareButton
                    url={shareUrl} 
                    appId={appId}
                    redirectUri={shareUrl}
                    style={{ marginRight: 10, }}
                    >
                    <FacebookMessengerIcon size={iconSize} round={true} />
                </FacebookMessengerShareButton>
                <TwitterShareButton 
                    url={shareUrl} 
                    title={articleTitle}
                    hashtags={data?.tags}
                    style={{ marginRight: 10, }}>
                    <TwitterIcon size={iconSize} round={true} />
                </TwitterShareButton>
                <PinterestShareButton 
                    url={shareUrl}  
                    media={articleImage} 
                    description={articleDescription} 
                    style={{ marginRight: 10, }}
                    >
                    <PinterestIcon size={iconSize} round={true} />
                </PinterestShareButton>
                <LineShareButton 
                    url={shareUrl}
                    title={articleTitle}
                    style={{ marginRight: 10, }}
                    >
                    <LineIcon size={iconSize} round={true} />
                </LineShareButton>
                <LinkedinShareButton 
                    url={shareUrl}
                    title={articleTitle}
                    summary={articleDescription}
                    source={articleSource}
                    style={{ marginRight: 10, }}
                    >
                    <LinkedinIcon size={iconSize} round={true} />
                </LinkedinShareButton>
                <RedditShareButton 
                    url={shareUrl}
                    title={articleTitle}
                    style={{ marginRight: 10, }}
                    >
                    <RedditIcon size={iconSize} round={true} />
                </RedditShareButton>
                <ViberShareButton 
                    url={shareUrl}
                    title={articleTitle}
                    style={{ marginRight: 10, }}
                    >
                    <ViberIcon size={iconSize} round={true} />
                </ViberShareButton>
                <WeiboShareButton 
                    url={shareUrl}
                    title={articleTitle}
                    image={articleImage}
                    style={{ marginRight: 10, }}
                    >
                    <WeiboIcon size={iconSize} round={true} />
                </WeiboShareButton>
                <WhatsappShareButton 
                    url={shareUrl}
                    title={articleTitle}
                    style={{ marginRight: 10, }}
                    >
                    <WhatsappIcon size={iconSize} round={true} />
                </WhatsappShareButton>
            </div>
            {/* <DisqusComments item={data} id={id}/> */}
            <div style={{marginBottom: 80,}}> </div>
        </Container>
    );
}

export default Details;