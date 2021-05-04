import React from "react"
import { graphql } from 'gatsby'



const IntegrationTemplate = ({ data }) => 
    <div>
      {JSON.stringify(data, null, 4)}
    </div>

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            img
            permalink
            slug
            subtitle
            title
          }
        }
      }
    }
  }
`

export default IntegrationTemplate


  // query ($slug: String!) {
  //   markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      
  //     frontmatter {
  //       slug
  //       title
  //     }
  //   }
  // }