/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {css} from 'lit-element';

/**
 *  RuiAlert Variables
 */
export const variables = css`
	:host {
		/**
		 * @variable The alert border size
		 */
		--rui-button__border-size: 1px;
	}
`;

/**
 * RuiAlert CSS
 */
export const layout = css`
	.alert {
		word-break: break-word;
		color: #334EAF;
		background-color: #E7EBF7;
		position: relative;
		padding: 0.75rem 1.25rem;
		margin-bottom: 1rem;
		border: var(--rui-button__border-size) solid transparent;
		border-color: #B7C2E8;
		border-radius: 0.3125rem;
	}
	
	::slotted(*) {
		margin: 0;
	}
`;

export default [variables, layout];
