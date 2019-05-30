import {css, CSSResult} from 'lit-element';


export const bp = (size: string, rules: CSSResult): CSSResult => {
	switch (size.toLowerCase()) {
		case 'm':
			return css` @media screen and (min-width: 800px) { ${rules} } `;
		case 'l':
			return css` @media screen and (min-width: 1200px) { ${rules} } `;
		case 'xl':
			return css` @media screen and (min-width: 1400px) { ${rules} } `;
		case 'xxl':
			return css` @media screen and (min-width: 1800px) { ${rules} } `;
		default:
			return rules;
	}
}

/**
 * RuiButton Shadow Dom CSS
 */
export default css`
	.news-listing-item {
		width: 100%;
		background-color: var(--bg);
		border-bottom: 4px solid var(--bottom-border-color);
	}

	.img-container {
		height: var(--img-height);
		text-align: center;
		background-color: var(--img-bg);
	}

	.content-container {
		padding: var(--padding-top-bottom) var(--padding-sides);
		min-height: calc(var(--min-content-height) - (2 * var(--padding-top-bottom)));
		display: flex;
		flex-direction: column;
	}

	.domain {
		font-size: 11px;
		text-transform: uppercase;
		margin: 0;
		font-weight: bold;
	}

	.title {
		font-size: 28px;
		line-height: 36px;
		letter-spacing: -0.5px;
		margin: 6px 0 10px 0;
		font-weight: bold;
	}

	.dynamic-content {
		flex: 1;
	}
`;
