let contentfulConfig



try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require('./.contentful')
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || "gpkrfkvq2nnl",
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || "r6_JHHYpicYD6HQ6B-yLL07xUhNvo5VvRL9JcQ-nHds",
}



const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}



module.exports = {
  siteMetadata: {
    title: `Matrixblend Media`,
    titleTemplate: "%s . Matrixblend",
    description: `Media that influence, insight, ideas, and inspiration.`,
    author: `@_joshhead_`,
    url: "https://www.matrixblendmedia.com", // No trailing slash allowed!
    image: "/favicon.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@matrixblend",
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sharp`,
     {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },{
      resolve: `gatsby-plugin-gtag`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-144805370-1",
      },
    },

   
  ]
}
