/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {css} from 'lit-element';

/**
 *  RuiHeader Mobile Variables
 */
export const variables = css`
	:host {
		/**
		 * @variable max content width
		 */
		--rui-header__mobile__content-max-width: 100%;

		/**
		 * @variable
		 */
		--rui-header__mobile__main-padding: 5px 0px;

		/**
		 * @variable
		 */
		--rui-header__mobile__main-background: #FFF;

		/**
		 * @variable
		 */
		--rui-header__mobile__main-border-bottom: 1px solid #888;

		/**
		 * @variable
		 */
		--rui-header__mobile__main-box-shadow: 0px 1px 4px #aaaaaa;}
`;

/**
 * RuiHeader Mobile CSS
 */
export const layout = css`
	:host {
		position: relative;
		width: 100%;
	}
	
	.main {
		padding: var(--rui-header__mobile__main-padding);
		background: var(--rui-header__mobile__main-background);
		border-bottom: var(--rui-header__mobile__main-border-bottom);
		box-shadow: var(--rui-header__mobile__main-box-shadow);
	}
	
	.main > .content {
		position: relative;
		display: flex;
		width: 100%;
		max-width: var(--rui-header__mobile__content-max-width);
		margin: 0 auto;
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
	
	.overlay {
		display: block;
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		background: #000;
		opacity: 0;
		pointer-events: none;
	}
    .overlay[active] {
    	opacity: 0.5;
		pointer-events: auto;
    }
	
	.menu {
		display: block;
		position: fixed;
		left: -300px;
		top: 0;
		bottom: 0;
		width: 300px;
		z-index: 1100;
		overflow: hidden;
		background: #ccc;
    }
    .menu[active] {
    	left: 0;
    }
    
    .main > .content {
		display: flex;
		flex-direction: column;
		position: relative;
		width: 100%;
		max-width: var(--rui-header__mobile__content-max-width);
		margin: 0 auto;
	}
`;

export default [variables, layout];
