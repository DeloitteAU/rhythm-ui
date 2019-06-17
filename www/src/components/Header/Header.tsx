import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

const headerStyles = css`
	padding: 30px;
	border-bottom: 1px solid rgb(233, 236, 239);
`
export class Header extends React.Component {
	public render() {
		return (
			<header css={headerStyles}>
				<Link to="/">Rhythm UI Design System</Link>
			</header>
		);
	}
}