import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { container } from './layout.module.css';

const Layout = ({ pageTitle, children, currentPage}) => {
  const data = useStaticQuery(graphql`
  query  {
    site {
      siteMetadata {
        title
      }
    }
  }`);

  return (
    <main className={container + ' is-' + currentPage}>
      <title>The Halsey Wedding</title>
      <nav className="site-nav">
        <ul className="site-nav__ul">
          <li className="site-nav__li"><Link className="site-nav__a" to="/rsvp">RSVP</Link></li>
          <li className="site-nav__li"><Link className="site-nav__a" to="/travel">Accommodations</Link></li>
          
          {currentPage !== 'home' &&
            <li className="site-nav__li is-home"><Link className="site-nav__a" to="/">Home</Link></li>
          }
          
          <li className="site-nav__li"><Link className="site-nav__a" to="/shuttle">Transportation</Link></li>
          <li className="site-nav__li"><a className="site-nav__a" target="_blank" href="https://zola.com/registry/thehalseywedding">Registry</a></li>
        </ul>
      </nav>
      {children}
    </main>
  ) 
}

export default Layout;