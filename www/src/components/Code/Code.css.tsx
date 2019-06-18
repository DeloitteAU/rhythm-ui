import { css } from '@emotion/core';

export const codePreviewStyles = css`
	padding: 16px;
	border: 1px solid #CCC;
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
`
export const codeSnippetStyles = css`
	code[class*="language-"],
	pre[class*="language-"] {
		white-space: nowrap;
		overflow: scroll;
	}
`
export const tokenLine = css`
	white-space: pre;
`