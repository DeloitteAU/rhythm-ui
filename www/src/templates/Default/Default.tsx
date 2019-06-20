import React from 'react';
import RuiLayout from '@rhythm-ui/layout-react';
import {StaticQuery, graphql} from "gatsby"
import {Navigation} from '../../components/Navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const Default = ({children}) => (
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
	  <RuiLayout type="picasso">
		<Header />
		<main>
		  {children}
		</main>
		<Navigation />
		<Footer />
	  </RuiLayout>
	)}
  />
);

export default Default;
