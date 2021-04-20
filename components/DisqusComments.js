import { DiscussionEmbed } from "disqus-react"

const DisqusComments = ({ item }) => {
    const disqusShortname = "travel-tips-2"
    const disqusConfig = {
        url: "https://traveltips.vercel.app/",
        identifier: item.id, // Single post id
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