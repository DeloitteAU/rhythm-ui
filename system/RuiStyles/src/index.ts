/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {css as _css, CSSResult} from 'lit-element';

// Proxy css in case we ever change how this works
export const css = _css;

// Private dictionary for stashing styles
const _styles = {};

interface IRuiStyleMap {
	[s: string]: CSSResult;
}

/**
 * Create styles for rui web components
 * @param styles 
 */
export const createShadowStyles = (styles: IRuiStyleMap): void => {
	for (const [key, value] of Object.entries(styles)) {
		_styles[key] = value;
	}
}

/**
 * Get styles for rui web component
 * @param key 
 */
export const getShadowStylesFor = (key: string): CSSResult => {
	if (_styles[key]) {
		return _styles[key];
	}

	return _css``;
}

/**
 * Return CSS media queries with rules
 * @param {string} size - breakpoint size (oneOf: xs|s|m|l|xl|xxl)
 * @param {string} rules - css rules for the breakpoint
 */
export const bp = (size, rules) => {
	switch (size.toLowerCase()) {
		case 'xs':
			return css` @media screen and (min-width: 360px) { ${rules} } `; // Regular Phones
		case 's':
			return css` @media screen and (min-width: 410px) { ${rules} } `; // XL Phones
		case 'm':
			return css` @media screen and (min-width: 768px) { ${rules} } `; // Tablet
		case 'l':
			return css` @media screen and (min-width: 1024px) { ${rules} } `; // Desktop
		case 'xl':
			return css` @media screen and (min-width: 1440px) { ${rules} } `;
		case 'xxl':
			return css` @media screen and (min-width: 1920px) { ${rules} } `;
		default:
			return rules;
	}
};

export default {
	css,
	createShadowStyles,
	bp,
};
