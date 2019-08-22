require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Writer Name`,
    description: `Extends the base Catalyst Core theme to create a starter for freelance writers`,
    author: `Eric Howey`,
    siteUrl: `https://gatsby-starter-catalyst-writer.netlify.com`, //Change to you site address, required for sitemap.xml and robots.txt file
    menuLinks: [
      {
        name: `Published Work`,
        link: `/published-work`
      },
      {
        name: `Bio`,
        link: `/bio`
      },
      {
        name: `Contact`,
        link: `/contact`
      }
    ],
    socialLinks: [
      {
        name: `Email`,
        url: `eric@erichowey.dev`,
        location: `footer` //Options are "all", "header", "footer"
      },
      {
        name: `Twitter`,
        url: `https://www.twitter.com/erchwy`,
        location: `all` //Options are "all", "header", "footer"
      },
      {
        name: `Instagram`,
        url: `#`,
        location: `footer` //Options are "all", "header", "footer"
      }
    ]
  },
  plugins: [
    `gatsby-theme-catalyst-writer`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst-writer`,
        short_name: `catalyst writer`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/logo-512.png` // This path is relative to the root of the site.
      }
    }
  ]
};
