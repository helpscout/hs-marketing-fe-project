const footerNav = require('./content/siteMetadata/footerNav')
const mainNav = require('./content/siteMetadata/mainNav')

module.exports = {
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
