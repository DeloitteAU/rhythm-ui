import {css} from '@emotion/core';

export const headerStyles = css`
	padding: 0;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);

	/*
	color: #FFFFFF;
	background: #893799;
	*/
`;

export const brand = css`
	display: inline-block;
`;

export const nav = css`
	flex-basis: auto;
	display: flex;
	justify-content: space-between;
	position: relative;
	align-items: center;
	padding: 0.5rem 1rem;
	
	@media (min-width: 1200px) {
		flex-flow: row nowrap;
		justify-content: flex-start;
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

export const mainNav = css`
	display: flex;
	padding-left: 32px;
	
	li {
		margin: 0;
		padding: 0 14px;
		list-style: none;
	}
`;

export const utils = css`
	align-self: flex-end;
	margin-left: auto;
	display: flex;

	> * {
		padding: 0 14px;
	}
`;

export default headerStyles;
