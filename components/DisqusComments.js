// import {useState} from 'react'
import { DiscussionEmbed } from "disqus-react"

const DisqusComments = ({ item }) => {

    // const [disqusConfig, setDisqusConfig] = useState({});

    // setDisqusConfig({ url: "https://traveltips.vercel.app/tips" + window.location.href.split('/').pop(), identifier: post.id, title: post.title });

    const disqusShortname = "travel-tips-2"
    const disqusConfig = {
        url: "https://traveltips.vercel.app/tips",
        identifier: window.location.href.split('/').pop(), // Single post id
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