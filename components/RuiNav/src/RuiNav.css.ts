/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {css} from 'lit-element';

/**
	*  RuiNav Variables
*/
export const variables = css`
    :host {

    }
	`;

/**
	* RuiNav CSS
*/
export const layout = css`
    :host {
		display: block;
	}

	::slotted(a) {
		display: inline-block;
		padding: 18px 16px;
		font-weight: bold;
		color: #000;
	}

	:host([stacked]) {
		border-bottom: 1px solid #c8cacc;
	}

	:host([stacked]) ::slotted(a) {
		display: block;
		border-top: 1px solid #c8cacc;
		min-width: 280px;
		font-size: 14px;
	}
`;

export default [variables, layout];
