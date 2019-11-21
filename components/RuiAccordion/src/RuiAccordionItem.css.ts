/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {css} from 'lit-element';

/**
 *  RuiAccordionItem Variables
 */
export const variables = css`
	:host {
		/* SUMMARY STYLES */

		/**
		 * @variable The summary section font size
		 */
		--accordion-item__summary-font-size: 16px;

		/**
		 * @variable The summary section font size
		 */
		--accordion-item__summary-font-weight: bold;

		/**
		 * @variable The summary section text colour
		 */
		--accordion-item__summary-color: inherit;

		/**
		 * @variable The summary section background colour
		 */
		--accordion-item__summary-background-color: transparent;

		/**
		 * @variable The summary section background colour when active
		 */
		--accordion-item__summary-background-color-active: #333333;

		/**
		 * @variable The summary section background colour when hovered
		 */
		--accordion-item__summary-background-color-hover: #F2F2F4;

		/**
		 * @variable Summary padding
		 */
		--accordion-item__summary-padding: 16px;

		/**
		 * @variable Summary button focus outline styling
		 */
		--accordion-item__summary-outline-focus: #208834 solid 2px;

		/* DETAILS STYLES */

		/**
		 * @variable The base background colour for the details section background-color
		 */
		--accordion-item__details-background-color: transparent;

		/**
		 * @variable The base text colour for the details section text-color
		 */
		--accordion-item__details-color: #5F5F5F;

		/**
		 * @variable Details padding
		 */
		--accordion-item__details-padding: 16px;

		/**
		 * @variable Transition for the details section content
		 */
		--accordion-item__details-transition: opacity 200ms ease-out 250ms;

		/**
		 * @variable Transition for the details container
		 */
		--accordion-item__details-container-transition: height 250ms ease-out;
	}
`;

/**
 * RuiAccordionItem CSS
 */
export const layout = css`
	:host {
		display: block;
		border: #C8CACC solid 1px;
		border-left: none;
		border-right: none;
	}

	.expand-collapse {
		opacity: 0;
		width: 100%;
		box-sizing: border-box;
	}

	.summary-container {
		width: 100%;
		border: none;
		white-space: nowrap;
		padding: var(--accordion-item__summary-padding);
		background-color: var(--accordion-item__summary-background-color);
		color: var(--accordion-item__summary-color);
		font-size: var(--accordion-item__summary-font-size);
		font-weight: var(--accordion-item__summary-font-weight);
		cursor: pointer;
	}

	.summary-container:focus {
		outline: var(--accordion-item__summary-outline-focus);
	}

	.summary-container:active {
		background-color: var(--accordion-item__summary-background-color-active);
	}

	.summary-container:hover {
		background-color: var(--accordion-item__summary-background-color-hover);
	}

	.summary-container ::slotted(:first-child) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.details-container {
		overflow: hidden;
		height: auto;
		background-color: var(--accordion-item__details-background-color);
		color: var(--accordion-item__details-color);
		transition: var(--accordion-item__details-container-transition);
	}

	.details-container > ::slotted(*) {
		opacity: 1;
		padding: var(--accordion-item__details-padding);
		transition: var(--accordion-item__details-transition);
	}

	.details-container.hide-content > ::slotted(*) {
		opacity: 0;
	}
`;

export default [variables, layout];
