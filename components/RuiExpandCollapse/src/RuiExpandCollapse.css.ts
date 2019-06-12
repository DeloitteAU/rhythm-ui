/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {css} from 'lit-element';

/**
 *  RuiExpandCollapse Variables
 */
export const variables = css`
	:host {
		/**
		 * @variable The expanded section background colour
		 */
		--bg: #F2F2F2;

		/**
		 * @variable The exapnd section text colour
		 */
		--txt: #000000;

		/**
		 * @variable The summary section text colour
		 */
		--summary-txt: #FFFFFF;

		/**
		 * @variable The summary section background colour
		 */
		--summary-bg: #000000;
	}
`;

/**
 * RuiExpandCollapse CSS
 */
export const layout = css`
	.expand-collapse {
		width: 100%;
		background-color: var(--bg);
		color: var(--txt);
	}

	.summary {
		padding: 10px 70px 10px 20px;
		background-color: var(--summary-bg);
		position: relative;
		display: flex;
		align-items: center;
		color: var(--summary-txt);
		cursor: pointer;
	}

	.icon-container {
		position: absolute;
		right: 10px;
	}

	.details {
		padding: 10px 20px;
		display: none;
	}

	.is-open > .details {
		display: block;
	}
`;

export default [variables, layout];