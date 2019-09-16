/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {css} from 'lit-element';
import {vh} from '@rhythm-ui/styles';

/**
	*  RuiBadge Variables
*/
export const variables = css`
	:host {
		/****************************
		 * DIMENSION STYLES
		 ***************************/

		/**
		 * @variable width
		 */
		--badge__min-width: 30px;

		/**
		 * @variable height
		 */
		--badge__height: 30px;

		/**
		 * @variable alignment (flexbox justify-self)
		 */
		--badge__align: top;

		/**
		 * @variable margin
		 */
		--badge__margin: -10px 5px 0 -15px;

		/**
		 * @variable padding
		 */
		--badge__padding: 2px 10px;

		/****************************
		 * COLOR STYLES
		 ***************************/

		/**
		 * @variable font color
		 */
		--badge__font-color: #334EAF;

		/**
		 * @variable background color
		 */
		--badge__background-color: #E7EBF7;

		/****************************
		 * BORDER STYLES
		 ***************************/

		/**
		 * @variable border size
		 */
		--badge__border-size: 1px;

		/**
		 * @variable border color
		 */
		--badge__border-color: #B7C2E8;

		/**
		 * @variable border radius
		 */
		--badge__border-radius: 0.3125rem;

		/****************************
		 * FONT STYLES
		 ***************************/

		/**
		 * @variable font family
		 */
		--badge__font-family: inherit;

		/**
		 * @variable font size
		 */
		--badge__font-size: normal;

		/**
		 * @variable font weight
		 */
		--badge__font-weight: bold;
	}
`;

/**
	* RuiBadge CSS
*/
export const layout = css`
	:host {
		display: flex;
	}

	.badge {
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		width: auto;

		/** Positioning */
		min-width: var(--badge__min-width);
		height: var(--badge__height);
		justify-self: var(--badge__align);
		margin: var(--badge__margin);
		padding: var(--badge__padding);

		/** Color */
		color: var(--badge__font-color);
		background-color: var(--badge__background-color);

		/** Border */
		border: var(--badge__border-size) solid transparent;
		border-color: var(--badge__border-color);
		border-radius: var(--badge__border-radius);

		/** Font */
		font-family: var(--badge__font-family);
		font-size: var(--badge__font-size);
		font-weight: var(--badge__font-weight);
	}

	.label {
		${vh()}
	}

	/****************************
	 * TYPE STYLES
	 ***************************/

	:host([type="success"]) {
		--badge__font-color: #259A3F;
		--badge__background-color: #E5F4E9;
		--badge__border-color: #B2DFBC;
	}

	:host([type="warning"]) {
		--badge__font-color: #EBB206;
		--badge__background-color: #FFF8E1;
		--badge__border-color: #FFE9A6;
	}

	:host([type="error"]) {
		--badge__font-color: #CA313F;
		--badge__background-color: #FBE7E9;
		--badge__border-color: #F2B6BC;
	}

	:host([type="info"]) {
		--badge__font-color: #1595A9;
		--badge__background-color: #E3F4F6;
		--badge__border-color: #ABDEE5;
	}
`;

export default [variables, layout];
