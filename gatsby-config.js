const footerNav = require('./content/siteMetadata/footerNav')
const mainNav = require('./content/siteMetadata/mainNav')

module.exports = {
  flags: {
    DEV_SSR: false //note: Gatsby is testing something and had automatically set this flat to true. With the flag set to true, CSS styles kept failing in dev mode!!!
  },
  siteMetadata: {
    title: `Help Scout`,
    description: `Make every customer service interaction a more human one. Use Help Scout. Trusted by over 12,000 businesses in 140 countries. Get started for free.`,
    author: `Help Scout`,
    twitter: `@helpscout`,
    siteUrl: 'https://www.helpscout.com',
    footerNav,
    mainNav,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`,
        ignore: [
          `**/fonts/*`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
