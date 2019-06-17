import React from 'react';
import { css } from '@emotion/core';

const footerStyles = css`
	background: #000;
	color: #FFF;
	padding: 30px;
`
export class Footer extends React.Component {
	public render() {
		return (
			<footer css={footerStyles}>
				Made with 💚 by Deloitte Digital
			</footer>
		);
	}
}