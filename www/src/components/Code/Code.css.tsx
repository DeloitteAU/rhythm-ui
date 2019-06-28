import {css} from '@emotion/core';

export const codePreviewStyles = css`
	padding: 16px;
	background-color: #FFFFFF;
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-bottom: 0 none;

	header,
	footer,
	main,
	nav,
	aside {
		border: 1px solid #555;
		background: #F5F5F5;
		padding: 15px;
		height: auto;
		width: auto;
		border-radius: 2px;
		margin: 1px;
	}

	pre {
		margin-top: 0;
		margin-bottom: 0;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
`;

export const codeTabs = css`
	background: #011627;
	padding: 2px 16px 0 16px;
	display: flex;
	line-height: 1.4em;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	border-top-left-radius: 2px;
	border-top-right-radius: 2px;
	margin-top: -1px;

	> span,
	a {
		min-width: fit-content;
		position: relative;
		display: flex;
		white-space: nowrap;
		box-sizing: border-box;
		font-size: 13px;
		line-height: 1.4em;
		font-weight: 500;
		padding: 4px 10px 6px 10px;
	}

	> span {
		background: #111518;
		cursor: default;
		color: #FFF;
	}

	> a {
		text-decoration: none;
		color: #CCC;
	}

	+ pre {
		margin: 0;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
`;

export const fakeBrowserStyles = css`
	background-color: rgb(244, 245, 247);
	border-radius: 3px;
	padding: 0 8px 8px 8px;
`;

export const fakeBrowswerBarStyles = css`
	padding: 14px 0;
	overflow: hidden;

	> span {
		height: 10px;
		width: 10px;
		background-color: #CCC;
		border-radius: 10px;
		float: left;
		margin: 0 4px 0;
	}

	> span:first-of-type {
		background-color: #FF7F71;
	}
`;

