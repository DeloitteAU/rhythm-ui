import {css} from 'lit-element';

/**
 * RuiButton CSS Variables
 */
export default css`
	:host {
		/**
		 * @variable The max container width
		 */
		--container-width: 1216px;

		/**
		 * @variable The number of columns (must be in range 1 to 16)
		 */
		--columns: 12;

		/**
		 * @variable The gap between columns
		 */
		--column-gap: 32px;

		/**
		 * @variable The gap between rows
		 */
		--row-gap: var(--column-gap);

		/**
		 * @variable The grids default template columns
		 */
		--template-columns: repeat(var(--columns), 1fr);
	}

	:host([columns="1"]) { --template-columns: repeat(1, 1fr); }
	:host([columns="2"]) { --template-columns: repeat(2, 1fr); }
	:host([columns="3"]) { --template-columns: repeat(3, 1fr); }
	:host([columns="4"]) { --template-columns: repeat(4, 1fr); }
	:host([columns="5"]) { --template-columns: repeat(5, 1fr); }
	:host([columns="6"]) { --template-columns: repeat(6, 1fr); }
	:host([columns="7"]) { --template-columns: repeat(7, 1fr); }
	:host([columns="8"]) { --template-columns: repeat(8, 1fr); }
	:host([columns="9"]) { --template-columns: repeat(9, 1fr); }
	:host([columns="10"]) { --template-columns: repeat(10, 1fr); }
	:host([columns="11"]) { --template-columns: repeat(11, 1fr); }
	:host([columns="12"]) { --template-columns: repeat(12, 1fr); }
	:host([columns="13"]) { --template-columns: repeat(13, 1fr); }
	:host([columns="14"]) { --template-columns: repeat(14, 1fr); }
	:host([columns="15"]) { --template-columns: repeat(15, 1fr); }
	:host([columns="16"]) { --template-columns: repeat(16, 1fr); }
`;
