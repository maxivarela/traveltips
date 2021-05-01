const withVideos = require('next-videos')

module.exports = withVideos({
    assetPrefix: 'https://www.youtube.com/',

    webpack(config, options) {
        return config
    }
})