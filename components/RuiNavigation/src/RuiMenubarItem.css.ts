/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {css} from 'lit-element';

/**
	*  RuiNavigationGroup Variables
*/
export const variables = css`
    :host {
		--background-colour: white;
		
		--rui-menubar__primary-colour: var(--rui-global__primary-color, #208834);
    }
	`;

/**
* RuiNavigationGroup CSS
*/
export const layout = css`
	li {
		list-style: none;
		margin: 0;
		padding: 8px 0;
		border-bottom: 3px solid transparent;
		display: inline-block;
		margin-right: 24px;
	}

	:host([active]) li {
		border-color: var(--rui-menubar__primary-colour);
	}

	a {
		cursor: pointer;
		vertical-align: middle;
		color: #000;
		text-decoration: none;
		font-size: 14px;
		font-weight: bold;
		user-select: none;
	}

	a:hover,
	a:focus,
	.expanded a, 
	:host([active]) a {
		color: var(--rui-menubar__primary-colour);
	}

`;

export default [variables, layout];
