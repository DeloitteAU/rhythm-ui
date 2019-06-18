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
	.crumbs div + div:before {
		padding: var (--padding);
		color: var(--color);
		content: "/\\00a0";
	}

	.crumbs div a:hover {
		color: var(--hover-color);
		text-decoration: underline;
	}
	
	.crumbs div a {
		color: var(--color);
		text-decoration: none;
	}
	
	.crumbs .active_crumb {
		font-weight: bold;
	}
	
	.crumbs div,
	.crumbs > ::slotted(rui-link) {
		display: inline;
	}
	
	.crumbs > ::slotted(rui-link:not(:first-of-type))::before {
		padding: var (--padding);
		color: var(--color);
		content: "/\\00a0";
	}
    `;

export default [variables, layout];
