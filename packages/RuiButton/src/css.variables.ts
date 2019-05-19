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
		--color: #fff;

		/**
		 * @variable The active font colour
		 */
		--color-active: var(--color);

		/**
		 * @variable The disabled button font color
		 */
		--color-disabled: #ccc;

		/**
		 * @variable The disabled button background color
		 */
		--background-disabled: #ddd;

		/**
		 * @variable The button accent colour
		 */
		--background: #595457;

		/**
		 * @variable The button border
		 */
		--border: 1px solid var(--background);
	}

	/* Themes */

	:host([type="primary"]) {
		--color: #fff;
		--background: #4D6CFA;
	}

	:host([type="secondary"]) {
		--color: #fff;
		--background: #DE0D92;
	}

	:host([type="tertiary"]) {
		--color: #fff;
		--background: #9E1946;
	}

	/* Variants */

	:host([variant="ghost"]) .btn {
		--color: var(--background);
		--color-active: #fff;
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
		--background: var(--background-disabled);
		--color: var(--color-disabled);
	}

	:host([variant="outline"][disabled]) .btn {
		--background: transparent;
		--color: var(--color-disabled);
	}
`;