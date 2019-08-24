import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Info from '../components/info'
import ArticlePreview from '../components/article-preview'



class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (

      
      <div style={{ background: '#fff' }}>
          <Helmet defaultTitle="Matrixblend Media"
            titleTemplate="Matrixblend Media %s">
          <meta charSet="utf-8" />
          <title>| Inspire | Ideas | Inspiration</title>
          <meta name="Matrixblend Media" content="Inspiration | Home business | Music Business | Reviews" />
    <meta property="og:type" content="article" />
          <description>An blog information site providing information for entreprenuers, musicians, artist, developers, job seekers, visionaries. </description>
          <script type="text/javascript" src='/js/browser.min.js'></script>
          <script type="text/javascript" src='/js/breakpoints.min.js'></script>
          <script type="text/javascript" src='/js/util.min.js'></script> 
          <script type="text/javascript" src='/js/main.js'></script>
        
        </Helmet>
       
        <Hero data={author.node} />
        <Info />
        <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              )
            })}
          </ul>
        </div>
        </div>
     
    )
    
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
             ...GatsbyContentfulSizes_withWebp
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            sizes(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
        }
      }
    }
  }
`
