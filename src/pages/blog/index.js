import * as React from 'react';
import Layout from '../../components/layout';
import { graphql, Link } from 'gatsby';


const BlogPage = ({ data }) => {  
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <Link to={`/blog/${node.slug}`}>Read Blog</Link>
          </article>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }`


export default BlogPage;