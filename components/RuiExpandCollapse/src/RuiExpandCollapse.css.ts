/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {css} from 'lit-element';

/**
 *  RuiExpandCollapse Variables
 */
export const variables = css`
	:host {
		/* SUMMARY STYLES */

		/**
		 * @variable The summary section font size
		 */
		--rui-expand-collapse__summary-font-size: 16px;

		/**
		 * @variable The summary section font size
		 */
		--rui-expand-collapse__summary-font-weight: bold;

		/**
		 * @variable The summary section text colour
		 */
		--rui-expand-collapse__summary-color: inherit;

		/**
		 * @variable The summary section background colour
		 */
		--rui-expand-collapse__summary-background-color: transparent;

		/**
		 * @variable The summary section background colour when active
		 */
		--rui-expand-collapse__summary-background-color-active: #333333;

		/**
		 * @variable The summary section background colour when hovered
		 */
		--rui-expand-collapse__summary-background-color-hover: #f2f2f4;

		/**
		 * @variable Summary padding
		 */
		--rui-expand-collapse__summary-padding: 16px;

		/**
		 * @variable Summary button focus outline styling
		 */
		--rui-expand-collapse__summary-outline-focus: #208834 solid 2px;

		/* DETAILS STYLES */

		/**
		 * @variable The base background colour for the details section background-color
		 */
		--rui-expand-collapse__details-background-color: transparent;

		/**
		 * @variable The base text colour for the details section text-color
		 */
		--rui-expand-collapse__details-color: #5f5f5f;

		/**
		 * @variable Details padding
		 */
		--rui-expand-collapse__details-padding: 16px;

		/**
		 * @variable Transition for the details section content
		 */
		--rui-expand-collapse__details-transition: opacity 200ms ease-out 250ms;

		/**
		 * @variable Transition for the details container
		 */
		--rui-expand-collapse__details-container-transition: height 250ms ease-out;
	}
`;

/**
 * RuiExpandCollapse CSS
 */
export const layout = css`
	:host {
		display: block;
		border: #c8cacc solid 1px;
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
		padding: var(--rui-expand-collapse__summary-padding);
		background-color: var(--rui-expand-collapse__summary-background-color);
		color: var(--rui-expand-collapse__summary-color);
		font-size: var(--rui-expand-collapse__summary-font-size);
		font-weight: var(--rui-expand-collapse__summary-font-weight);
		cursor: pointer;
	}

	.summary-container:focus {
		outline: var(--rui-expand-collapse__summary-outline-focus);
	}

	.summary-container:active {
		background-color: var(--rui-expand-collapse__summary-background-color-active);
	}

	.summary-container:hover {
		background-color: var(--rui-expand-collapse__summary-background-color-hover);
	}

	.summary-container ::slotted(:first-child) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.details-container {
		overflow: hidden;
		height: auto;
		background-color: var(--rui-expand-collapse__details-background-color);
		color: var(--rui-expand-collapse__details-color);
		transition: var(--rui-expand-collapse__details-container-transition);
	}

	.details-container > ::slotted(*) {
		opacity: 1;
		padding: var(--rui-expand-collapse__details-padding);
		transition: var(--rui-expand-collapse__details-transition);
	}

	.details-container.hide-content > ::slotted(*) {
		opacity: 0;
	}
`;

export default [variables, layout];