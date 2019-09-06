import React, {ReactNode, SFC} from 'react';
import RuiLayout from '@rhythm-ui/layout-react';
import {StaticQuery, graphql} from 'gatsby';
import {Navigation} from '../../components/Navigation';
import {Header} from '../../components/Header';
import {Footer} from '../../components/Footer';

interface IProps {
	children: ReactNode,
}

export const Default: SFC<IProps> = ({children}) => (
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

export default Default;
