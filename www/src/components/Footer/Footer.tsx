import React from 'react';
import footerStyles from './Footer.css';

import logo from '../../images/logo.png';

export class Footer extends React.Component {
	public render() {
		return (
			<footer css={footerStyles}>
				<img src={logo} alt="Deloitte Digital Logo" width={140} />
			</footer>
		);
	}
}

export default Footer;
