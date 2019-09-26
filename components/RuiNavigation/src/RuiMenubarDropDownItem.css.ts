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
		--primary-colour: #208834;
    }
	`;

/**
* RuiNavigationGroup CSS
*/
export const layout = css`
	:host {
		display: block;
	}

	:host(:not([mega])) {
		position: relative;
	}

	.dropdown {
		display: none;
		position: absolute;
		top: 100%;
		background: #FFF;
		min-width: 100%;
		z-index: 10;
	}

	:host([mega]) .dropdown {
		left: 0;
		right: 100%;
		padding: 56px 0;
	}

	.expanded .dropdown {
		display: block;
	}

	.menu-chevron {
		background: transparent;
		border: 0 none;
		cursor: pointer;
		display: inline-block;
		margin-left: 5px;
		font-size: 8px;
		vertical-align: middle;
		padding: 0;
		line-height: 14px;
		user-select: none;
	}

	a + .menu-chevron {
		
	}

	.expanded .menu-chevron {
		transform: rotate(180deg);
	}

`;

export default [variables, layout];
