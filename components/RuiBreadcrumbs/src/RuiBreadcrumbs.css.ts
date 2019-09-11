import {css} from 'lit-element';

/**
*  RuiBreadcrumbs Variables
*  Added colour to prevent empty block
*/
export const variables = css`
	:host {
		/**
		 * @variable Crumb padding size
		 */
		--rui-breadcrumbs__separator-padding: 0 8px;

		/**
		 * @variable Separator value
		 */
		--rui-breadcrumbs__separator-content: "/";

		/**
		 * @variable Separator color
		 */
		--rui-breadcrumbs__separator-color: inherit;

		/**
		 * @variable Separator background
		 */
		--rui-breadcrumbs__separator-background: none;

		/**
		 * @variable Expand button color
		 */
		--rui-breadcrumbs__expand-btn-color: inherit;

		/**
		 * @variable Expand button padding
		 */
		--rui-breadcrumbs__expand-btn-padding: 0 4px;

		/**
		 * @variable Crumbs font weight
		 */
		--rui-breadcrumbs__font-weight: normal;

		/**
		 * @variable Crumb text decoration
		 */
		--rui-breadcrumbs__text-decoration: none;

		/**
		 * @variable Crumb text decoration on hover
		 */
		--rui-breadcrumbs__text-decoration-hover: underline;

		/**
		 * @variable Current/Active Crumb font weight
		 */
		--rui-breadcrumbs__current-font-weight: var(--rui-breadcrumbs__font-weight);

		/**
		 * @variable Current/Active Crumb color
		 */
		--rui-breadcrumbs__current-color: inherit;

		/**
		 * @variable Current/Active Crumb color on hover
		 */
		--rui-breadcrumbs__current-color-hover: inherit;
	}
    `;

/**
* RuiBreadcrumbs CSS
*/
export const layout = css`
	/**
		* css for json array breadcrumbs
	*/

	.crumbs ol {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.crumbs li {
		display: inline-block;
	}

	.crumbs li:after {
		display: inline-block;
		padding: var(--rui-breadcrumbs__separator-padding);
		color: var(--rui-breadcrumbs__separator-color);
		content: var(--rui-breadcrumbs__separator-content);
		background: var(--rui-breadcrumbs__separator-background);
	}

	.crumbs li:last-child:after {
		display: none;
	}

	.crumbs li a {
		font-weight: var(--rui-breadcrumbs__font-weight);
		text-decoration: var(--rui-breadcrumbs__text-decoration);
	}

	.crumbs li a:hover {
		text-decoration: var(--rui-breadcrumbs__text-decoration-hover);
	}

	.crumbs li:last-child a {
		font-weight: var(--rui-breadcrumbs__current-font-weight);
		color: var(--rui-breadcrumbs__current-color);
	}

	.crumbs li:last-child a:hover {
		color: var(--rui-breadcrumbs__current-color-hover);
	}

	.expand-btn {
		color: var(--rui-breadcrumbs__expand-btn-color);
		padding: var(--rui-breadcrumbs__expand-btn-padding);
		cursor: pointer;
		border: none;
		background: transparent;
	}
`;

export default [variables, layout];
