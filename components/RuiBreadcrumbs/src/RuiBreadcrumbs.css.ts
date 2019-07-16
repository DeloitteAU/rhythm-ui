import {css} from 'lit-element';


/**
	*  RuiBreadcrumbs Variables
 	*  Added colour to prevent empty block
*/

export const variables = css`
	:host {
		/* BASE STYLES */

		/**
		 * @variable The base colour for the breadcrumbs
		 */
		--color: #000000;
	
		/**
		 * @variable Hover colour for the breadcrumbs
		 */
		--hover-color: #01447E;
	
		/**
		 * @variable padding size
		 */
		--padding: 8px;
	}
    `;

/**
	* RuiBreadcrumbs CSS
*/

export const layout = css`
	/**
		* css for json array breadcrumbs
	*/

	.breadcrumbs ul {
		list-style: none;
	}

	.breadcrumb__item {
		display: inline;
		margin-right: 8px;
	}

	.breadcrumb__item > a,
	.breadcrumb__item > ::slotted(a) {
		cursor: pointer;
		text-decoration: none;
		color: blue;
	}

	.current > a,
	.current > ::slotted(a) {
		cursor: default;
		color: black;
	}

	.breadcrumb__item:not(.current) > a:visited,
	.breadcrumb__item:not(.current) > ::slotted(a:visited) {
		color: blue;
	}

	.breadcrumb__item:not(.current) > a:hover,
	.breadcrumb__item:not(.current) > ::slotted(a:hover) {
		border-bottom: 2px solid blue;
	}

	.breadcrumb__item:not(.current) > a:active,
	.breadcrumb__item:not(.current) > ::slotted(a:active) {
		border-bottom: 2px solid black;
	}

	.breadcrumb__item:not(.current) > a:focus,
	.breadcrumb__item:not(.current) > ::slotted(a:focus) {
		border-bottom: 3px solid blue;
		outline: none;
	}

	.seperator {
		margin-right: 8px;
	}
`;

export default [variables, layout];
