import {css} from '@emotion/core';

export const headerStyles = css`
	padding: 30px;
	border-bottom: 1px solid rgb(233, 236, 239);
	display: flex;
	justify-content: space-between;

	/*
	color: #FFFFFF;
	background: #893799;
	*/
`;

export const nav = css`
	list-style: none;
	margin: 0;
	padding: 0;

	li {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	a {
		color: #673AB7;
		font-weight: 700;
		text-decoration: none;
		font-size: 14px;

		&:hover {
			color: #311B92;
		}
	}
`;


export default headerStyles;
