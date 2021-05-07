import {
    EmailShareButton,
    FacebookShareButton,
    FacebookMessengerShareButton,
    LineShareButton,
    TwitterShareButton,
    WeiboShareButton,
    WhatsappShareButton,
} from "react-share";

import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    LineIcon,
    TwitterIcon,
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
    const iconSize = 32
    const marginRight = 10

    return (
        <>
            <EmailShareButton
                url={shareUrl}
                subject={articleTitle}
                body={'Check this out:'}
                style={{ marginRight}}
            >
                <EmailIcon size={iconSize} round={true} />
            </EmailShareButton>
            <FacebookShareButton
                url={shareUrl}
                quote={articleTitle}
                hashtag={'traveltips'}
                style={{ marginRight}}
            >
                <FacebookIcon size={iconSize} round={true} />
            </FacebookShareButton>
            <FacebookMessengerShareButton
                url={shareUrl}
                appId={appId}
                redirectUri={shareUrl}
                style={{ marginRight}}
            >
                <FacebookMessengerIcon size={iconSize} round={true} />
            </FacebookMessengerShareButton>
            <TwitterShareButton
                url={shareUrl}
                title={articleTitle}
                hashtags={data?.tags}
                style={{ marginRight}}>
                <TwitterIcon size={iconSize} round={true} />
            </TwitterShareButton>
            <LineShareButton
                url={shareUrl}
                title={articleTitle}
                style={{ marginRight}}
            >
                <LineIcon size={iconSize} round={true} />
            </LineShareButton>
            <WeiboShareButton
                url={shareUrl}
                title={articleTitle}
                image={articleImage}
                style={{ marginRight}}
            >
                <WeiboIcon size={iconSize} round={true} />
            </WeiboShareButton>
            <WhatsappShareButton
                url={shareUrl}
                title={articleTitle}
                style={{ marginRight}}
            >
                <WhatsappIcon size={iconSize} round={true} />
            </WhatsappShareButton>
            
        </>
    )
}
