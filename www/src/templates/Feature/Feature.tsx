import React, {ReactNode, SFC} from 'react';
import RuiLayout from '@rhythm-ui/layout-react';
import {StaticQuery, graphql} from 'gatsby';
import {Header} from '../../components/Header';
import {Footer} from '../../components/Footer';

interface IProps {
	children: ReactNode,
}

export const Feature: SFC<IProps> = ({children}) => (
	<StaticQuery
		query={graphql`
			query SiteTitle2Query {
				site {
					siteMetadata {
					title
				}
			}
		}
	`}
		render={data => (
			<RuiLayout type="monet">
				<Header />
				<main>
					{children}
				</main>
				<Footer />
			</RuiLayout>
		)}
	/>
);

export default Feature;
