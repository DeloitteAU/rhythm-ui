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
		 * @variable The alert
		 */
		--rui-alert__padding: 0.75rem 1.25rem;

		/**
		 * @variable The alert colour
		 */
		--rui-alert__color: #000000;

		/**
		 * @variable The alert
		 */
		--rui-alert__background-color: #E7EBF7;

		/**
		 * @variable The alert border size
		 */
		--rui-alert__border-size: 1px;

		/**
		 * @variable The alert
		 */
		--rui-alert__border-color: #B7C2E8;

		/**
		 * @variable The alert
		 */
		--rui-alert__border-radius: 0.3125rem;
	}
`;

/**
 * RuiAlert CSS
 */
export const layout = css`
	:host {
		display: block;
		--rui-icon__width: 32px;
		--rui-icon__height: 32px;
	}

	.alert {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		position: relative;
		padding: var(--rui-alert__padding);
		color: var(--rui-alert__color);
		background-color: var(--rui-alert__background-color);
		border: var(--rui-alert__border-size) solid transparent;
		border-color: var(--rui-alert__border-color);
		border-radius: var(--rui-alert__border-radius);
		word-break: break-word;
	}
	
	.icon {
		width: auto;
	}
	
	.content {
		width: 100%;
	}

	.dismissible {
		margin-left: auto;
	}
	
	:host([type=success]) {
		--rui-alert__background-color: #D4E6D5;
		--rui-alert__border-color: #208834;
		--rui-icon__color: #208834;
	}
	
	:host([type=warning]) {
		--rui-alert__background-color: #FFE7DE;
		--rui-alert__border-color: #FC8C60;
		--rui-icon__color: #FC8C60;
	}
	
	:host([type=error]) {
		--rui-alert__background-color: #FDD7DD;
		--rui-alert__border-color: #E8385C;
		--rui-icon__color: #E8385C;
	}
	
	:host([type=info]) {
		--rui-alert__background-color: #D4E8FC;
		--rui-alert__border-color: #0092F0;
		--rui-icon__color: #0092F0;
	}
`;

export default [variables, layout];
