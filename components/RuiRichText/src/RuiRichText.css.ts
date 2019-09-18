/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {css,} from 'lit-element';

/**
 *  RuiRichText Variables
 */
export const variables = css`
	:host {
		--base-grid-size: 4px;

		/****************************
		 * H1 STYLES
		 ***************************/

		/**
		 * @variable h1 font family
		 */
		--h1__font-family: 'Inter', system-ui, sans-serif;
		--h1__font-size: 60px;
		--h1__font-weight: bold;
		--h1__font-style: normal;
		--h1__line-height: 1.07;
		--h1__letter-spacing: -3px;
		--h1__color: var(--font-heading-color, #333333);
		--h1__margin-multiplier: 8;

		/****************************
		 * H2 STYLES
		 ***************************/

		/**
		 * @variable h2 font family
		 */
		--h2__font-family: 'Inter', system-ui, sans-serif;
		--h2__font-size: 36px;
		--h2__font-weight: bold;
		--h2__font-style: normal;
		--h2__font-stretch: normal;
		--h2__line-height: 1.11;
		--h2__letter-spacing: -0.5px;
		--h2__color: var(--font-heading-color, #333333);
		--h2__margin-multiplier: 2;

		/****************************
		 * H3 STYLES
		 ***************************/

		/**
		 * @variable h3 font family
		 */
		--h3__font-family: 'Inter', system-ui, sans-serif;
		--h3__font-size: 28px;
		--h3__font-weight: bold;
		--h3__font-style: normal;
		--h3__font-stretch: normal;
		--h3__line-height: 1.29;
		--h3__letter-spacing: -0.5px;
		--h3__color: var(--font-heading-color, #333333);
		--h3__margin-multiplier: 2;

		/****************************
		 * H4 STYLES
		 ***************************/

		/**
		 * @variable h4 font family
		 */
		--h4__font-family: 'Inter', system-ui, sans-serif;
		--h4__font-size: 22px;
		--h4__font-weight: bold;
		--h4__font-style: normal;
		--h4__font-stretch: normal;
		--h4__line-height: 1.27;
		--h4__letter-spacing: -0.5px;
		--h4__color: var(--font-heading-color, #333333);
		--h4__margin-multiplier: 2;

		/****************************
		 * H5 STYLES
		 ***************************/

		/**
		 * @variable h5 font family
		 */
		--h5__font-family: 'Inter', system-ui, sans-serif;
		--h5__font-size: 18px;
		--h5__font-weight: bold;
		--h5__font-style: normal;
		--h5__font-stretch: normal;
		--h5__line-height: 1.33;
		--h5__letter-spacing: -0.5px;
		--h5__color: var(--font-heading-color, #333333);
		--h5__margin-multiplier: 2;

		/****************************
		 * H6 STYLES
		 ***************************/

		/**
		 * @variable h6 font family
		 */
		--h6__font-family: 'Inter', system-ui, sans-serif;
		--h6__font-size: 16px;
		--h6__font-weight: bold;
		--h6__font-style: normal;
		--h6__font-stretch: normal;
		--h6__line-height: 1.5;
		--h6__letter-spacing: -0.5px;
		--h6__color: var(--font-heading-color, #333333);
		--h6__margin-multiplier: 2;

		/****************************
		 * P STYLES
		 ***************************/

		/**
		 * @variable p font family
		 */
		--p__font-family: 'Inter', system-ui, sans-serif;
		--p__font-size: 18px;
		--p__font-weight: normal;
		--p__font-style: normal;
		--p__font-stretch: normal;
		--p__line-height: 1.56;
		--p__letter-spacing: -0.5px;
		--p__color: var(--font-body-color, #333333);
		--p__margin-multiplier: 8;

		/****************************
		 * BLOCKQUOTE STYLES
		 ***************************/

		/**
		 * @variable blockquote font family
		 */
		--blockquote__font-family: 'Inter', system-ui, sans-serif;
		--blockquote__font-size: 22px;
		--blockquote__font-weight: bold;
		--blockquote__font-style: normal;
		--blockquote__font-stretch: normal;
		--blockquote__line-height: 1.27;
		--blockquote__letter-spacing: -0.5px;
		--blockquote__color: var(--font-quote-color, #208834);
		--blockquote__margin-multiplier: 8;
		--blockquote__padding: 0 0 0 30px;
		--blockquote__border-left: 2px solid var(--font-quote-color, #208834);
		--blockquote__border-right: none;
		--blockquote__border-top: none;
		--blockquote__border-bottom: none;
	}
`;

/**
 * RuiRichText CSS
 */
