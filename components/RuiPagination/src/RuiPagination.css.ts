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
	.pagination {
		display: flex;
		flex-flow: row wrap;
		list-style: none;
	}

	.pagination-link {
		min-width: 50px;
		height: 50px;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0;
		cursor: pointer;
		margin: 5px;
		color: #333;
		text-decoration: underline;
	}

	.pagination-link:not(.disabled):not(.pagination-link--current):hover {
		background-color: #DDD;
	}

	.pagination-link:not(.disabled):not(.pagination-link--current):active {
		background-color: #DDD;
	}

	.pagination-link:not(.disabled):not(.pagination-link--current):focus {
		background-color: #DDD;
	}

	.pagination-link--next,
	.pagination-link--previous {
		padding: 0 5px;
	}

	.pagination-link--next.disabled,
	.pagination-link--previous.disabled {
		cursor: not-allowed;
		color: #999;
		text-decoration: none;
	}

	.pagination-link--current {
		background-color: #000;
		cursor: default;
		color: #FFF;
		text-decoration: none;
	}
	
	.ellipses {
		border: none;
		margin: 5px;
		text-align: center;
		border-radius: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		min-width: 50px;
		height: 50px;
	}
`;

export default [variables, layout];
