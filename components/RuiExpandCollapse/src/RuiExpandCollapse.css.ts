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
		--rui-expand-collapse__summary-font-size: 1rem;

		/**
		 * @variable The summary section text colour
		 */
		--rui-expand-collapse__summary-color: #FFFFFF;

		/**
		 * @variable The summary section text-decoration
		 */
		--rui-expand-collapse__summary-text-decoration: none;

		/**
		 * @variable The summary section background colour
		 */
		--rui-expand-collapse__summary-background-color: #000000;

		/**
		 * @variable The summary section background colour when active
		 */
		--rui-expand-collapse__summary-background-color-active: #333333;

		/**
		 * @variable The summary section background colour when focused
		 */
		--rui-expand-collapse__summary-background-color-focus: #333333;

		/**
		 * @variable The summary section background colour when hovered
		 */
		--rui-expand-collapse__summary-background-color-hover: #333333;

		/**
		 * @variable Summary padding
		 */
		--rui-expand-collapse__summary-padding: 28px 70px 28px 20px;

		/**
		 * @variable Summary button focus outline styling
		 */
		--rui-expand-collapse__summary-outline-focus: -webkit-focus-ring-color auto 5px;

		/**
		 * @variable Summary cursor style
		 */
		--rui-expand-collapse__summary-cursor: pointer;

		/* DETAILS STYLES */

		/**
		 * @variable The base background colour for the details section background-color
		 */
		--rui-expand-collapse__details-background-color: #F2F2F2;

		/**
		 * @variable The base text colour for the details section text-color
		 */
		--rui-expand-collapse__details-color: #000000;

		/**
		 * @variable Details padding
		 */
		--rui-expand-collapse__details-padding: 28px 20px;

		/**
		 * @variable Transition for the details section content
		 */
		--rui-expand-collapse__details-transition: opacity 200ms ease-out 250ms;

		/**
		 * @variable Transition for the details container
		 */
		--rui-expand-collapse__details-container-transition: height 250ms ease-out;

		/* ICON STYLES */

		/**
		 * @variable Height of icon container
		 */
		--rui-expand-collapse__icon-container-height: 20px;

		/**
		 * @variable Width of icon container
		 */
		--rui-expand-collapse__icon-container-width: 20px;

		/**
		 * @variable Offset of icon container from right
		 * of summary container
		 */
		--rui-expand-collapse__icon-container-right: 20px;

		/**
		 * @variable Transition for the icon container
		 */
		--rui-expand-collapse__icon-container-transition: transform 300ms ease-in-out;

		/**
		 * @variable Transform applied to the icon container when expanding
		 */
		--rui-expand-collapse__icon-container-transform-expanded: rotate(180deg);

		/**
		 * @variable The content of the icon :after element
		 */
		--rui-expand-collapse__icon-content: url("data:image/svg+xml,%3Csvg viewBox='0 0 8 5' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='icon-/-16-/-chev-down' transform='translate(-4.000000, -6.000000)' fill='%23FFF' fill-rule='nonzero'%3E%3Cpath d='M11.50025,10.50025 C11.37225,10.50025 11.24425,10.45125 11.14625,10.35425 L8.00025,7.20725 L4.85425,10.35425 C4.65825,10.54925 4.34225,10.54925 4.14625,10.35425 C3.95125,10.15825 3.95125,9.84225 4.14625,9.64625 L7.64625,6.14625 C7.84225,5.95125 8.15825,5.95125 8.35425,6.14625 L11.85425,9.64625 C12.04925,9.84225 12.04925,10.15825 11.85425,10.35425 C11.75625,10.45125 11.62825,10.50025 11.50025,10.50025' id='Icon' transform='translate(8.000250, 8.250250) rotate(-180.000000) translate(-8.000250, -8.250250) '%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E ");
	}
`;

/**
 * RuiExpandCollapse CSS
 */
export const layout = css`
	.expand-collapse {
		opacity: 0;
		width: 100%;
		box-sizing: border-box;
	}

	.summary-container {
		position: relative;
		display: flex;
		align-items: center;
		width: 100%;
		border: none;
		white-space: nowrap;
		padding: var(--rui-expand-collapse__summary-padding);
		background-color: var(--rui-expand-collapse__summary-background-color);
		color: var(--rui-expand-collapse__summary-color);
		font-size: var(--rui-expand-collapse__summary-font-size);
		text-decoration: var(--rui-expand-collapse__summary-text-decoration);
		cursor: var(--rui-expand-collapse__summary-cursor);
	}

	.summary-container:focus {
		outline: var(--rui-expand-collapse__summary-outline-focus);
		background-color: var(--rui-expand-collapse__summary-background-color-focus);
	}

	.summary-container:active {
		background-color: var(--rui-expand-collapse__summary-background-color-active);
	}

	.summary-container:hover {
		background-color: var(--rui-expand-collapse__summary-background-color-hover);
	}

	.icon-container {
		position: absolute;
		right: var(--rui-expand-collapse__icon-container-right);
		width: var(--rui-expand-collapse__icon-container-width);
		height: var(--rui-expand-collapse__icon-container-height);
		transition: var(--rui-expand-collapse__icon-container-transition);
	}

	.is-open .icon-container {
		transform-origin: center;
		transform: var(--rui-expand-collapse__icon-container-expanded-transform);
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

	.is-open .icon-container {
		transform-origin: center;
		transform: var(--rui-expand-collapse__icon-container-transform-expanded);
	}

	.icon-container:after {
		content: var(--rui-expand-collapse__icon-content);
		width: 100%;
		height: 100%;
	}
`;

export default [variables, layout];