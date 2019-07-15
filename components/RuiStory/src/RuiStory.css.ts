/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {css, CSSResult} from 'lit-element';

const bp = (size: string, rules: CSSResult): CSSResult => {
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
		 * @variable The base text colour of the story
		 */
		--rui-story__color: #000;

		/**
		 * @variable The base background colour of the story
		 */
		--rui-story__background-color: #F2F2F2;

		/**
		 * @variable The colour of the bottom border stripe
		 */
		--rui-story__border-bottom-color: #000;

		/**
		 * @variable The width of the bottom border stripe
		 */
		--rui-story__border-bottom-width: 4px;

		/**
		 * @variable The styling for the bottom border stripe
		 */
		--rui-story__border-bottom: var(--rui-story__border-bottom-width) solid var(--rui-story__border-bottom-color);

		/**
		 * @variable Font size of the domain text
		 */
		--rui-story__domain-font-size: 11px;

		/**
		 * @variable Content text colour
		 */
		--rui-story__dynamic-content-color: #5F5F5F;

		/**
		 * @variable Content font-size
		 */
		--rui-story__dynamic-content-font-size: 16px;

		/**
		 * @variable cta text colour
		 */
		--rui-story__cta-color: #000;

		/**
		 * @variable cta font size
		 */
		--rui-story__cta-font-size: 14px;

		/**
		 * @variable cta text line height
		 */
		--rui-story__cta-line-height: 1.43;

		/**
		 * @variable cta text letter spacing
		 */
		--rui-story__cta-letter-spacing: -0.1px;

		/**
		 * @variable Hover colour of the cta
		 */
		--rui-story__cta-color-hover: #5F5F5F;

		/**
		 * @variable The default image background colour
		 */
		--rui-story__img-container-background-color: #000;

		/**
		 * @variable The height of the story image
		 */
		--rui-story__img-container-height: 216px;

		/**
		 * @variable The minimum height for the content of the story
		 */
		--rui-story__content-container-min-height: 348px;

		/**
		 * @variable The padding for the sides of the content
		 */
		--rui-story__content-container-padding-sides: 24px;

		/**
		 * @variable The padding for the top and bottom of the content
		 */
		--rui-story__content-container-padding-top-bottom: 34px;

		/**
		 * @variable The padding for the content
		 */
		--rui-story__content-container-padding: var(--rui-story__content-container-padding-top-bottom) var(--rui-story__content-container-padding-sides);

		/**
		 * @variable Title text colour
		 */
		--title-colour: #000;

		/**
		 * @variable The font size of the title
		 */
		--title-font-size: 22px;

		/**
		 * @variable The line height of the title
		 */
		--title-line-height: 26px;

		/**
		 * @variable Letter spacing of title
		 */
		--title-letter-spacing: -0.5px;

		/**
		 * @variable Margin of title
		 */
		--title-margin: 6px 0 10px 0;
	}

	/* BP variable overrides */
	${bp('m', css`
		:host {
			--rui-story__img-container-height: 260px;
		}
	`)}

	${bp('l', css`
		:host {
			--rui-story__img-container-height: 228px;
		}
	`)}

	${bp('xl', css`
		:host {
			--rui-story__img-container-height: 288px;
			--rui-story__content-container-min-height: 352px; 
			--rui-story__content-container-padding-sides: 40px;
			--title-font-size: 28px;
			--title-line-height: 36px;
		}
	`)}

	${bp('xxl', css`
		:host {
			--rui-story__img-container-height: 392px;
		}
	`)}
`;

/**
 * RuiStory CSS
 */
export const layout = css`
	.story {
		color: var(--rui-story__color);
		width: 100%;
		background-color: var(--rui-story__background-color);
		border-bottom: var(--rui-story__border-bottom);
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.img-container {
		height: var(--rui-story__img-container-height);
		text-align: center;
		background-color: var(--rui-story__img-container-background-color);
	}

	.content-container {
		padding: var(--content-container-padding);
		min-height: calc(var(--rui-story__content-container-min-height) - (2 * var(--padding-top-bottom)));
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.domain {
		font-size: var(--rui-story__domain-font-size);
		text-transform: uppercase;
		margin: 0;
		font-weight: bold;
	}

	.title {
		font-size: var(--title-font-size);
		line-height: var(--title-line-height);
		letter-spacing: var(--title-letter-spacing);
		margin: var(--title-margin);
		font-weight: bold;
		overflow: hidden;
		word-break: break-word;
	}

	.dynamic-content {
		flex: 1;
		color: var(--rui-story__dynamic-content-color);
		font-size: var(--rui-story__dynamic-content-font-size);
	}

	.img-container > ::slotted(img) {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.cta-container > ::slotted(a) {
		color: var(--rui-story__cta-color);
		text-decoration: none;
		font-size: var(--rui-story__cta-font-size);
		font-weight: bold;
		line-height: var(--rui-story__cta-line-height);
		letter-spacing: var(--rui-story__cta-letter-spacing);
	}

	.cta-container > ::slotted(a:hover) {
		color: var(--rui-story__cta-color-hover);
	}
`;

export default [variables, layout];