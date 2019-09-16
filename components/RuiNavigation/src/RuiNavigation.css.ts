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

    }
	`;

/**
	* RuiNavigation CSS
*/
export const layout = css`
    :host {
		display: flex;
		flex-direction: column;
		background: white;
	}

	@media (min-width: 769px) {
		:host {
			padding: 0 1em;
			flex-direction: row;
			position: relative;
			z-index: 99;
		}
	}
`;

export default [variables, layout];
