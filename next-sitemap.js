module.exports = {
  siteUrl: 'www.yourwebsite.com',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['/genesys-dev.vercel.app/server-sitemap.xml'],
  },
}
