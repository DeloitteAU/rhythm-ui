import React from 'react';
import footerStyles from './Footer.css';

class Footer extends React.Component {
	public render() {
		return (
			<footer css={footerStyles}>
				Made with 💚 by Deloitte Digital
			</footer>
		);
	}
}

export default Footer;
