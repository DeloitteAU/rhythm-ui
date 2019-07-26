/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {css} from 'lit-element';

/**
*  RuiPagination Variables
*/
export const variables = css`
	:host {
		/**
		 * @variable The pagination item font size
		 */
		--rui-pagination__font-size: 14px;

		/**
		 * @variable The pagination item font weight
		 */
		--rui-pagination__font-weight: bold;

		/**
		 * @variable The pagination item height
		 */
		--rui-pagination__height: 48px;

		/**
		 * @variable The pagination item width
		 */
		--rui-pagination__width: 48px;

		/**
		 * @variable The pagination item text alignment
		 */
		--rui-pagination__text-align: center;

		/**
		 * @variable The pagination item margin
		 */
		--rui-pagination__margin: 0 3px;

		/**
		 * @variable The pagination item border radius
		 */
		--rui-pagination__border-radius: 2px;

		/**
		 * @variable The pagination item transition
		 */
		--rui-pagination__transition: outline 150ms, color 150ms, background-color 150ms, border-color 150ms;

		/**
		 * @variable The pagination arrow transition
		 */
		--pagination-arrow-transition: var(--pagination-item-transition);

		/**
		 * @variable The pagination item outline when focused
		 */
		--rui-pagination__outline-focus: none;

		/**
		 * @variable The content value for the pagination item after pseudoelement when
		 * focused. If you do not want the after element border effect when focused, then
		 * set this to 'unset'
		 */
		--rui-pagination__after-content-focus: '';

		/**
		 * @variable The border value for the pagination item after pseudoelement when focused
		 */
		--rui-pagination__after-border-focus: 2px solid #208834;

		/**
		 * @variable The pagination item font colour
		 */
		--rui-pagination__color: #000;

		/**
		 * @variable The current pagination item font colour
		 */
		--rui-pagination__current-color: #FFF;

		/**
		 * @variable The pagination item font colour when hovered
		 */
		--rui-pagination__color-hover: #208834;

		/**
		 * @variable The pagination item font colour when focused
		 */
		--rui-pagination__color-focus: #FFF;

		/**
		 * @variable The pagination item font colour when active
		 */
		--rui-pagination__color-active: #208834;

		/**
		 * @variable The pagination item font colour when disabled
		 */
		--rui-pagination__color-disabled: #000;

		/**
		 * @variable The pagination item background
		 */
		--rui-pagination__background: none;

		/**
		 * @variable The current pagination item background
		 */
		--rui-pagination__current-background: #208834;

		/**
		 * @variable The pagination item background when hovered
		 */
		--rui-pagination__background-hover: none;

		/**
		 * @variable The pagination item background when focused
		 */
		--rui-pagination__background-focus: #208834;

		/**
		 * @variable The pagination item background when active
		 */
		--rui-pagination__background-active: none;

		/**
		 * @variable The pagination item background when disabled
		 */
		--rui-pagination__background-disabled: none;

		/**
		 * @variable The pagination item border
		 */
		--rui-pagination__border: none;

		/**
		 * @variable The current pagination item border
		 */
		--rui-pagination__current-border: none;

		/**
		 * @variable The pagination item border when hovered
		 */
		--rui-pagination__border-hover: none;

		/**
		 * @variable The pagination item border when focused
		 */
		--rui-pagination__border-focus: 1px solid white;

		/**
		 * @variable The pagination item border when active
		 */
		--rui-pagination__border-active: none;

		/**
		 * @variable The pagination item border when disabled
		 */
		--rui-pagination__border-disabled: none;

		/**
		 * @variable The pagination item text decoration
		 */
		--rui-pagination__text-decoration: none;

		/**
		 * @variable The current pagination item text decoration
		 */
		--rui-pagination__current-text-decoration: none;

		/**
		 * @variable The pagination item text decoration when hovered
		 */
		--rui-pagination__text-decoration-hover: none;

		/**
		 * @variable The pagination item text decoration when focused
		 */
		--rui-pagination__text-decoration-focus: none;

		/**
		 * @variable The pagination item text decoration when active
		 */
		--rui-pagination__text-decoration-active: none;

		/**
		 * @variable The pagination item text decoration when disabled
		 */
		--rui-pagination__text-decoration-disabled: none;

		/**
		 * @variable The prev/next arrow colour
		 */
		--rui-pagination__arrow-color: #000;

		/**
		 * @variable The prev/next arrow colour when hovered
		 */
		--rui-pagination__arrow-color-hover: #208834;

		/**
		 * @variable The prev/next arrow colour when focused
		 */
		--rui-pagination__arrow-color-focus: #FFF;

		/**
		 * @variable The prev/next arrow colour when active
		 */
		--rui-pagination__arrow-color-active: #000;

		/**
		 * @variable The prev/next arrow side
		 */
		--rui-pagination__arrow-size: 16px;

		/**
		 * @variable The prev/next arrow colour when disabled
		 */
		--rui-pagination__arrow-color-disabled: rgba(95, 95, 95, 0.5);
	}
`;

