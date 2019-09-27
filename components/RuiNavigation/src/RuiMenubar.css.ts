/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {css} from 'lit-element';

/**
	*  RuiNavigation Variables
*/
export const variables = css`
    :host {
		--rui-menu-bar__breakpoint: 2100px;
	}
	`;

/**
	* RuiNavigation CSS
*/
export const layout = css`
    :host {
		display: block;
		position: relative;
	}

	ul {
		display: flex;
		flex-direction: column;
		padding: 0;
		margin: 0;
	}

	@media only screen and (max-width: 2000px) {
		:host(:not([stacked]))
			ul {
				flex-direction: row;
			}
	}

	:host([stacked]) {
		ul {
			flex-direction: row;
			background: red;
		}
	}
`;

export default [variables, layout];
