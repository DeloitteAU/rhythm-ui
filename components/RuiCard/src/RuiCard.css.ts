import {css} from 'lit-element';

/**
*  RuiCard Variables
*/
export const variables = css`
	:host {
		/**
		 * @variable The default box shadow of the card
		 */
		--box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

		/**
		 * @variable The default border radius of the card
		 */
		--border-radius: 5px;

		/**
		 * @variable The default padding of the card
		 */
		--padding: 25px;
	}
`;

/**
* RuiCard CSS
*/
export const layout = css`
	:host {
		display: block;
	}

	.card {
		box-shadow: var(--box-shadow);
		border-radius: var(--border-radius);
		padding: var(--padding);
	}
`;

export default [variables, layout];
