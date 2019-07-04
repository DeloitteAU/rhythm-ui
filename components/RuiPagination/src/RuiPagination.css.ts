/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {css} from 'lit-element';

/**
*  RuiPagination Variables
*/
export const variables = css`
	:host {
		--padding: 10px;
	}
`;

/**
* RuiPagination CSS
*/
export const layout = css`
	.pagination-item {
		list-style: none;
		display: inline;
		border: 1px solid black;
		margin: 5px;
		padding: 5px;
		width: 100px;
	}

	.ellipses {
		display: inline;
		border: 1px solid black;
		margin: 5px;
		padding: 5px;
		width: 100px;
	}
`;

export default [variables, layout];
