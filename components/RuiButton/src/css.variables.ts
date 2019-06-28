import {css} from 'lit-element';

/**
 * RuiButton CSS Variables
 */
export default css`
	:host {
		/**
		 * @variable The default font size
		 */
		--font-size: 1rem;

		/**
		 * @variable The font size when small
		 */
		--font-size-small: 0.9rem;

		/**
		 * @variable The font size when large
		 */
		--font-size-large: 1.1rem;

		/**
		 * @variable The font weight
		 */
		--font-weight: 400;

		/**
		 * @variable The border radius
		 */
		--border-radius: 4px;

		/**
		 * @variable The regular button padding
		 */
		--padding: 15px 25px;

		/**
		 * @variable The small button padding
		 */
		--padding-small: 8px 15px;

		/**
		 * @variable The large button padding
		 */
		--padding-large: 22px 38px;

		/**
		 * @variable The button font colour
		 */
		--color: #FFF;

		/**
		 * @variable The active font colour
		 */
		--color-active: var(--color);

		/**
		 * @variable The disabled button font color
		 */
		--color-disabled: #CCC;

		/**
		 * @variable The disabled button background color
		 */
		--background-color-disabled: #DDD;

		/**
		 * @variable The button accent colour
		 */
		--background-color: #673AB7;

		/**
		 * @variable The active button accent colour
		 */
		--background-active: #512DA8;

		/**
		 * @variable The button border colour
		 */
		--border-color: var(--background-color);

		/**
		 * @variable The button border
		 */
		--border: 1px solid var(--border-color);
	}

	/* Themes */

	:host([type="primary"]) {
		--color: #FFF;
		--background-color: #03A9F4;
		--background-active: #0288D1;
	}

	:host([type="secondary"]) {
		--color: #FFF;
		--background-color: #009688;
		--background-active: #00796B;
	}

	:host([type="tertiary"]) {
		--color: #FFF;
		--background-color: #8BC34A;
		--background-active: #689F38;
	}

	/* Variants */

	:host([variant="ghost"]) .btn {
		--color: var(--background-color);
		--color-active: #FFF;
	}

	/* Sizes */

	:host([size="small"]) .btn {
		--padding: var(--padding-small);
		--font-size: var(--font-size-small);
	}

	:host([size="large"]) .btn {
		--padding: var(--padding-large);
		--font-size: var(--font-size-large);
	}

	/* Disabled */

	:host([disabled]) .btn {
		--background-color: var(--background-color-disabled);
		--color: var(--color-disabled);
	}

	:host([variant="outline"][disabled]) .btn {
		--background-color: transparent;
		--color: var(--color-disabled);
	}
`;
