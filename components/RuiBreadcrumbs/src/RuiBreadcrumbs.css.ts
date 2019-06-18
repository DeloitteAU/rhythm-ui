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
	}
    `;

/**
	* RuiBreadcrumbs CSS
*/

export const layout = css`
	.breadcrumb ::slotted([slot=crumb]),
	.breadcrumb div {
		display: inline;
	}
	
	.breadcrumb > ::slotted(div:not(:first-child))::before,
	.breadcrumb div + div:before {
		padding: 8px;
		color: var(--color);
		content: "/\\00a0";
	}
	
	.breadcrumb ::slotted(a:not(:first-child))::before {
		padding: 8px;
		color: var(--color);
		content: "/\\00a0";
		text-decoration: none;
	}
	
	.breadcrumb ::slotted(a) {
		color: var(--color);
		text-decoration: none;
	}
	
	.breadcrumb ::slotted(a:hover),
	.breadcrumb div a:hover {
		color: var(--hover-color);
		text-decoration: underline;
	}
	
	.breadcrumb div a {
		color: var(--color);
		text-decoration: none;
	}
    `;

export default [variables, layout];
