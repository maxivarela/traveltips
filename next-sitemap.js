module.exports = {
    siteUrl: 'https://hacktravels.com/',
    changefreq: 'daily',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ]
    },
}