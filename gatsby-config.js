require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Brianna Sharpe`,
    description: `Alberta based freelance writer and journalist focused on health, LGBTQ2S+, parenting, and the environment.`,
    keywords: [
      `writer`,
      `journalist`,
      `reporter`,
      `alberta`,
      `calgary`,
      `essayist`,
      `LGBTQ`,
      `LGBTQ2S+`,
      `health`,
      `education`,
      `environment`,
      `parenting`,
    ],
    author: `Brianna Sharpe`,
    twitter: `@sharpe_bri`,
    siteUrl: `https://www.briannasharpe.com`, //Change to you site address, required for sitemap.xml and robots.txt file
    menuLinks: [
      {
        name: `Published Work`,
        link: `/work`,
        type: `internal`,
      },
      {
        name: `Bio`,
        link: `/bio`,
        type: `internal`,
      },
      {
        name: `Contact`,
        link: `/contact`,
        type: `internal`,
      },
    ],
    socialLinks: [
      {
        name: `Email`,
        link: `sharpe.brianna@gmail.com`,
        location: `footer`, //Options are "all", "header", "footer"
      },
      {
        name: `Twitter`,
        link: `https://www.twitter.com/sharpe_bri`,
        location: `all`, //Options are "all", "header", "footer"
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-catalyst-hydrogen`,
      options: {
        sanityProjectId: process.env.SANITY_PROJECT_ID,
        sanityDataset: process.env.SANITY_DATASET,
        sanityToken: process.env.SANITY_TOKEN,
        useColorMode: false,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brianna Sharpe`,
        short_name: `BSharpe`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cccccc`,
        display: `minimal-ui`,
        icon: `content/assets/catalyst-site-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/**/*.html": [
            "cache-control: public",
            "cache-control: max-age=0",
            "cache-control: must-revalidate",
          ],
          "/page-data/*.json": [
            "cache-control: public",
            "cache-control: max-age=0",
            "cache-control: must-revalidate",
          ],
          "/app-data.json": [
            "cache-control: public",
            "cache-control: max-age=0",
            "cache-control: must-revalidate",
          ],
          "/static/*": [
            "cache-control: public",
            "cache-control: max-age=31536000",
            "cache-control: immutable",
          ],
        },
      },
    },
  ],
}
