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

	nav.crumbs ol,
	nav.childCrumbs ol {
		list-style: none;
	}
	
	nav.crumbs li,
	nav.childCrumbs li {
		display: inline;
	}
	
	nav.crumbs li + li::before {
		padding: var (--padding);
		color: var(--color);
		content: "/";
	}
	
	nav.crumbs a:hover,
	nav.crumbs a:focus {
		color: var(--hover-color);
		text-decoration: underline;
	}
	
	nav.crumbs a {
		color: var(--color);
		text-decoration: none;
	}
	
	nav.crumbs [aria-current="page"] {
		font-weight: bold;
		text-decoration: none;
	}
	
	/**
		* css for breadcrumbs with rui-link
	*/
	
	.crumbs ol > ::slotted(li) {
		display: inline;
	}
	
	nav.crumbs ::slotted([aria-current="page"]) {
		font-weight: bold;
		text-decoration: none;
	}

	#collapsedEl {
		cursor: pointer;
		background-color: #EEEEEE;
		margin: 0 5px;
		padding: 0 5px;
		border-radius: 5px;
	}
	
	#collapsedEl:hover {
		background-color: lightgrey;
	}
`;

export default [variables, layout];
