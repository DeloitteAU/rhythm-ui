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
		--rui-modal__margin-sides--medium: 10px;
		--rui-modal__height-max--medium: 382px;
		--rui-modal__height-min--medium: 280px;
		--rui-modal__width--medium: 600px;
		--rui-modal__margin-sides--small: 10px;
		--rui-modal__height-max--small: 251px;
		--rui-modal__height-min--small: 200px;
		--rui-modal__width--small: 472px;
		--rui-modal__padding: 20px 40px;
		--rui-modal__box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.12), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 6px 10px 0 rgba(0, 0, 0, 0.12);
		--rui-modal__actions-margin: 10px 0;
		--rui-modal__actions-padding: 0;
		--rui-modal__actions-background: none;
		--rui-modal__actions-border: none;
		--rui-modal__heading-margin: 10px 0;
		--rui-modal__heading-padding: 0;
		--rui-modal__heading-background: none;
		--rui-modal__heading-border: none;
		--rui-modal__detail-margin: 0;
		--rui-modal__detail-padding: 0;
		--rui-modal__detail-background: none;
		--rui-modal__detail-border: none;
	}
`;

/**s
	* RuiModal CSS
*/
export const layout = css`
	::slotted([slot="cancel"]) {
		margin-right: 15px;
	}

	.modal__heading {
		margin: var(--rui-modal__heading-margin);
		padding: var(--rui-modal__heading-padding);
		background: var(--rui-modal__heading-background);
		border: var(--rui-modal__heading-border);
	}

	.modal__heading > ::slotted([slot="heading"]) {
		margin: 0;
		font-size: 22px;
		font-weight: bold;
	}

	.modal__detail {
		flex: 1;
		overflow-y: auto;
		margin: var(--rui-modal__detail-margin);
		padding: var(--rui-modal__detail-padding);
		background: var(--rui-modal__detail-background);
		border: var(--rui-modal__detail-border);
	}

	.modal__detail > ::slotted([slot="detail"]) {
		font-size: 16px;
		line-height: 1.5;
		letter-spacing: -0.12px;
	}

	.modal__actions {
		margin: var(--rui-modal__actions-margin);
		padding: var(--rui-modal__actions-padding);
		background: var(--rui-modal__actions-background);
		border: var(--rui-modal__actions-border);
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
		background-color: white;
		padding: var(--rui-modal__padding);
		box-shadow: var(--rui-modal__box-shadow);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
	
	.modal-container.open {
		display: block;
	}

	.modal--fullscreen {
		width: 100%;
		height: 100%;
	}

	.modal.modal--medium {
		width: calc(100% - (var(--rui-modal__margin-sides--medium) * 2));
		max-width: calc(var(--rui-modal__width--medium) + (var(--rui-modal__margin-sides--medium) * 2));
		max-height: var(--rui-modal__height-max--medium);
		min-height: var(--rui-modal__height-min--medium);
	}

	.modal.modal--small {
		width: calc(100% - (var(--rui-modal__margin-sides--small) * 2));
		max-width: calc(var(--rui-modal__width--small) + (var(--rui-modal__margin-sides--small) * 2));
		max-height: var(--rui-modal__height-max--small);
		min-height: var(--rui-modal__height-min--small);
	}
`;

/**
 * 
 * Mobile size breakpoint
 */

export default [variables, layout];
