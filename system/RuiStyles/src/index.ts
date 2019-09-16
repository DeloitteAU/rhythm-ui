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
};

/**
 * Get styles for rui web component
 * @param key 
 */
export const getShadowStylesFor = (key: string): CSSResult => {
	if (_styles[key]) {
		return _styles[key];
	}

	return _css``;
};

export const vh = (): CSSResult => {
	return _css`
		position: absolute !important;
		height: 1px;
		width: 1px;
		overflow: hidden;
		clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
		clip: rect(1px, 1px, 1px, 1px);
		white-space: nowrap; /* added line */
	`;
};

export default {
	css,
	createShadowStyles,
	vh
};
