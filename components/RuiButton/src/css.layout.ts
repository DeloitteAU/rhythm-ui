import {css} from 'lit-element';

/**
 * RuiButton Shadow Dom CSS
 */
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
