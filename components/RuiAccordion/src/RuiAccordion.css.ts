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
		 * @variable The accordion items padding;
		 */
		--accordion__header--padding: 0 0 24px 0;
	}
`;

/**
 * RuiAccordion CSS
 */
export const layout = css`
	::slotted(rui-expand-collapse:not(:last-of-type)) {
		border-bottom: none;
	}

	.accordion-heading {
		display: flex;
		padding: var(--accordion__header--padding);
		justify-content: space-between;
		align-items: flex-end;
		flex-wrap: wrap;
	}
`;
export default [variables, layout];
//# sourceMappingURL=RuiFoo.css.js.map
