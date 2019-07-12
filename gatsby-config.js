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
    description: `Media that influence, insight, ideas, and inspiration.`,
    author: `@_joshhead_`,
    url: "https://www.matrixblendmedia.com", // No trailing slash allowed!
    image: "/images/", // Path to your image you placed in the 'static' folder
    twitterUsername: "@occlumency",
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    { 
      resolve: 'gatsby-plugin-sass',
      includePaths: ['src/sass/**/**'],
      options: {
        implementation: require("sass"),
      },
  },
    'gatsby-plugin-sharp',
     {
      resolve: '@nearform/gatsby-source-contentful',
      options: contentfulConfig,
    },
  
   
  ]
}
