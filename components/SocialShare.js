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

export default function SocialShare({data, id}) {

    const shareUrl = `https://traveltips.vercel.app/tips/${id}`
    const appId = '296712571894670'
    const articleTitle = data?.title
    const articleImage = data?.image[0]
    const articleDescription = data?.description
    const articleSource = 'https://traveltips.vercel.app/'
    const iconSize = 20

    return (
        <>
            <EmailShareButton
                url={shareUrl}
                subject={articleTitle}
                body={'Check this out:'}
                style={{ marginRight: 5, }}
            >
                <EmailIcon size={iconSize} round={true} />
            </EmailShareButton>
            <FacebookShareButton
                url={shareUrl}
                quote={articleTitle}
                hashtag={'traveltips'}
                style={{ marginRight: 5, }}
            >
                <FacebookIcon size={iconSize} round={true} />
            </FacebookShareButton>
            <FacebookMessengerShareButton
                url={shareUrl}
                appId={appId}
                redirectUri={shareUrl}
                style={{ marginRight: 5, }}
            >
                <FacebookMessengerIcon size={iconSize} round={true} />
            </FacebookMessengerShareButton>
            <TwitterShareButton
                url={shareUrl}
                title={articleTitle}
                hashtags={data?.tags}
                style={{ marginRight: 5, }}>
                <TwitterIcon size={iconSize} round={true} />
            </TwitterShareButton>
            <PinterestShareButton
                url={shareUrl}
                media={articleImage}
                description={articleDescription}
                style={{ marginRight: 5, }}
            >
                <PinterestIcon size={iconSize} round={true} />
            </PinterestShareButton>
            <LineShareButton
                url={shareUrl}
                title={articleTitle}
                style={{ marginRight: 5, }}
            >
                <LineIcon size={iconSize} round={true} />
            </LineShareButton>
            <LinkedinShareButton
                url={shareUrl}
                title={articleTitle}
                summary={articleDescription}
                source={articleSource}
                style={{ marginRight: 5, }}
            >
                <LinkedinIcon size={iconSize} round={true} />
            </LinkedinShareButton>
            <RedditShareButton
                url={shareUrl}
                title={articleTitle}
                style={{ marginRight: 5, }}
            >
                <RedditIcon size={iconSize} round={true} />
            </RedditShareButton>
            <ViberShareButton
                url={shareUrl}
                title={articleTitle}
                style={{ marginRight: 5, }}
            >
                <ViberIcon size={iconSize} round={true} />
            </ViberShareButton>
            <WeiboShareButton
                url={shareUrl}
                title={articleTitle}
                image={articleImage}
                style={{ marginRight: 5, }}
            >
                <WeiboIcon size={iconSize} round={true} />
            </WeiboShareButton>
            <WhatsappShareButton
                url={shareUrl}
                title={articleTitle}
                style={{ marginRight: 5, }}
            >
                <WhatsappIcon size={iconSize} round={true} />
            </WhatsappShareButton>
            
        </>
    )
}
