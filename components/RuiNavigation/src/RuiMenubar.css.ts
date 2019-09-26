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
		display: block;
		position: relative;
	}

	ul {
		display: flex;
		flex-direction: row;
		padding: 0;
		margin: 0;
	}
`;

export default [variables, layout];
