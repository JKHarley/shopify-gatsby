import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Shopify API Test</h1>
    <p>
      product: {data.allShopifyProduct.edges.map(({ node }) => (
        <div>{node.title} <img src={node.images[0].originalSrc} alt='Shirt' style={{'width': '200px'}} /> </div>
      ))}
    </p>
  </Layout>
)

export const query = graphql`
  {
    allShopifyProduct {
      edges {
        node {
          title
          images {
            originalSrc
          }
        }
      }
    }
  }
`

export default IndexPage
