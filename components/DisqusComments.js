import { DiscussionEmbed } from "disqus-react"

// const ident = window.location.href.split('/').pop()

const DisqusComments = ({ item, id }) => {

    const disqusShortname = "travel-tips-2"
    const disqusConfig = {
        url: `https://traveltips.vercel.app/tips/${id}`,
        identifier: id, // Single post id
        title: item.title // Single post title
    }

    return (
        <div>
            <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
            />
        </div>
    )
}
export default DisqusComments;