/**
* RuiPagination CSS
*/
export const layout = css`
	.pagination {
		display: flex;
		flex-flow: row wrap;
		list-style: none;
	}

	.pagination-link,
	.ellipses {
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		box-sizing: border-box;

		font-size: var(--rui-pagination__font-size);
		font-weight: var(--rui-pagination__font-weight);
		width: var(--rui-pagination__width);
		height: var(--rui-pagination__height);
		text-align: var(--rui-pagination__text-align);
		margin: var(--rui-pagination__margin);
		color: var(--rui-pagination__color);
		text-decoration: var(--rui-pagination__text-decoration);
		border-radius: var(--rui-pagination__border-radius);
		transition: var(--rui-pagination__transition);
	}

	.pagination-link:not(.disabled):not(.pagination-link--current):hover {
		color: var(--rui-pagination__color-hover);
		background: var(--rui-pagination__background-hover);
		border: var(--rui-pagination__border-hover);
		text-decoration: var(--rui-pagination__text-decoration-hover);
	}

	.pagination-link:not(.disabled):not(.pagination-link--current):active {
		color: var(--rui-pagination__color-active);
		background: var(--rui-pagination__background-active);
		border: var(--rui-pagination__border-active);
		text-decoration: var(--rui-pagination__text-decoration-active);
	}

	.pagination-link:not(.disabled):not(.pagination-link--current):focus {
		color: var(--rui-pagination__color-focus);
		background: var(--rui-pagination__background-focus);
		border: var(--rui-pagination__border-focus);
		text-decoration: var(--rui-pagination__text-decoration-focus);
		outline: var(--rui-pagination__outline-focus);
		position: relative;
	}

	.pagination-link:not(.disabled):not(.pagination-link--current):focus:after {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		border: var(--rui-pagination__after-border-focus);
		background: var(--rui-pagination__after-background-focus);
		content: var(--rui-pagination__after-content-focus);
		width: var(--rui-pagination__width);
		height: var(--rui-pagination__height);
		border-radius: var(--rui-pagination__border-radius);
	}

	.pagination-link--next:hover .arrow,
	.pagination-link--previous:hover .arrow {
		cursor: pointer;
		background: var(--rui-pagination__arrow-color-hover);
	}

	.pagination-link--next:focus .arrow,
	.pagination-link--previous:focus .arrow {
		cursor: pointer;
		background: var(--rui-pagination__arrow-color-focus);
	}

	.pagination-link--next.disabled .arrow,
	.pagination-link--previous.disabled .arrow {
		cursor: not-allowed;
	}

	.pagination-link--next.disabled,
	.pagination-link--previous.disabled {
		cursor: not-allowed;
	}

	.pagination-item.disabled .arrow {
		background: var(--rui-pagination__arrow-color-disabled);
	}

	.pagination-link--current {
		cursor: default;
		color: var(--rui-pagination__current-color);
		background: var(--rui-pagination__current-background);
		border: var(--rui-pagination__current-border);
		text-decoration: var(--rui-pagination__current-text-decoration);
	}

	.ellipses {
		cursor: default;
		font-weight: normal;
		letter-spacing: 1px;
	}

	.arrow-right {
		mask: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23000' fill-rule='nonzero' d='M.75 7.25h12.689L9.47 3.28a.749.749 0 1 1 1.06-1.06l5.25 5.25a.749.749 0 0 1 0 1.06l-5.25 5.25A.744.744 0 0 1 10 14a.749.749 0 0 1-.53-1.28l3.969-3.97H.75a.75.75 0 0 1 0-1.5'/%3E%3C/svg%3E");
		/* stylelint-disable-next-line property-no-vendor-prefix */
		-webkit-mask: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23000' fill-rule='nonzero' d='M.75 7.25h12.689L9.47 3.28a.749.749 0 1 1 1.06-1.06l5.25 5.25a.749.749 0 0 1 0 1.06l-5.25 5.25A.744.744 0 0 1 10 14a.749.749 0 0 1-.53-1.28l3.969-3.97H.75a.75.75 0 0 1 0-1.5'/%3E%3C/svg%3E");
	}

	.arrow-left {
		mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23000' fill-rule='nonzero' d='M15.25 7.25H2.56l3.97-3.97a.749.749 0 1 0-1.06-1.06L.22 7.47a.749.749 0 0 0 0 1.06l5.25 5.25c.146.147.338.22.53.22a.749.749 0 0 0 .53-1.28L2.56 8.75h12.69a.75.75 0 0 0 0-1.5'/%3E%3C/svg%3E");
		/* stylelint-disable-next-line property-no-vendor-prefix */
		-webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23000' fill-rule='nonzero' d='M15.25 7.25H2.56l3.97-3.97a.749.749 0 1 0-1.06-1.06L.22 7.47a.749.749 0 0 0 0 1.06l5.25 5.25c.146.147.338.22.53.22a.749.749 0 0 0 .53-1.28L2.56 8.75h12.69a.75.75 0 0 0 0-1.5'/%3E%3C/svg%3E");
	}

	.arrow {
		display: inline-block;
		width: var(--rui-pagination__arrow-size);
		height: var(--rui-pagination__arrow-size);
		transition: var(--pagination-arrow-transition);
		background: var(--rui-pagination__arrow-color);
		mask-size: cover;
		/* stylelint-disable-next-line property-no-vendor-prefix */
		-webkit-mask-size: cover;
	}
`;

export default [variables, layout];
