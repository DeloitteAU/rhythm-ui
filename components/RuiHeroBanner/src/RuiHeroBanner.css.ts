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
		 * @variable The regular padding
		 */
		--rui-hero-banner__padding: 15px 25px;

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
	}
`;

/**
	* RuiHeroBanner CSS
*/
export const layout = css`
	:host {
		padding: 0;
		margin: 0;
		width: 100%;
	}

	.hero-banner {
		height: var(--rui-hero-banner__height);
		min-height: var(--rui-hero-banner__min-height);
		max-height: var(--rui-hero-banner__max-height);
		padding: var(--rui-hero-banner__padding);
		background-color: var(--rui-hero-banner__background-colour);
		background-image: var(--rui-hero-banner__background-image);
		background-position: var(--rui-hero-banner__background-position);
		background-repeat: no-repeat;
		background-size: cover;
	}
`;

export default [variables, layout];
