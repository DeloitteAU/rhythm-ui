import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import * as styles from './Header.css';
import Search from '../Search/Search';

export class Header extends React.Component {
	public render() {
		return (
			<StaticQuery
				query={graphql`
					query SearchIndexQuery {
						siteSearchIndex {
							index
						}
					}
				`}
				render={data => (
					<header css={styles.headerStyles}>
						<Link to="/">Rhythm UI Design System</Link>
						<ul css={styles.nav}>
							<li><Link to="/docs/components/rui-expand-collapse">Components</Link></li>
						</ul>
						<Search searchIndex={data.siteSearchIndex.index} />
					</header>
				)}
			/>
		);
	}
}

export default Header;
