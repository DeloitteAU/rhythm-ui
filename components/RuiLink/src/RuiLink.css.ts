import {css} from 'lit-element';


/**
	*  RuiLink Variables
*/


export const variables = css`
	:host {
		/**
			* @variables for colors
		*/
		--default: #000;
		--error: #FF0000;
		--primary: #4D6CFA;
	}

	/* Colours */
	:host([color="default"]) a {
		color: var (--default);
	}

	:host([color="inherit"]) a {
		color: inherit;
	}

	:host([color="error"]) a {
		color: var (--error);
	}

	:host([color="primary"]) a {
		color: var (--primary);
	}

	/* Underlined on hover */

	:host([underline="none"]) a:hover {
		text-decoration: none;
	}

	:host([underline="hover"]) a:hover {
		text-decoration: underline;
	}

	:host([underline="always"]) a {
		text-decoration: underline;
	}

	:host([underline="invert"]) a {
		text-decoration: underline;
	}

	:host([underline="invert"]) a:hover {
		text-decoration: none;
	}
`;

/**
	* RuiLink CSS
*/


export const layout = css`
	:host a {
		text-decoration: none;
		color: var (--default);
	}

	:host .anchor_link:hover {
		text-decoration: underline;
	}

	:host .active {
		font-weight: bold;
		text-decoration: none;
	}
	
	:host .active a:hover {
		font-weight: bold;
		text-decoration: none;
	}
`;


export default [variables, layout];
