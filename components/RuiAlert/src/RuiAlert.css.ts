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
		/****************************
		 * DIMENSION STYLES
		 ***************************/

		/**
		 * @variable padding
		 */
		--alert__padding: 24px;

		/**
		 * @variable icon size
		 */
		--alert__icon-size: 32px;

		/**
		 * @variable icon margin right
		 */
		--alert__icon-margin-right: 24px;

		/**
		 * @variable alert item alignment (icon/dismissible)
		 */
		--alert__align-items: center;

		/****************************
		 * COLOR STYLES
		 ***************************/

		/**
		 * @variable font color
		 */
		--alert__font-color: #000000;

		/**
		 * @variable background color
		 */
		--alert__background-color: #E7EBF7;

		/****************************
		 * DISMISSIBLE STYLES
		 ***************************/

		/**
		 * @variable padding
		 */
		--alert__dismissible-margin: -10px;
 
		/**
		 * @variable dismissible size
		 */
		--alert__dismissible-size: 24px;

		/**
		 * @variable dismissible hover color
		 */
		--alert__dismissible-hover-color: #CCC;

		/**
		 * @variable dismissible hover transition
		 */
		--alert__dismissible-hover-transition: 250ms all ease;

		/****************************
		 * BORDER STYLES
		 ***************************/

		/**
		 * @variable border size
		 */
		--alert__border-size: 1px;

		/**
		 * @variable border color
		 */
		--alert__border-color: #B7C2E8;

		/**
		 * @variable border radius
		 */
		--alert__border-radius: 2px;

		/**
		 * @variable box shadow
		 */
		--alert__box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.16), 0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 3px 4px 0 rgba(0, 0, 0, 0.12);
	}
`;

/**
 * RuiAlert CSS
 */
export const layout = css`
	:host {
		display: flex;
		justify-content: flex-start;
		align-items: var(--alert__align-items);
		position: relative;
		word-break: break-word;
		padding: var(--alert__padding);
		color: var(--alert__font-color);
		background-color: var(--alert__background-color);
		border: var(--alert__border-size) solid transparent;
		border-color: var(--alert__border-color);
		border-radius: var(--alert__border-radius);
		box-shadow: var(--alert__box-shadow);
	}
	
	:host ::slotted(*) {
		color: var(--alert__font-color);
	}
	
	:host([role=none]) {
		display: none;
	}

	/****************************
	 * ICON STYLES
	 ***************************/

	.icon {
		width: auto;
	}

	:host .icon ::slotted(*) {
		margin-right: var(--alert__icon-margin-right);

		--rui-icon__width: var(--alert__icon-size);
		--rui-icon__height: var(--alert__icon-size);
		--rui-icon__color: var(--alert__border-color);
	}

	/****************************
	 * CONTENT STYLES
	 ***************************/

	.content {
		width: 100%;
	}

	/****************************
	 * DISMISSIBLE STYLES
	 ***************************/

	.dismissible {
		margin-left: auto;
		align-self: flex-start;
	}

	.dismissible button {
		border: none;
		background: transparent;
		cursor: pointer;
		min-width: 48px;
		min-height: 48px;
		margin: var(--alert__dismissible-margin);
		transition: var(--alert__dismissible-hover-transition);
	}

	:host .dismissible button ::slotted(*) {
		--rui-icon__width: var(--alert__dismissible-size);
		--rui-icon__height: var(--alert__dismissible-size);
		--rui-icon__color: var(--alert__font-color);
	}

	:host .dismissible button:hover ::slotted(*),
	:host .dismissible button:focus ::slotted(*) {
		--rui-icon__color: var(--alert__dismissible-hover-color);
	}

	/****************************
	 * TYPE STYLES
	 ***************************/

	:host([type=success]) {
		--alert__background-color: #D4E6D5;
		--alert__border-color: #208834;
		--rui-icon__color: #208834;
	}

	:host([type=warning]) {
		--alert__background-color: #FFE7DE;
		--alert__border-color: #FC8C60;
		--rui-icon__color: #FC8C60;
	}

	:host([type=error]) {
		--alert__background-color: #FDD7DD;
		--alert__border-color: #E8385C;
		--rui-icon__color: #E8385C;
	}

	:host([type=info]) {
		--alert__background-color: #D4E8FC;
		--alert__border-color: #0074DC;
		--rui-icon__color: #0074DC;
	}
`;

export default [variables, layout];
