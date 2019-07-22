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
		--rui-breadcrumbs__seperator-padding: 0;
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
		padding: var(--rui-breadcrumbs__seperator-padding);
	}

	.seperator,
	::slotted([slot*="seperator"]) {
		margin: var(--rui-breadcrumbs__margin);
	}

	.selector {
		text-indent: 1px;
		text-overflow: '';
		cursor: pointer;
		font-size: 16px;
		width: 24px;
		text-align: center;
		border-radius: 0;
		padding: var(--rui-breadcrumbs__padding);
	}

	/* remove default select arrow appeareance on chrome, safari, firefox, chromium edge */
	select {
		/* stylelint-disable-next-line property-no-vendor-prefix */
		-webkit-appearance: none;
		/* stylelint-disable-next-line property-no-vendor-prefix */
		-moz-appearance: none;
	}

	/* default select arrow appeareance on IE, oldschool Edge */
	select::-ms-expand {
		display: none;
	}
`;

export default [variables, layout];
