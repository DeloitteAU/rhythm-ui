import {css} from 'lit-element';


/**
	*  RuiLink Variables
*/


export const variables = css`
	/* Colours */
	:host([color="default"]) a {
		color: #000;
	}

	:host([color="inherit"]) a {
		color: inherit;
	}

	:host([color="error"]) a {
		color: #FF0000;
	}

	:host([color="primary"]) a {
		color: #4D6CFA;
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
		color: inherit;
	}

	:host .link:hover {
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
