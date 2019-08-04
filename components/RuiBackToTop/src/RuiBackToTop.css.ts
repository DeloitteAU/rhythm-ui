/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {css} from 'lit-element';

/**
 *  RuiBackToTop Variables
*/
export const variables = css`
	:host {
		--rui-back-to-top__font-size: 14px;
		--rui-back-to-top__font-weight: bold;
		--rui-back-to-top__color: #208834;
		--rui-back-to-top__background: none;
		--rui-back-to-top__border: none;
		--rui-back-to-top__cursor: pointer;
		--rui-back-to-top__height: 26px;
	}
`;

/**
	* RuiBackToTop CSS
*/
export const layout = css`
	.btn {
		font-size: var(--rui-back-to-top__font-size);
		font-weight: var(--rui-back-to-top__font-weight);
		color: var(--rui-back-to-top__color);
		background: var(--rui-back-to-top__background);
		border: var(--rui-back-to-top__border);
		cursor: var(--rui-back-to-top__cursor);
		height: var(--rui-back-to-top__height);
		display: flex;
		align-items: center;
	}

	.btn:hover {
		color: #0C7420;
	}

	.icon-container {
		margin-left: 5px;
		background: #208834;
		height: 20px;
		width: 20px;
		border-radius: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.btn:hover .icon-container {
		background: #0C7420;
	}

	.chevron-up {
		display: inline-block;
		height: 16px;
		width: 16px;
		mask: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='%23000' fill-rule='nonzero' d='M11.25 9.75a.744.744 0 0 1-.53-.22L8 6.81 5.28 9.53a.749.749 0 1 1-1.06-1.06l3.25-3.25a.749.749 0 0 1 1.06 0l3.25 3.25a.749.749 0 0 1-.53 1.28'/%3E%3C/svg%3E%0A");
		/* stylelint-disable-next-line property-no-vendor-prefix */
		-webkit-mask: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='%23000' fill-rule='nonzero' d='M11.25 9.75a.744.744 0 0 1-.53-.22L8 6.81 5.28 9.53a.749.749 0 1 1-1.06-1.06l3.25-3.25a.749.749 0 0 1 1.06 0l3.25 3.25a.749.749 0 0 1-.53 1.28'/%3E%3C/svg%3E%0A");
		mask-size: contain;
		/* stylelint-disable-next-line property-no-vendor-prefix */
		-webkit-mask-size: contain;
		mask-position: center;
		/* stylelint-disable-next-line property-no-vendor-prefix */
		-webkit-mask-position: center;
		background: #FFF;
	}
`;

export default [variables, layout];
