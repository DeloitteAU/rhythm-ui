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
		/**
		 * @variable The top position offset
		 */
		--rui-modal__top: 50%;

		/**
		 * @variable The left position offset for modals
		 */
		--rui-modal__left: 50%;

		/**
		 * @variable The modal dropshadow colour
		 */
		--rui-modal__dropshadow-color: rgba(0, 0, 0, 0.4);

		/**
		 * @variable The modal component z-index
		 */
		--rui-modal__z-index: 9999;

		/**
		 * @variable The modal background
		 */
		--rui-modal__background: #FFF;

		/**
		 * @variable The margin for the left/right sides of the modal
		 */
		--rui-modal__margin-sides: 10px;

		/**
		 * @variable The max height for modals
		 */
		--rui-modal__height-max: 251px;

		/**
		 * @variable The min height for modals
		 */
		--rui-modal__height-min: 200px;

		/**
		 * @variable The max width for modals
		 */
		--rui-modal__max-width: 472px;

		/**
		 * @variable Modal padding
		 */
		--rui-modal__padding: 20px 40px;

		/**
		 * @variable The modal drop shadow
		 */
		--rui-modal__box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.12), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 6px 10px 0 rgba(0, 0, 0, 0.12);

		/**
		 * @variable Actions section margin
		 */
		--rui-modal__actions-margin: 10px 0;

		/**
		 * @variable Actions section padding
		 */
		--rui-modal__actions-padding: 0;

		/**
		 * @variable Actions section background
		 */
		--rui-modal__actions-background: none;

		/**
		 * @variable Action section border
		 */
		--rui-modal__actions-border: none;

		/**
		 * @variable Heading section margin
		 */
		--rui-modal__heading-margin: 10px 0;

		/**
		 * @variable Heading section padding
		 */
		--rui-modal__heading-padding: 0;

		/**
		 * @variable Heading section background
		 */
		--rui-modal__heading-background: none;

		/**
		 * @variable Heading section border
		 */
		--rui-modal__heading-border: none;

		/**
		 * @variable Detail section margin
		 */
		--rui-modal__detail-margin: 0;

		/**
		 * @variable Detail section padding
		 */
		--rui-modal__detail-padding: 0;

		/**
		 * @variable Detail section background
		 */
		--rui-modal__detail-background: none;

		/**
		 * @variable Detail section border
		 */
		--rui-modal__detail-border: none;

		/**
		 * @variable Close icon height
		 */
		--rui-modal__close-height: 16px;

		/**
		 * @variable Close icon width
		 */
		--rui-modal__close-width: 16px;

		/**
		 * @variable Close button top offset
		 */
		--rui-modal__close-top: 24px;

		/**
		 * @variable Close button right offset
		 */
		--rui-modal__close-right: 24px;

		/**
		 * @variable Close icon colour
		 */
		--rui-modal__close-color: #673AB7;

		/**
		 * @variable Close icon colour when hovered
		 */
		--rui-modal__close-color-hover: #311B92;

		/**
		 * @variable Close icon colour when focused
		 */
		--rui-modal__close-color-focus: #673AB7;

		/**
		 * @variable Close icon colour when active
		 */
		--rui-modal__close-color-active: #311B92;

		/**
		 * @variable Close icon outline when focused
		 */
		--rui-modal__close-outline-focus: 5px auto -webkit-focus-ring-color;
	}
