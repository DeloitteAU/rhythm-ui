import React from 'react';
import {StaticQuery, graphql, Link} from 'gatsby';

import navigationStyles from './Navigation.css';

export const Navigation = () => (
	<StaticQuery
		query={graphql`
			query DocsQuery {
				allMdx {
					nodes {
						id
						frontmatter {
							title
						}
						fields {
							relativeUrlPath
							nodeTitle
							relativeUrlPath
						}
					}
				}
			}
		`}
		render={data => (
			<nav id="nav" css={navigationStyles}>
				<ul>
					{data.allMdx.nodes
						.filter(
							n =>
								n.fields.relativeUrlPath.indexOf('/docs/components') === 0 ||
								n.fields.relativeUrlPath.indexOf('/change-log') === 0,
						)
						.map(node => (
							<li key={node.id}>
								<Link to={node.fields.relativeUrlPath}>{node.frontmatter.title}</Link>
							</li>
						))}
				</ul>
			</nav>
		)}
	/>
);
export default Navigation;
