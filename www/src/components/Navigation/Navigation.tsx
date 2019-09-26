import React from 'react';
import {Link} from 'gatsby';

import navigationStyles, {level1, level2} from './Navigation.css';

export const Navigation = ({nodes}) => (
	<nav id="nav" css={navigationStyles}>
		<ul css={level1}>
			{nodes && nodes.length > 0 && nodes.map(node => (
				<li key={node.id}>
					<Link
						activeClassName="active"
						to={node.fields.relativeUrlPath}
					>
						{node.frontmatter.title}
					</Link>
					{node.children && node.children.length && (
						<ul css={level2}>
							{node.children.map(child => (
								<li key={child.id}>
									<Link
										activeClassName="active"
										to={child.fields.relativeUrlPath}
									>
										{child.frontmatter.title}
									</Link>
								</li>
							))}
						</ul>
					)}
				</li>
			))}
		</ul>
	</nav>
);
export default Navigation;
