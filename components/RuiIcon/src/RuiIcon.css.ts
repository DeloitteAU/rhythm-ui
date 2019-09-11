/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {css} from 'lit-element';

/**
 *  RuiIcon Variables
 */
export const variables = css`
		:host {
			/**
			 * @variable Icon width
			 */
			--rui-icon__width: 60px;

			/**
			 * @variable Icon height
			 */
			--rui-icon__height: 60px;

			/**
			 * @variable Icon url
			 */
			--rui-icon__url: url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);

			/**
			 * @variable Icon color (does not work for IE)
			 */
			--rui-icon__color: var(--global-gray-color-3, #673AB7);
		}
	`;

/**
 * RuiIcon CSS
 */
export const layout = css`
	img {
		width: var(--rui-icon__width);
		height: var(--rui-icon__height);
		background: var(--rui-icon__color);
		background-repeat: no-repeat;

		mask: var(--rui-icon__url);
		/* stylelint-disable-next-line property-no-vendor-prefix */
		-webkit-mask: var(--rui-icon__url);
		mask-size: contain;
		/* stylelint-disable-next-line property-no-vendor-prefix */
		-webkit-mask-size: contain;
		mask-position: center;
		/* stylelint-disable-next-line property-no-vendor-prefix */
		-webkit-mask-position: center;
	}
	
	/* stylelint-disable-next-line */
	@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
		img {
			background: transparent;
			background-image: var(--rui-icon__url);
			background-position: center;
			background-size: contain;
		}
	}
`;

export default [variables, layout];
