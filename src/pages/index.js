// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout';
import '../styles/index.css';
import { StaticImage } from 'gatsby-plugin-image'


// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout currentPage="home">
        {/* <h1 className="page-title">Elizabeth Bryson + Ryan Halsey</h1> */}
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage