import {css} from 'lit-element';

export const variables = css`
	:host {
		--font-size: 1rem;
		--font-size-small: 0.9rem;
		--font-size-large: 1.1rem;
		--font-weight: 400;
		--border-radius: 4px;
		--padding: 15px 25px;
		--padding-small: 8px 15px;
		--padding-large: 22px 38px;
		--color: #fff;
		--color-active: var(--color);
		--color-disabled: #ccc;
		--background-disabled: #ddd;
		--background: #595457;
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

export default css`
	:host {
		display: inline-block;
		width: auto;
	}

	:host[disabled] {
		pointer-events: none;
	}

	.btn {
		text-align: center;
		text-decoration: none;
		text-overflow: ellipsis;
		white-space: nowrap;
		user-select: none;
		vertical-align: top;
		pointer-events: auto;
		font-kerning: none;
		outline: none;
		background-color: transparent;

		display: flex;
		flex-direction: row;

		font-weight: var(--font-weight);
		padding: var(--padding);
		font-size: var(--font-size);
		color: var(--color);
		background: var(--background);
		border: var(--border);
		border-radius: var(--border-radius);
	}

	.btn:hover {
		text-decoration: none;
		transform: translateY(1px);
		cursor: pointer;
		color: var(--color-active);
	}

	/* Variants */

	:host([variant="outline"]) .btn {
		background: transparent;
		border-color: var(--background);
		color: var(--background);
	}

	:host([variant="ghost"]) .btn {
		background: transparent;
		border-color: transparent;
	}

	:host([variant="ghost"]) .btn:hover {
		background: var(--background);
	}

	/* Disabled */

	:host([disabled]) .btn,
	:host([disabled]) .btn:hover {
		cursor: not-allowed;
		background: var(--background);
		border-color: var(--background);
		color: var(--color);
	}
`;
