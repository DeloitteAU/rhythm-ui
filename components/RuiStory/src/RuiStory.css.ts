/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
 *  RuiStory Variables
 */
export const variables = css`
	:host {
		/**
		 * @variable The default image background colour
		 */
		--img-bg: #000;

		/**
		 * @variable The height of the story image
		 */
		--img-height: 216px;

		/**
		 * @variable The minimum height for the content of the story
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

		/**
		 * @variable The font size of the title
		 */
		--title-font-size: 22px;

		/**
		 * @variable The letter spacing of the title
		 */
		--title-letter-spacing: 26px;

		/**
		 * @variable The default colour for cta
		 */
		--title-colour: #000;

		/**
		 * @variable The default hover colour of the cta
		 */
		--cta-colour-hover: #5F5F5F;

		/**
		 * @variable The default colour of the story content
		 */
		--content-colour: #5F5F5F;
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
			--title-font-size: 28px;
			--title-letter-spacing: 36px;
		}
	`)}

	${bp('xxl', css`
		:host {
			--img-height: 392px;
		}
	`)}
`;

/**
 * RuiStory CSS
 */
export const layout = css`
	.story {
		width: 100%;
		background-color: var(--bg);
		border-bottom: 4px solid var(--bottom-border-color);
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.img-container {
		height: var(--img-height);
		text-align: center;
		background-color: var(--img-bg);
	}

	.content-container {
		padding: var(--padding-top-bottom) var(--padding-sides);
		min-height: calc(var(--min-content-height) - (2 * var(--padding-top-bottom)));
		flex: 1;
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
		font-size: var(--title-font-size);
		line-height: var(--title-letter-spacing);
		letter-spacing: -0.5px;
		margin: 6px 0 10px 0;
		font-weight: bold;
		overflow: hidden;
		word-break: break-word;
	}

	.dynamic-content {
		flex: 1;
		color: var(--content-colour);
		font-size: 16px;
	}

	.img-container > ::slotted(img) {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.cta-container > ::slotted(a) {
		color: var(--cta-colour);
		text-decoration: none;
		font-size: 14px;
		font-weight: bold;
		line-height: 1.43;
		letter-spacing: -0.1px;
	}

	.cta-container > ::slotted(a:hover) {
		color: var(--cta-colour-hover);
	}
`;

export default [variables, layout];