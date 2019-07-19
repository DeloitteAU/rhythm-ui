import {css} from 'lit-element';


/**
 *  RuiBreadcrumbs Variables
 */
export const variables = css`
	:host {
		/**
		 * @variable The padding on each breadcrumb link item
		 */
		--rui-breadcrumbs__padding: 0 4px;

		/**
		 * @variable The padding on each breadcrumb link item when focused
		 */
		--rui-breadcrumbs__padding-focus: 0 3px;

		/**
		 * @variable The margin on each breadcrumb link item
		 */
		--rui-breadcrumbs__margin: 0 3px 0 0;

		/**
		 * @variable The text colour for breadcrumb links
		 */
		--rui-breadcrumbs__color: #0074DD;

		/**
		 * @variable The text colour for visted breadcrumb links
		 */
		--rui-breadcrumbs__color-visited: var(--rui-breadcrumbs__color);

		/**
		 * @variable The text colour for active breadcrumb links
		 */
		--rui-breadcrumbs__color-active: var(--rui-breadcrumbs__color);

		/**
		 * @variable The text colour for hovered breadcrumb links
		 */
		--rui-breadcrumbs__color-hover: var(--rui-breadcrumbs__color);

		/**
		 * @variable The text colour for focused breadcrumb links
		 */
		--rui-breadcrumbs__color-focus: var(--rui-breadcrumbs__color);

		/**
		 * @variable The text colour for the current breadcrumb link
		 */
		--rui-breadcrumbs__current-color: #000;

		/**
		 * @variable The text decoration for the breadcrumb links
		 */
		--rui-breadcrumbs__text-decoration: none;

		/**
		 * @variable The text decoration for visited breadcrumb links
		 */
		--rui-breadcrumbs__text-decoration-visited: none;

		/**
		 * @variable The text decoration for active breadcrumb links
		 */
		--rui-breadcrumbs__text-decoration-active: underline;

		/**
		 * @variable The text decoration for hovered breadcrumb links
		 */
		--rui-breadcrumbs__text-decoration-hover: underline;

		/**
		 * @variable The text decoration for focused breadcrumb links
		 */
		--rui-breadcrumbs__text-decoration-focus: underline;

		/**
		 * @variable The text decoration for the current breadcrumb link
		 */
		--rui-breadcrumbs__current-text-decoration: none;

		/**
		 * @variable The outline shown around breadcrumb links when focused
		 */
		--rui-breadcrumbs__outline-focus: none;

		/**
		 * @variable The border shown around breadcrumb links
		 */
		--rui-breadcrumbs__border: none;

		/**
		 * @variable The border shown around visited breadcrumb links
		 */
		--rui-breadcrumbs__border-visited: none;

		/**
		 * @variable The border shown around active breadcrumb links
		 */
		--rui-breadcrumbs__border-active: none;

		/**
		 * @variable The border shown around hovered breadcrumb links
		 */
		--rui-breadcrumbs__border-hover: none;

		/**
		 * @variable The border shown around focused breadcrumb links
		 */
		--rui-breadcrumbs__border-focus: 1px solid var(--rui-breadcrumbs__color);

		/**
		 * @variable The border shown around the current breadcrumb link
		 */
		--rui-breadcrumbs__current-border: none;

		/**
		 * @variable The background for the breadcrumb links
		 */
		--rui-breadcrumbs__background: none;

		/**
		 * @variable The background for visited breadcrumb links
		 */
		--rui-breadcrumbs__background-visited: none;

		/**
		 * @variable The background for active breadcrumb links
		 */
		--rui-breadcrumbs__background-active: none;

		/**
		 * @variable The background for hovered breadcrumb links
		 */
		--rui-breadcrumbs__background-hover: none;

		/**
		 * @variable The background for focused breadcrumb links
		 */
		--rui-breadcrumbs__background-focus: none;

		/**
		 * @variable The background for the current breadcrumb link
		 */
		--rui-breadcrumbs__current-background: none;

		/**
		 * @variable The padding for the seperators between links
		 */
		--rui-breadcrumbs__seperator-padding: 0 6px;
	}
`;

