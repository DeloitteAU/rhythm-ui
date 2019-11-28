import {css} from '@emotion/core';

const navigationStyles = css`
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li {
		margin: 0;
		padding: 0;
		display: block;
	}

	a {
		color: rgb(54, 49, 61);
		padding: 8px 16px 8px 24px;
		position: relative;
		z-index: 1;
		width: 100%;
		display: block;
		text-decoration: none;
		text-transform: capitalize;
	}

	a:before,
	a:after {
		content: "";
		left: calc(0.5rem);
		top: 17px;
		height: 8px;
		position: absolute;
		width: 8px;
		transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
	}

	a:after {
		opacity: 0;
		transform: translateX(-14px);
		width: 22px;
		background: #208834;
		border-radius: 4px;
	}

	a:before {
		transform: scale(0.1);
		border-radius: 100%;
	}

	a:hover:before {
		transform: scale(1);
		background: #208834;
	}

	a.active,
	a:hover {
		color: #208834;
	}

	a.active:after {
		opacity: 1;
	}
`;

export const level1 = css`
	li a {
		font-size: 18px;
	}
`;

export const level2 = css`
	li a {
		font-size: 14px;
	}
`;

export default navigationStyles;
