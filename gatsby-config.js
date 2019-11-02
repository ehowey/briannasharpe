require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Brianna Sharpe`,
    description: `Centering the margins: Writer, creator, and coffee drinker.`,
    author: `Eric Howey`,
    siteUrl: `https://www.briannasharpe.com`, //Change to you site address, required for sitemap.xml and robots.txt file
    pageLinks: [
      {
        name: `Published Work`,
        link: `/work`,
      },
      {
        name: `Bio`,
        link: `/bio`,
      },
      {
        name: `Contact`,
        link: `/contact`,
      },
    ],
    // Necessary to not throw a build error, anchorlinks are unused.
    anchorLinks: [
      {
        name: `Anchor 1`,
        link: `#anchor1`,
      },
      {
        name: `Anchor 2`,
        link: `#anchor2`,
      },
    ],
    socialLinks: [
      {
        name: `Email`,
        url: `sharpe.brianna@gmail.com`,
        location: `footer`, //Options are "all", "header", "footer"
      },
      {
        name: `Twitter`,
        url: `https://www.twitter.com/sharpe_bri`,
        location: `all`, //Options are "all", "header", "footer"
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-catalyst-core`,
      options: {
        displaySiteLogo: false,
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brianna Sharpe`,
        short_name: `BSharpe`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cccccc`,
        display: `minimal-ui`,
        icon: `content/assets/logo-512.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
