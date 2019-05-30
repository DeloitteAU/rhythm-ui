import {css, CSSResult} from 'lit-element';

const bp = (size: string, rules: CSSResult) => {
	switch (size.toLowerCase()) {
		case 'm':
			return css` @media screen and (min-width: 768px) { ${rules} } `;
		case 'l':
			return css` @media screen and (min-width: 1024px) { ${rules} } `;
		case 'xl':
			return css` @media screen and (min-width: 1440px) { ${rules} } `;
		case 'xxl':
			return css` @media screen and (min-width: 1920px) { ${rules} } `;
		default:
			return rules;
	}
}

/**
 *  RuiNewsListingItem Variables
 */
export const variables = css`
	:host {
		/**
		 * @variable The default image background colour
		 */
		--img-bg: #000;

		/**
		 * @variable The height of the news item image
		 */
		--img-height: 216px;

		/**
		 * @variable The minimum height for the content of the news item
		 */
		--min-content-height: 348px;

		/**
		 * @variable The padding for the top and bottom of the content
		 */
		--padding-top-bottom: 34px;

		/**
		 * @variable The padding for the sides of the content
		 */
		--padding-sides: 24px;

		/**
		 * @variable The base bg of the news item
		 */
		--bg: #F2F2F2;

		/**
		 * @variable The colour of the bottom border strip
		 */
		--bottom-border-color: #000;
	}

	/* BP variable overrides */
	${bp('m', css`
		:host {
			--img-height: 260px;
		}
	`)}

	${bp('l', css`
		:host {
			--img-height: 228px;
		}
	`)}

	${bp('xl', css`
		:host {
			--img-height: 288px;
			--min-content-height: 352px; 
			--padding-sides: 40px;
		}
	`)}

	${bp('xxl', css`
		:host {
			--img-height: 392px;
		}
	`)}
`;

/**
 * RuiNewsListingItem CSS
 */
export const layout = css`
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

export default [variables, layout];