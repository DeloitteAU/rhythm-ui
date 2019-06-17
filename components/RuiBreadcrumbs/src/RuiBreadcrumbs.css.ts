import {css} from 'lit-element';


/**
	*  RuiBreadcrumbs Variables
 	*  Added colour to prevent empty block
*/

export const variables = css`
	:host {
		color: inherit;
	}
    `;

/**
	* RuiBreadcrumbs CSS
*/

export const layout = css`
	.breadcrumb ::slotted(div) {
		display: inline;
		font-size: 18px;
		color: black;
		text-decoration: none;
	}
	
	.breadcrumb > ::slotted(div:not(:first-child))::before {
		padding: 8px;
		color: black;
		content: "/\\00a0";
	}
	
	.breadcrumb ::slotted(a:hover) {
		color: #01447E;
		text-decoration: underline;
	}
	
	.breadcrumb div {
		display: inline;
		font-size: 18px;
	}
	
	.breadcrumb div + div:before {
		padding: 8px;
		color: black;
		content: "/\\00a0";
	}
	
	.breadcrumb div a {
		color: black;
		text-decoration: none;
	}
	
	.breadcrumb div a:hover {
		color: #01447E;
		text-decoration: underline;
	}
    `;

export default [variables, layout];
