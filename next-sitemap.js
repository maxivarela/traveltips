module.exports = {
    siteUrl: 'https://hacktravels.com/',
    changefreq: 'daily',
    priority: 0.7,
    generateRobotsTxt: true,
    sitemapSize: 10000,
    exclude: ['/404', '/add', '/edit', '/signin'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ]
    },
}