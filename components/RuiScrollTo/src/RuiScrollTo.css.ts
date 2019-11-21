/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {css} from 'lit-element';

/**
	*  RuiScrollTo Variables
*/
export const variables = css``;

/**
	* RuiScrollTo CSS
*/
export const layout = css`
	::slotted(a) {
		display: inline-flex;
		padding: 4px;
		align-items: center;
		color: #208834;
		font-size: 14px;
		font-weight: bold;
		text-decoration: none;
	}

	::slotted(a:focus) {
		outline: currentColor solid 1px;
	}

	::slotted(a:hover) {
		color: #0C7420;
	}
`;

export default [variables, layout];