`;

/**
 * RuiModal CSS
*/
export const layout = css`
	.modal__actions > ::slotted([slot="cancel"]) {
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

	.close-container {
		position: absolute;
		right: var(--rui-modal__close-right);
		top: var(--rui-modal__close-top);
	}

	.close-btn {
		border: none;
		background: none;
		padding: 0;
	}

	.close {
		display: inline-block;
		mask: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 10 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Components' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Content' transform='translate(-563.000000, -1899.000000)' fill='%23000' fill-rule='nonzero'%3E%3Cg id='Modal-/-01-passive' transform='translate(112.000000, 1872.000000)'%3E%3Cg id='icon-/-16-/-cross' transform='translate(448.000000, 24.000000)'%3E%3Cpath d='M9.06066017,8 L12.2426407,11.1819805 C12.5355339,11.4748737 12.5355339,11.9497475 12.2426407,12.2426407 C11.9497475,12.5355339 11.4748737,12.5355339 11.1819805,12.2426407 L8,9.06066017 L4.81801948,12.2426407 C4.52512627,12.5355339 4.05025253,12.5355339 3.75735931,12.2426407 C3.46446609,11.9497475 3.46446609,11.4748737 3.75735931,11.1819805 L6.93933983,8 L3.75735931,4.81801948 C3.46446609,4.52512627 3.46446609,4.05025253 3.75735931,3.75735931 C4.05025253,3.46446609 4.52512627,3.46446609 4.81801948,3.75735931 L8,6.93933983 L11.1819805,3.75735931 C11.4748737,3.46446609 11.9497475,3.46446609 12.2426407,3.75735931 C12.5355339,4.05025253 12.5355339,4.52512627 12.2426407,4.81801948 L9.06066017,8 Z' id='Combined-Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
		/* stylelint-disable-next-line property-no-vendor-prefix */
		-webkit-mask: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 10 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Components' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Content' transform='translate(-563.000000, -1899.000000)' fill='%23000' fill-rule='nonzero'%3E%3Cg id='Modal-/-01-passive' transform='translate(112.000000, 1872.000000)'%3E%3Cg id='icon-/-16-/-cross' transform='translate(448.000000, 24.000000)'%3E%3Cpath d='M9.06066017,8 L12.2426407,11.1819805 C12.5355339,11.4748737 12.5355339,11.9497475 12.2426407,12.2426407 C11.9497475,12.5355339 11.4748737,12.5355339 11.1819805,12.2426407 L8,9.06066017 L4.81801948,12.2426407 C4.52512627,12.5355339 4.05025253,12.5355339 3.75735931,12.2426407 C3.46446609,11.9497475 3.46446609,11.4748737 3.75735931,11.1819805 L6.93933983,8 L3.75735931,4.81801948 C3.46446609,4.52512627 3.46446609,4.05025253 3.75735931,3.75735931 C4.05025253,3.46446609 4.52512627,3.46446609 4.81801948,3.75735931 L8,6.93933983 L11.1819805,3.75735931 C11.4748737,3.46446609 11.9497475,3.46446609 12.2426407,3.75735931 C12.5355339,4.05025253 12.5355339,4.52512627 12.2426407,4.81801948 L9.06066017,8 Z' id='Combined-Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
		mask-size: cover;
		/* stylelint-disable-next-line property-no-vendor-prefix */
		-webkit-mask-size: cover;
		height: var(--rui-modal__close-height);
		width: var(--rui-modal__close-width);
		background: var(--rui-modal__close-color);
		cursor: pointer;
	}
	
	.close-btn:focus .close {
		background: var(--rui-modal__close-color-focus);
	}

	.close-btn:focus {
		outline: var(--rui-modal__close-outline-focus);
	}

	.close-btn:hover .close {
		background: var(--rui-modal__close-color-hover);
	}

	.close-btn:active .close {
		background: var(--rui-modal__close-color-active);
	}

	.modal-container {
		z-index: var(--rui-modal__z-index);
		background-color: var(--rui-modal__dropshadow-color);
		display: none;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
	
	.modal {
		box-sizing: border-box;
		position: fixed;
		left: var(--rui-modal__left);
		transform: translate(-50%, -50%);
		background: var(--rui-modal__background);
		padding: var(--rui-modal__padding);
		box-shadow: var(--rui-modal__box-shadow);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		top: var(--rui-modal__top);
		width: calc(100% - (var(--rui-modal__margin-sides) * 2));
		max-width: calc(var(--rui-modal__max-width) + (var(--rui-modal__margin-sides) * 2));
		max-height: var(--rui-modal__max-height);
		min-height: var(--rui-modal__min-height);
	}
	
	.modal-container.open {
		display: block;
	}

	:host([size="medium"]) {
		--rui-modal__margin-sides: 10px;
		--rui-modal__max-height: 382px;
		--rui-modal__min-height: 280px;
		--rui-modal__max-width: 600px;
	}

	:host([size="fullscreen"]) {
		--rui-modal__max-width: 100%;
	}

	:host([size="fullscreen"]) .modal {
		width: 100%;
		height: 100%;
	}
`;

export default [variables, layout];