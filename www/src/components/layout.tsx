/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import {Navigation} from './Navigation';

import "./layout.css"

import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter";
import "@rhythm-ui/button";
import "@rhythm-ui/grid";
import "@rhythm-ui/layout";
import "@rhythm-ui/news-listing-item";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMdx {
          nodes {
            id
            fields {
              nodeTitle
              relativeUrlPath
            }
          } 
        }
      }
    `}
    render={data => (
      <rui-layout type="picasso">
        <header>
          
        </header>
        <main>{children}</main>
        <footer>
          Footer
        </footer>
        <nav>
          <Navigation />
        </nav>
      </rui-layout>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
