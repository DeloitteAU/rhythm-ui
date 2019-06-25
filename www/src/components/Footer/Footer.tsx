import React from 'react';
import footerStyles from './Footer.css';

export class Footer extends React.Component {
	public render() {
		return (
			<footer css={footerStyles}>
				Made with <span role="img" aria-label="love">💚</span> by Deloitte Digital
			</footer>
		);
	}
}

export default Footer;
