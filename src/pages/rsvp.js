// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout';
import '../styles/index.css';
import { StaticImage } from 'gatsby-plugin-image'




// Step 2: Define your component
const RsvpPage = ({ location }) => {
  
  const currentPage = location.pathname.replace('/', '');

  return (
    <Layout currentPage={currentPage}>
      <div className="rsvp-page__inner">
        <h1 className="page-title">RSVP</h1>
        <form>
          <fieldset className="main-form">
            <textarea placeholder="Your Name(s)"></textarea>
            <div className="radio-fieldset">
              <label className="form__radio" htmlFor="rsvp_yes">
                <input id="rsvp_yes" type="radio" name="response" value="yes" /><span>Graciously accepts</span>
              </label>
              <label className="form__radio" htmlFor="rsvp_no">
                <input id="rsvp_no" type="radio" name="response" value="no" /><span>Respectfully declines</span>
              </label>
            </div>
          </fieldset>
          
        
        </form>
      </div>
    </Layout>
  )
}
// Step 3: Export your component
export default RsvpPage