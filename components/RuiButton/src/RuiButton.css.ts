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
		/**
		 * @variable The default font size
		 */
		--rui-button__font-size: 1rem;

		/**
		 * @variable The font size when small
		 */
		--rui-button__font-size-small: 0.9rem;

		/**
		 * @variable The font size when large
		 */
		--rui-button__font-size-large: 1.1rem;

		/**
		 * @variable The font weight
		 */
		--rui-button__font-weight: 400;

		/**
		 * @variable The border radius
		 */
		--rui-button__border-radius: 4px;

		/**
		 * @variable The regular button padding
		 */
		--rui-button__padding: 15px 25px;

		/**
		 * @variable The small button padding
		 */
		--rui-button__padding-small: 8px 15px;

		/**
		 * @variable The large button padding
		 */
		--rui-button__padding-large: 22px 38px;

		/**
		 * @variable The button font colour
		 */
		--rui-button__color: var(--rui-button__-global-white-color, #FFF);

		/**
		 * @variable The active font colour
		 */
		--rui-button__color-active: var(--rui-button__color);

		/**
		 * @variable The focused font colour
		 */
		--rui-button__color-focus: var(--rui-button__color);

		/**
		 * @variable The hover font colour
		 */
		--rui-button__color-hover: var(--rui-button__color);

		/**
		 * @variable The disabled button font color
		 */
		--rui-button__color-disabled: var(--global-gray-color-2, #CCC);

		/**
		 * @variable The button accent colour
		 */
		--rui-button__background-color: var(--global-gray-color-3, #595457);

		/**
		 * @variable The active font colour
		 */
		--rui-button__background-color-active: var(--global-gray-color-4, #333);

		/**
		 * @variable The focused font colour
		 */
		--rui-button__background-color-focus: var(--global-gray-color-4, #333);

		/**
		 * @variable The hover font colour
		 */
		--rui-button__background-color-hover: var(--global-gray-color-4, #333);

		/**
		 * @variable The disabled button background color
		 */
		--rui-button__background-color-disabled: var(--global-gray-color-1, #DDD);

		/**
		 * @variable The button border colour
		 */
		--rui-button__border-color: var(--rui-button__background-color);

		/**
		 * @variable The active border colour
		 */
		--rui-button__border-color-active: var(--rui-button__border-color);

		/**
		 * @variable The focused border colour
		 */
		--rui-button__border-color-focus: var(--rui-button__border-color);

		/**
		 * @variable The hover border colour
		 */
		--rui-button__border-color-hover: var(--rui-button__border-color);

		/**
		 * @variable The disabled button border color
		 */
		--rui-button__border-color-disabled: var(--rui-button__border-color);

		/**
		 * @variable The button border
		 */
		--rui-button__border: none;

		/**
		 * @variable The active border
		 */
		--rui-button__border-active: var(--rui-button__border);

		/**
		 * @variable The focused border
		 */
		--rui-button__border-focus: var(--rui-button__border);

		/**
		 * @variable The hover border
		 */
		--rui-button__border-hover: var(--rui-button__border);

		/**
		 * @variable The disabled button border
		 */
		--rui-button__border-disabled: none;

		/**
		 * @variable The button display property
		 */
		--rui-button__display: flex;

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
		 * @variable The button transform when hovering
		 */
		--rui-button__transform-hover: translateY(-1px);

		/**
		 * @variable  The button transform when focused
		 */
		--rui-button__transform-focus: translateY(-1px);

		/**
		 * @variable The button transform when active
		 */
		--rui-button__transform-active: translateY(1px);

		/**
		 * @variable  The button transform when disabled
		 */
		--rui-button__transform-disabled: none;

		/**
		 * @variable The button transition
		 */
		--rui-button__transition: background-color 250ms, color 250ms, opacity 250ms, font-size 250ms;

		/**
		 * @variable The button cursor
		 */
		--rui-button__cursor: pointer;

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
		vertical-align: top;
		white-space: nowrap;

		align-items: var(--rui-button__align-items);
		background-color: var(--rui-button__background-color);
		border-radius: var(--rui-button__border-radius);
		border: var(--rui-button__border);
		color: var(--rui-button__color);
		cursor: var(--rui-button__cursor);
		display: var(--rui-button__display);
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
	}

	.btn:active {
		color: var(--rui-button__color-active);
		background-color: var(--rui-button__background-color-active);
		border: var(--rui-button__border-active);
		transform: var(--rui-button__transform-active);
	}

	/* Disabled */
	:host([disabled]) .btn,
	:host([disabled]) .btn:hover,
	:host([disabled]) .btn:focus,
	:host([disabled]) .btn:active {
		cursor: var(--rui-button__cursor-disabled);
		background-color: var(--rui-button__background-color-disabled);
		color: var(--rui-button__color-disabled);
		transform: var(--rui-button__transform-disabled);
		border: var(--rui-button__border-disabled);
	}

	/* Variants */
	:host([variant="outline"]) .btn {
		--rui-button__background-color-active: var(--global-gray-color-3, #595457);
		--rui-button__background-color-focus: var(--global-gray-color-3, #595457);
		--rui-button__background-color-hover: var(--global-gray-color-3, #595457);
		--rui-button__background-color: transparent;
		--rui-button__border-active: var(--rui-button__border);
		--rui-button__border-focus: var(--rui-button__border);
		--rui-button__border-hover: var(--rui-button__border);
		--rui-button__border: 1px solid var(--rui-button__border-color);
		--rui-button__color: var(--global-gray-color-3, #595457);
	}

	:host([variant="ghost"]) .btn {
		--rui-button__background-color-active: var(--global-gray-color-3, #595457);
		--rui-button__background-color-focus: var(--global-gray-color-3, #595457);
		--rui-button__background-color-hover: var(--global-gray-color-3, #595457);
		--rui-button__background-color: transparent;
		--rui-button__border-active: none;
		--rui-button__border-focus: none;
		--rui-button__border-hover: none;
		--rui-button__border: none;
		--rui-button__color: var(--global-gray-color-3, #595457);
	}

	/* Themes */

	/* Primary Theming */
	:host([type="primary"]) {
		--rui-button__color: var(--global-white-color, #FFF);
		--rui-button__border: none;
		--rui-button__background-color: var(--global-primary-color, #4D6CFA);
		--rui-button__background-color-hover: var(--global-primary-shade-4, #0288D1);
		--rui-button__background-color-active: var(--global-primary-shade-4, #0288D1);
		--rui-button__background-color-focus: var(--global-primary-shade-4, #0288D1);
	}

	:host([type="secondary"]) {
		--rui-button__color: var(--rui-button__-global-white-color, #FFF);
		--rui-button__border: none;
		--rui-button__background-color: var(--global-secondary-color, #673AB7);
		--rui-button__background-color-hover: var(--global-secondary-shade-4, #512DA8);
		--rui-button__background-color-active: var(--global-secondary-shade-4, #512DA8);
		--rui-button__background-color-focus: var(--global-secondary-shade-4, #512DA8);
	}

	:host([type="tertiary"]) {
		--rui-button__color: var(--rui-button__-global-white-color, #FFF);
		--rui-button__background-color: var(--global-tertiary-color, #9E1946);
		--rui-button__background-color-hover: var(--global-tertiary-shade-4, #771335);
		--rui-button__background-color-active: var(--global-tertiary-shade-4, #771335);
		--rui-button__background-color-focus: var(--global-tertiary-shade-4, #771335);
	}

	/* Sizes */

	:host([size="small"]) .btn {
		--rui-button__padding: var(--rui-button__padding-small);
		--rui-button__font-size: var(--rui-button__font-size-small);
	}

	:host([size="large"]) .btn {
		--rui-button__padding: var(--rui-button__padding-large);
		--rui-button__font-size: var(--rui-button__font-size-large);
	}
`