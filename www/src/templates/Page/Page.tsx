import React, {ReactNode, SFC} from 'react';
import RuiLayout from '@rhythm-ui/layout-react';
import {StaticQuery, graphql} from 'gatsby';
import {Header} from '../../components/Header';
import {Footer} from '../../components/Footer';

interface IProps {
	children: ReactNode,
}

export const Page: SFC<IProps> = ({children}) => (
	<StaticQuery
		query={graphql`
			query PageQuery {
				site {
					siteMetadata {
					title
				}
			}
		}
	`}
		render={data => (
			<RuiLayout type="monet">
				<Header isFeature />
				<main>
					{children}
				</main>
				<Footer />
			</RuiLayout>
		)}
	/>
);

export default Page;
