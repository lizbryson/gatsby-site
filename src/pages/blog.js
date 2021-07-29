import * as React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {data.allFile.nodes.map(blog => <li key={blog.name}>{blog.name}</li>)}
      </ul>
    </Layout>
  )
}

export const query = graphql `
  {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }
`


export default BlogPage;