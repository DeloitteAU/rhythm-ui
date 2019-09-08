/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {css} from 'lit-element';

/**
 *  RuiHeader Desktop Variables
 */
export const variables = css`
	:host {
		/**
		 * @variable max content width
		 */
		--rui-header__desktop__content-max-width: 100%;

		/**
		 * @variable
		 */
		--rui-header__desktop__utilities-padding: 5px 25px;

		/**
		 * @variable
		 */
		--rui-header__desktop__utilities-background: #cccc;

		/**
		 * @variable
		 */
		--rui-header__desktop__utilities-border-bottom: 1px solid #888;

		/**
		 * @variable
		 */
		--rui-header__desktop__utilities-box-shadow: 0px 1px 4px #aaaaaa;

		/**
		 * @variable
		 */
		--rui-header__desktop__main-padding: 5px 25px;

		/**
		 * @variable
		 */
		--rui-header__desktop__main-background: #FFF;

		/**
		 * @variable
		 */
		--rui-header__desktop__main-border-bottom: 1px solid #888;

		/**
		 * @variable
		 */
		--rui-header__desktop__main-box-shadow: 0px 1px 4px #aaaaaa;
	}
`;

/**
 * RuiHeader Desktop CSS
 */
export const layout = css`
	:host {
		position: relative;
		width: 100%;
	}
	
	.content {
		position: relative;
		display: flex;
		width: 100%;
		max-width: var(--rui-header__desktop__content-max-width);
		margin: 0 auto;
	}
	
	.utilities {
		padding: var(--rui-header__desktop__utilities-padding);
		background: var(--rui-header__desktop__utilities-background);
		border-bottom: var(--rui-header__desktop__utilities-border-bottom);
		box-shadow: var(--rui-header__desktop__utilities-box-shadow);
	}
	
	.main {
		padding: var(--rui-header__desktop__main-padding);
		background: var(--rui-header__desktop__main-background);
		border-bottom: var(--rui-header__desktop__main-border-bottom);
		box-shadow: var(--rui-header__desktop__main-box-shadow);
	}
	
	.content > div {
		display: flex;
		align-items: center;
		flex-grow: 1;
	}
	
	.left {
		justify-content: flex-start;
	}
	
	.center {
		justify-content: center;
	}
	
	.right {
		justify-content: flex-end;
	}
	
`;

export default [variables, layout];
