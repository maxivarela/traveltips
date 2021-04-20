import { DiscussionEmbed } from "disqus-react"

// const ident = window.location.href.split('/').pop()

const DisqusComments = ({ item, ident }) => {

    const disqusShortname = "travel-tips-2"
    const disqusConfig = {
        url: "https://traveltips.vercel.app/tips",
        identifier: ident, // Single post id
        title: item.title // Single post title
    }
    return (
        <div>
            <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
            />
            {console.log('asdfsd',disqusConfig)}
        </div>
    )
}
export default DisqusComments;