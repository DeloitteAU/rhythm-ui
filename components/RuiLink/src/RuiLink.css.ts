import {css} from 'lit-element';


/**
	*  RuiLink Variables
*/


export const variables = css``;

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
