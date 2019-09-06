import React from 'react';
import {Link} from 'gatsby';

import navigationStyles from './Navigation.css';

export const Navigation = ({nodes}) => (
	<nav id="nav" css={navigationStyles}>
		<ul>
			{nodes && nodes.length > 0 && nodes.map(node => (
				<li key={node.id}>
					<Link
						activeClassName="active"
						to={node.fields.relativeUrlPath}
					>
						{node.frontmatter.title}
					</Link>
				</li>
			))}
		</ul>
	</nav>
);
export default Navigation;
