module.exports = {
  pathPrefix: `/projects`,
  siteMetadata: {
    title: `My projects`,
    description: ``,
    author: `@chetan_raj`,
    projects:  [
      {
        name: 'Javascript Essentials',
        description: '',
        tech: 'Vue',
        url: 'http://javascriptessentials.netlify.com'
      },
      {
        name: 'Javascript Essentials [Instagram]',
        description: '',
        tech: '',
        url: 'https://www.instagram.com/javascriptessentials/'
      },
      {
        name: 'Snpt',
        description: 'Code snippets made easy.',
        tech: 'React',
        url: 'https://snpt.netlify.com/'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        display: `minimal-ui`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
