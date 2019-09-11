import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import RuiGrid from '@rhythm-ui/grid-react';

import * as styles from './Header.css';
import Search from '../Search/Search';

import navHeader from '../../data/headerNav.yml';

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
						<RuiGrid>
							<nav className="l-12" css={styles.nav}>
								<Link to="/" css={styles.brand}>Rhythm UI</Link>
								<ul css={styles.mainNav}>
									{navHeader.items.map(link => (
										<li>
											<Link
												key={link.title}
												title={link.title}
												to={link.to}
												activeClassName="active"
												partiallyActive={true}
											>
												{link.title}
											</Link>
										</li>
									))}
								</ul>
								<div css={styles.utils}>
									<Search searchIndex={data.siteSearchIndex.index} />
									<a href="https://github.com/DeloitteDigitalAPAC/rhythm-ui" target="_blank">
										<svg id="icon-github" width="17" height="16" viewBox="0 0 17 16"><path d="M8.25 0C3.83214 0 0.25 3.58313 0.25 7.99848C0.25 11.5329 2.54286 14.5275 5.72143 15.5861C5.77143 15.5965 5.81429 15.6 5.85714 15.6C6.15357 15.6 6.26786 15.3876 6.26786 15.203C6.26786 15.0115 6.26071 14.5101 6.25714 13.8415C5.95714 13.9077 5.68929 13.9355 5.45 13.9355C3.91071 13.9355 3.56071 12.769 3.56071 12.769C3.19643 11.8463 2.67143 11.599 2.67143 11.599C1.975 11.122 2.66786 11.108 2.72143 11.108H2.725C3.52857 11.1777 3.95 11.9368 3.95 11.9368C4.35 12.6193 4.88571 12.8108 5.36429 12.8108C5.73929 12.8108 6.07857 12.6924 6.27857 12.6019C6.35 12.0865 6.55714 11.7348 6.78571 11.5329C5.01071 11.3309 3.14286 10.6449 3.14286 7.58063C3.14286 6.70661 3.45357 5.99277 3.96429 5.43563C3.88214 5.23366 3.60714 4.41884 4.04286 3.31848C4.04286 3.31848 4.1 3.30107 4.22143 3.30107C4.51071 3.30107 5.16429 3.40902 6.24286 4.14027C6.88214 3.96268 7.56429 3.87563 8.24643 3.87214C8.925 3.87563 9.61071 3.96268 10.25 4.14027C11.3286 3.40902 11.9821 3.30107 12.2714 3.30107C12.3929 3.30107 12.45 3.31848 12.45 3.31848C12.8857 4.41884 12.6107 5.23366 12.5286 5.43563C13.0393 5.99625 13.35 6.71009 13.35 7.58063C13.35 10.6519 11.4786 11.3274 9.69643 11.5259C9.98214 11.7731 10.2393 12.2606 10.2393 13.0058C10.2393 14.0748 10.2286 14.9384 10.2286 15.1996C10.2286 15.3876 10.3393 15.6 10.6357 15.6C10.6786 15.6 10.7286 15.5965 10.7786 15.5861C13.9607 14.5275 16.25 11.5294 16.25 7.99848C16.25 3.58313 12.6679 0 8.25 0Z" /></svg>
									</a>
								</div>
							</nav>
						</RuiGrid>
					</header>
				)}
			/>
		);
	}
}

export default Header;
