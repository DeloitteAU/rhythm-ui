/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {css} from 'lit-element';

/**
	*  RuiModal Variables
*/
export const variables = css`
	:host {
		color: red;
	}
`;

/**
	* RuiModal CSS
*/
export const layout = css`
	:host {
		color: red;
	}

	.modal-container {
		z-index: 9999;
		background-color: rgba(0, 0, 0, 0.4);
		display: none;
		position: fixed;
		overflow-y: auto;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
	
	.modal {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		max-width: 600px;
		width: 100%;
		height: 400px;
		background-color: white;
		display: none;
	}

	.modal-container.open,
	.modal.open {
		display: block;
	}
`;

export default [variables, layout];
