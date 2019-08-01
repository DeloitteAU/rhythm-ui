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
		color: #000;
	}
`;

/**
	* RuiModal CSS
*/
export const layout = css`
	::slotted([slot="cancel"]) {
		margin-right: 15px;
	}

	.modal__heading > ::slotted([slot="heading"]) {
		margin: 0;
		font-size: 22px;
		font-weight: bold;
	}

	.modal__detail {
		max-height: 300px;
		overflow: auto;
	}

	.modal__detail > ::slotted([slot="detail"]) {
		font-size: 16px;
		line-height: 1.5;
		letter-spacing: -0.12px;
	}

	.modal__actions {
		margin-top: 40px;
	}

	.close-btn {
		position: absolute;
		right: 24px;
		top: 24px;
		height: 14px;
		width: 14px;
		border: none;
		background-color: transparent;
		background-position: center;
		background-repeat: no-repeat;
		background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 10 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Components' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Content' transform='translate(-563.000000, -1899.000000)' fill='%23000' fill-rule='nonzero'%3E%3Cg id='Modal-/-01-passive' transform='translate(112.000000, 1872.000000)'%3E%3Cg id='icon-/-16-/-cross' transform='translate(448.000000, 24.000000)'%3E%3Cpath d='M9.06066017,8 L12.2426407,11.1819805 C12.5355339,11.4748737 12.5355339,11.9497475 12.2426407,12.2426407 C11.9497475,12.5355339 11.4748737,12.5355339 11.1819805,12.2426407 L8,9.06066017 L4.81801948,12.2426407 C4.52512627,12.5355339 4.05025253,12.5355339 3.75735931,12.2426407 C3.46446609,11.9497475 3.46446609,11.4748737 3.75735931,11.1819805 L6.93933983,8 L3.75735931,4.81801948 C3.46446609,4.52512627 3.46446609,4.05025253 3.75735931,3.75735931 C4.05025253,3.46446609 4.52512627,3.46446609 4.81801948,3.75735931 L8,6.93933983 L11.1819805,3.75735931 C11.4748737,3.46446609 11.9497475,3.46446609 12.2426407,3.75735931 C12.5355339,4.05025253 12.5355339,4.52512627 12.2426407,4.81801948 L9.06066017,8 Z' id='Combined-Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	}
	
	.close-btn:hover {
		cursor: pointer;
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
		box-sizing: border-box;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		max-width: 488px;
		width: 100%;
		min-height: 200px;
		background-color: white;
		display: none;
		padding: 40px;
		box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.12), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 6px 10px 0 rgba(0, 0, 0, 0.12);
	}

	.modal-container.open,
	.modal.open {
		display: block;
	}
`;

export default [variables, layout];
