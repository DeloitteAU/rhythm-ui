/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {css} from 'lit-element';

/**
 *  RuiHeader Variables
 */
export const variables = css`
	:host {
		rui-header__header-breakpoint: 768px;
	}
`;

/**
 * RuiHeader CSS
 */
export const layout = css`
	.mobile {
		display: block;
	}

	.desktop {
		display: none;
	}

	@media screen and (min-width: var(rui-header__header-breakpoint)) {
		.mobile {
			display: none;
		}

		.desktop {
			display: block;
		}
	}
`;

export default [variables, layout];
