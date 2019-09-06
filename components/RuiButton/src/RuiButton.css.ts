/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {css} from 'lit-element';

/**
 *  RuiButton Variables
 */
export const variables = css`
	:host {
		/****************************
		 * FONTS
		 ***************************/

		/**
		 * @variable The default font size
		 */
		--rui-button__font-size: 1rem;

		/**
		 * @variable The font weight
		 */
		--rui-button__font-weight: 400;

		/**
		 * @variable The button font colour
		 */
		--rui-button__color: #FFF;

		/**
		 * @variable Line height
		 */
		--rui-button__line-height: 1em;

		/****************************
		 * DIMENSIONS
		 ***************************/

		/**
		 * @variable The regular button padding
		 */
		--rui-button__padding: 15px 25px;

		/**
		 * @variable The border radius
		 */
		--rui-button__border-radius: 4px;

		/**
		 * @variable Width
		 */
		--rui-button__width: auto;

		/**
		 * @variable Minimum Width
		 */
		--rui-button__min-width: auto;

		/**
		 * @variable Maximum Width
		 */
		--rui-button__max-width: auto;

		/****************************
		 * AESTHETIC
		 ***************************/

		/**
		 * @variable The button display property
		 */
		--rui-button__display: inline-block;

		/**
		 * @variable The button flex direction
		 */
		--rui-button__flex-direction: row;

		/**
		 * @variable The button justification for content
		 */
		--rui-button__justify-content: flex-start;

		/**
		 * @variable The button alignment for cross axis
		 */
		--rui-button__align-items: flex-start;

		/**
		 * @variable The button transform
		 */
		--rui-button__transform: none;

		/**
		 * @variable The button transition
		 */
		--rui-button__transition: background-color 250ms, color 250ms, opacity 250ms, font-size 250ms;

		/**
		 * @variable The button cursor
		 */
		--rui-button__cursor: pointer;

		/**
		 * @variable The button accent colour
		 */
		--rui-button__background-color: var(--global-gray-color-3, #673AB7);

		/**
		 * @variable The button border
		 */
		--rui-button__border: none;

		/****************************
		 * HOVER STYLES
		 ***************************/

		/**
		 * @variable The hover font colour
		 */
		--rui-button__color-hover: var(--rui-button__color);

		/**
		 * @variable The hover font colour
		 */
		--rui-button__background-color-hover: var(--global-gray-color-4, #311B92);

		/**
		 * @variable The hover border
		 */
		--rui-button__border-hover: var(--rui-button__border);

		/**
		 * @variable The button transform when hovering
		 */
		--rui-button__transform-hover: none;

		/****************************
		 * FOCUS STYLES
		 ***************************/

		/**
		 * @variable The focused font colour
		 */
		--rui-button__color-focus: var(--rui-button__color);

		/**
		 * @variable The focused font colour
		 */
		--rui-button__background-color-focus: var(--global-gray-color-4, #311B92);

		/**
		 * @variable The focused border
		 */
		--rui-button__border-focus: var(--rui-button__border);

		/**
		 * @variable  The button transform when focused
		 */
		--rui-button__transform-focus: none;

		/**
		 * @variable  The button outline when focused
		 */
		--rui-button__focus-outline: 1px solid transparent;

		/****************************
		 * ACTIVE STYLES
		 ***************************/

		/**
		 * @variable The active font colour
		 */
		--rui-button__color-active: var(--rui-button__color);

		/**
		 * @variable The active font colour
		 */
		--rui-button__background-color-active: var(--global-gray-color-4, #311B92);

		/**
		 * @variable The active border
		 */
		--rui-button__border-active: var(--rui-button__border);

		/**
		 * @variable The button transform when active
		 */
		--rui-button__transform-active: translateY(1px);

		/****************************
		 * VISITED STYLES
		 ***************************/

		/**
		 * @variable The visited font colour
		 */
		--rui-button__color-visited: var(--rui-button__color);

		/**
		 * @variable The visited font colour
		 */
		--rui-button__background-color-visited: var(--global-gray-color-4, #311B92);

		/**
		 * @variable The visited border
		 */
		--rui-button__border-visited: var(--rui-button__border);

		/**
		 * @variable The button transform when visited
		 */
		--rui-button__transform-visited: translateY(1px);

		/****************************
		 * DISABLED STYLES
		 ***************************/

		/**
		 * @variable The disabled button font color
		 */
		--rui-button__color-disabled: var(--global-gray-color-2, #CCC);

		/**
		 * @variable The disabled button background color
		 */
		--rui-button__background-color-disabled: var(--global-gray-color-1, #DDD);

		/**
		 * @variable The disabled button border
		 */
		--rui-button__border-disabled: none;

		/**
		 * @variable  The button transform when disabled
		 */
		--rui-button__transform-disabled: none;

		/**
		 * @variable The button cursor when disabled
		 */
		--rui-button__cursor-disabled: not-allowed;
	}
`

/**
 * RuiButton CSS
 */
export const layout = css`
	:host {
		display: inline-block;
		width: auto;
	}

	:host[disabled] {
		pointer-events: none;
	}

	.btn {
		/* TODO: Need to examine these and
		see if any need to be pulled into
		variables */
		font-kerning: none;
		outline: none;
		pointer-events: auto;
		text-align: center;
		text-decoration: none;
		text-overflow: ellipsis;
		user-select: none;
		white-space: nowrap;
		vertical-align: middle;
		display: inline-block;
		box-sizing: border-box;

		width: var(--rui-button__width);
		min-width: var(--rui-button__min-width);
		max-width: var(--rui-button__max-width);
		line-height: var(--rui-button__line-height);
		align-items: var(--rui-button__align-items);
		background-color: var(--rui-button__background-color);
		border-radius: var(--rui-button__border-radius);
		border: var(--rui-button__border);
		color: var(--rui-button__color);
		cursor: var(--rui-button__cursor);
		flex-direction: var(--rui-button__flex-direction);
		font-size: var(--rui-button__font-size);
		font-weight: var(--rui-button__font-weight);
		justify-content: var(--rui-button__justify-content);
		padding: var(--rui-button__padding);
		transform: var(--rui-button__transform);
		transition: var(--rui-button__transition);
	}

	.btn:hover {
		color: var(--rui-button__color-hover);
		background-color: var(--rui-button__background-color-hover);
		border: var(--rui-button__border-hover);
		transform: var(--rui-button__transform-hover);
	}

	.btn:focus {
		color: var(--rui-button__color-focus);
		background-color: var(--rui-button__background-color-focus);
		border: var(--rui-button__border-focus);
		transform: var(--rui-button__transform-focus);
		outline: var(--rui-button__focus-outline);
	}

	.btn:active {
		color: var(--rui-button__color-active);
		background-color: var(--rui-button__background-color-active);
		border: var(--rui-button__border-active);
		transform: var(--rui-button__transform-active);
	}
	
	.btn:visited {
		color: var(--rui-button__color-visited);
		background-color: var(--rui-button__background-color-visited);
		border: var(--rui-button__border-visited);
		transform: var(--rui-button__transform-visited);
	}
	
	/* Disabled */
	:host([disabled]) .btn,
	:host([disabled]) .btn:hover,
	:host([disabled]) .btn:focus,
	:host([disabled]) .btn:active {
		background-color: var(--rui-button__background-color-disabled);
		color: var(--rui-button__color-disabled);
		transform: var(--rui-button__transform-disabled);
		border: var(--rui-button__border-disabled);
		cursor: var(--rui-button__cursor-disabled);
	}
`
