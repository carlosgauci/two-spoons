module.exports = {
  siteMetadata: {
    title: `Two Spoons Cafe`,
    description: `Delicious Mediterranean food in the heart of Birkirkara, Malta.`,
    url: `https://twospoonsmalta.com/`,
    image: `site-img.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-anchor-links",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `two-spoons`,
        short_name: `twospoons`,
        start_url: `/`,
        background_color: `#202020`,
        theme_color: `#202020`,
        display: `minimal-ui`,
        icon: `src/images/fav.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
