/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {css} from 'lit-element';

/**
	*  RuiHeroBanner Variables
*/
export const variables = css`
	:host {
		/****************************
		 * DIMENSIONS
		 ***************************/

		/**
		 * @variable Width
		 */
		--rui-hero-banner__height: auto;

		/**
		 * @variable Minimum Width
		 */
		--rui-hero-banner__min-height: auto;

		/**
		 * @variable Maximum Width
		 */
		--rui-hero-banner__max-height: auto;

		/**
		 * @variable The content padding
		 */
		--rui-hero-banner__content-padding: 15px 25px;
	
		/**
		 * @variable The content max-width
		 */
		--rui-hero-banner__content-max-width: 100%;

		/****************************
		 * AESTHETIC
		 ***************************/
 
		/**
		 * @variable Background colour
		 */
		--rui-hero-banner__background-colour: #FEDFED;

		/**
		 * @variable Background image
		 */
		--rui-hero-banner__background-image: undefined;

		/**
		 * @variable Background position
		 */
		--rui-hero-banner__background-position: center;

		/**
		 * @variable Overlay colour
		 */
		--rui-hero-banner__overlay-colour: #000;

		/**
		 * @variable Overlay opacity
		 */
		--rui-hero-banner__overlay-opacity: 0;
	}
`;

/**
	* RuiHeroBanner CSS
*/
export const layout = css`
	:host {
		position: relative;
		padding: 0;
		margin: 0;
		width: 100%;
	}

	.hero-banner {
		position: relative;
		height: var(--rui-hero-banner__height);
		min-height: var(--rui-hero-banner__min-height);
		max-height: var(--rui-hero-banner__max-height);
		background-color: var(--rui-hero-banner__background-colour);
		background-image: var(--rui-hero-banner__background-image);
		background-position: var(--rui-hero-banner__background-position);
		background-repeat: no-repeat;
		background-size: cover;
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #FFF;
		opacity: 0.5;
	}

	.hero-banner-content {
		position: relative;
		max-width: var(--rui-hero-banner__content-max-width);
		padding: var(--rui-hero-banner__content-padding);
	}
`;

export default [variables, layout];
