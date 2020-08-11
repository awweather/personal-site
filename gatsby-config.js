/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const dotenv = require("dotenv")
dotenv.config()

const { githubApiQuery } = require("./github-api")

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Anthony Weatherly",
    description: "I'm a Software Engineer who loves JavaScript",
    author: "Anthony Weatherly",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-github",
      options: {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
        },
        queries: [
          `{ viewer {                 
                  pinnedItems(first: 5, types: REPOSITORY){
                   nodes {
                     ... on Repository {
                    id                       
                    name
                    url
                    description
                    homepageUrl
                  }
                 }
                }}
              }`,
        ],
      },
    },
  ],
}
