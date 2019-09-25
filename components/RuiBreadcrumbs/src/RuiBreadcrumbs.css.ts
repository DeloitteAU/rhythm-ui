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
		--rui-breadcrumbs__separator-color: #5F5F5F;

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

	.crumbs li::after {
		display: inline-block;
		padding: var(--rui-breadcrumbs__separator-padding);
		color: var(--rui-breadcrumbs__separator-color);
		content: var(--rui-breadcrumbs__separator-content);
		background: var(--rui-breadcrumbs__separator-background);
	}

	.crumbs li:last-child::after {
		display: none;
	}

	::slotted(a) {
		padding: 4px;
		color: #208834;
		text-decoration: none;
	}

	li:last-child ::slotted(a) {
		color: #5F5F5F;
	}

	::slotted(a:focus) {
		outline: currentColor solid 1px;
	}

	::slotted(a:hover) {
		text-decoration: underline;
	}

	li:last-child ::slotted(a:hover) {
		text-decoration: none;
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
