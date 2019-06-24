/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {css} from 'lit-element';


/**
 *  RuiSkipLinks Variables
 */
export const variables = css`
	:host {
		/**
		 * @variable offset from top of container
		 */
		--top: 10px;

		/**
		 * @variable offset from left of container
		 */
		--left: 10px;
	}
`;

/**
 * RuiSkipLinks CSS
 */
export const layout = css`
	.skip-links {
		position: relative;
		list-style: none;
		padding: 0;
		margin: 0;
		z-index: 1000;
	}

	.skip-links > li {
		position: absolute;
		top: var(--top);
		left: var(--left);
		margin: 0;
	}

	.skip-links > li > a {
		border: 0;
		clip: rect(0, 0, 0, 0);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}

	.skip-links > li > a:active,
	.skip-links > li > a:focus {
		clip: auto;
		height: auto;
		margin: 0;
		overflow: visible;
		position: static;
		white-space: inherit;
		width: auto;
	}
`;

export default [variables, layout];