/**
 * RuiBreadcrumbs CSS
*/
export const layout = css`
	.breadcrumbs ul {
		list-style: none;
	}

	.breadcrumb__item {
		display: inline;
		margin: var(--rui-breadcrumbs__margin);
	}

	.breadcrumb__item > a,
	.breadcrumb__item > ::slotted(a),
	.selector {
		box-sizing: border-box;
		cursor: pointer;
		color: var(--rui-breadcrumbs__color);
		padding: var(--rui-breadcrumbs__padding);
		border: var(--rui-breadcrumbs__border);
		background: var(--rui-breadcrumbs__background);
		text-decoration: var(--rui-breadcrumbs__text-decoration);
	}

	.current > a,
	.current > ::slotted(a) {
		cursor: default;
		color: var(--rui-breadcrumbs__current-color);
		border: var(--rui-breadcrumbs__current-border);
		background: var(--rui-breadcrumbs__current-background);
		text-decoration: var(--rui-breadcrumbs__current-text-decoration);
	}

	.breadcrumb__item:not(.current) > a:visited,
	.breadcrumb__item:not(.current) > ::slotted(a:visited) {
		color: var(--rui-breadcrumbs__color-visited);
		border: var(--rui-breadcrumbs__border-visited);
		background: var(--rui-breadcrumbs__background-visited);
		text-decoration: var(--rui-breadcrumbs__text-decoration-visited);
	}

	.selector:hover,
	.breadcrumb__item:not(.current) > a:hover,
	.breadcrumb__item:not(.current) > ::slotted(a:hover) {
		color: var(--rui-breadcrumbs__color-hover);
		border: var(--rui-breadcrumbs__border-hover);
		background: var(--rui-breadcrumbs__background-hover);
		text-decoration: var(--rui-breadcrumbs__text-decoration-hover);
	}

	.breadcrumb__item:not(.current) > a:active,
	.breadcrumb__item:not(.current) > ::slotted(a:active) {
		color: var(--rui-breadcrumbs__color-active);
		border: var(--rui-breadcrumbs__border-active);
		background: var(--rui-breadcrumbs__background-active);
		text-decoration: var(--rui-breadcrumbs__text-decoration-active);
	}

	.selector:focus,
	.breadcrumb__item:not(.current) > a:focus,
	.breadcrumb__item:not(.current) > ::slotted(a:focus) {
		color: var(--rui-breadcrumbs__color-focus);
		padding: var(--rui-breadcrumbs__padding-focus);
		border: var(--rui-breadcrumbs__border-focus);
		background: var(--rui-breadcrumbs__background-focus);
		text-decoration: var(--rui-breadcrumbs__text-decoration-focus);
		outline: var(--rui-breadcrumbs__outline-focus);
	}

	.seperator {
		display: inline;
		position: relative;
		padding: var(--rui-breadcrumbs__seperator-padding);
	}

	.seperator:before {
		position: absolute;
		top: 1px;
		right: 3px;
		width: 100%;
		height: 100%;
		content: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='20px' height='20px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='icon-/-16-/-chev-right' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M11.50025,10.50025 C11.37225,10.50025 11.24425,10.45125 11.14625,10.35425 L8.00025,7.20725 L4.85425,10.35425 C4.65825,10.54925 4.34225,10.54925 4.14625,10.35425 C3.95125,10.15825 3.95125,9.84225 4.14625,9.64625 L7.64625,6.14625 C7.84225,5.95125 8.15825,5.95125 8.35425,6.14625 L11.85425,9.64625 C12.04925,9.84225 12.04925,10.15825 11.85425,10.35425 C11.75625,10.45125 11.62825,10.50025 11.50025,10.50025' id='Icon' fill='%23000000' fill-rule='nonzero' transform='translate(8.000250, 8.250250) rotate(-270.000000) translate(-8.000250, -8.250250) '%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
	}

	.seperator,
	::slotted([slot*="seperator"]) {
		margin: var(--rui-breadcrumbs__margin);
	}

	.selector {
		/* stylelint-disable-next-line property-no-vendor-prefix */
		-webkit-appearance: none;
		/* stylelint-disable-next-line property-no-vendor-prefix */
		-moz-appearance: none;
		text-indent: 1px;
		text-overflow: '';
		cursor: pointer;
		font-size: 16px;
		width: 24px;
		text-align: center;
		border-radius: 0;
		padding: var(--rui-breadcrumbs__padding);
	}
`;

export default [variables, layout];
