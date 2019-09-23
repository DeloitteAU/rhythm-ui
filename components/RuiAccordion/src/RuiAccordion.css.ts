/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {css} from 'lit-element';

/**
 *  RuiAccordion Variables
 */
export const variables = css`
	:host {
		/**
		 * @variable The padding of the box that contains the accordion heading and the optional expand/collapse button.
		 */
		--rui-accordion__padding: 24px 0;
	}
`;

/**
 * RuiAccordion CSS
 */
export const layout = css`
	::slotted(p) {
		margin: 0;
	}

	::slotted(rui-expand-collapse:not(:last-of-type)) {
		border-bottom: none;
	}

	slot[name=heading]::slotted(*) {
		font-size: 28px;
		font-weight: bold;
	}

	.inner-container {
		padding: --rui-accordion__padding;
		margin-left: auto;
	}

	.outer-container {
		display: flex;
		padding: 24px 0;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}
`;
export default [variables, layout];
//# sourceMappingURL=RuiFoo.css.js.map