export const layout = css`
	:host ::slotted(:last-child) {
		margin-bottom: 0;
	}
	
	:host ::slotted(h1) {
		font-family: var(--h1__font-family);
		font-size: var(--h1__font-size);
		font-weight: var(--h1__font-weight);
		font-style: var(--h1__font-style);
		line-height: var(--h1__line-height);
		letter-spacing: var(--h1__letter-spacing);
		color: var(--h1__color);
		margin: 0;
		margin-bottom: calc(var(--base-grid-size) * var(--h1__margin-multiplier));
	}

	:host ::slotted(h2) {
		font-family: var(--h2__font-family);
		font-size: var(--h2__font-size);
		font-weight: var(--h2__font-weight);
		font-style: var(--h2__font-style);
		line-height: var(--h2__line-height);
		letter-spacing: var(--h2__letter-spacing);
		color: var(--h2__color);
		margin: 0;
		margin-bottom: calc(var(--base-grid-size) * var(--h2__margin-multiplier));
	}

	:host ::slotted(h3) {
		font-family: var(--h3__font-family);
		font-size: var(--h3__font-size);
		font-weight: var(--h3__font-weight);
		font-style: var(--h3__font-style);
		line-height: var(--h3__line-height);
		letter-spacing: var(--h3__letter-spacing);
		color: var(--h3__color);
		margin: 0;
		margin-bottom: calc(var(--base-grid-size) * var(--h3__margin-multiplier));
	}

	:host ::slotted(h4) {
		font-family: var(--h4__font-family);
		font-size: var(--h4__font-size);
		font-weight: var(--h4__font-weight);
		font-style: var(--h4__font-style);
		line-height: var(--h4__line-height);
		letter-spacing: var(--h4__letter-spacing);
		color: var(--h4__color);
		margin: 0;
		margin-bottom: calc(var(--base-grid-size) * var(--h4__margin-multiplier));
	}

	:host ::slotted(h5) {
		font-family: var(--h5__font-family);
		font-size: var(--h5__font-size);
		font-weight: var(--h5__font-weight);
		font-style: var(--h5__font-style);
		line-height: var(--h5__line-height);
		letter-spacing: var(--h5__letter-spacing);
		color: var(--h5__color);
		margin: 0;
		margin-bottom: calc(var(--base-grid-size) * var(--h5__margin-multiplier));
	}

	:host ::slotted(h6) {
		font-family: var(--h6__font-family);
		font-size: var(--h6__font-size);
		font-weight: var(--h6__font-weight);
		font-style: var(--h6__font-style);
		line-height: var(--h6__line-height);
		letter-spacing: var(--h6__letter-spacing);
		color: var(--h6__color);
		margin: 0;
		margin-bottom: calc(var(--base-grid-size) * var(--h6__margin-multiplier));
	}

	:host ::slotted(p) {
		font-family: var(--p__font-family);
		font-size: var(--p__font-size);
		font-weight: var(--p__font-weight);
		font-style: var(--p__font-style);
		line-height: var(--p__line-height);
		letter-spacing: var(--p__letter-spacing);
		color: var(--p__color);
		margin: 0;
		margin-bottom: calc(var(--base-grid-size) * var(--p__margin-multiplier));
	}

	:host ::slotted(blockquote) {
		font-family: var(--blockquote__font-family);
		font-size: var(--blockquote__font-size);
		font-weight: var(--blockquote__font-weight);
		font-style: var(--blockquote__font-style);
		line-height: var(--blockquote__line-height);
		letter-spacing: var(--blockquote__letter-spacing);
		color: var(--blockquote__color);
		margin: 0;
		margin-bottom: calc(var(--base-grid-size) * var(--blockquote__margin-multiplier));
		padding: var(--blockquote__padding);
		border-left: var(--blockquote__border-left);
		border-right: var(--blockquote__border-right);
		border-top: var(--blockquote__border-top);
		border-bottom: var(--blockquote__border-bottom);
	}

	/** TODO: Alternative text styles
	 * :host ::slotted(a) {}
	 *
	 * :host ::slotted(span) {}
	 *
	 * :host ::slotted(s) {}
	 *
	 * :host ::slotted(b) {}
	 *
	 * :host ::slotted(ins) {}
	 *
	 * :host ::slotted(del) {}
	 *
	 * :host ::slotted(cite) {}
	 *
	 * :host ::slotted(q) {}
	 *
	 * :host ::slotted(abbr) {}
	 *
	 * :host ::slotted(dfn) {}
	 *
	 * :host ::slotted(code) {}
	 *
	 * :host ::slotted(samp) {}
	 *
	 * :host ::slotted(kbd) {}
	 *
	 * :host ::slotted(var) {}
	 *
	 * :host ::slotted(data) {}
	 *
	 * :host ::slotted(time) {}
	 *
	 * :host ::slotted(ruby) {}
	 *
	 * :host ::slotted(rt) {}
	 *
	 * :host ::slotted(rp) {}
	 *
	 * :host ::slotted(sup) {}
	 *
	 * :host ::slotted(sub) {}
	 *
	 * :host ::slotted(mark) {}
	 *
	 * :host ::slotted(wbr) {}
	 */
`;

export default [variables, layout];
