/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {css, CSSResult} from 'lit-element';

/**
 *  RuiExpandCollapse Variables
 */
export const variables = css`
	:host {
		--bg: #F2F2F2;
		--txt: #000000;
		--summary-txt: #FFFFFF;
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

	.is-open > .details {
		padding: 10px 20px;
	}
`;

export default [variables, layout];