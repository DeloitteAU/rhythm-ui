import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'
import headerStyles from './Header.css'
import Search from '../Search/Search'

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
					<header css={headerStyles}>
						<Link to="/">Rhythm UI Design System</Link>
						<Search searchIndex={data.siteSearchIndex.index} />
					</header>
				)}
			/>
		)
	}
}

export default Header
