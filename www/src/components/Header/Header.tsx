import React from 'react';
import {Link} from 'gatsby';
import headerStyles from './Header.css';

class Header extends React.Component {
	public render() {
		return (
			<header css={headerStyles}>
				<Link to="/">Rhythm UI Design System</Link>
			</header>
		);
	}
}

export default Header;