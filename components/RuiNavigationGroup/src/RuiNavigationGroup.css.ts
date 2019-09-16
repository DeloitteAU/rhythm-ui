/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {css} from 'lit-element';

/**
	*  RuiNavigationGroup Variables
*/
export const variables = css`
    :host {
		--background-colour: white;
		--primary-colour: #208834;
    }
	`;

/**
	* RuiNavigationGroup CSS
*/
export const layout = css`
	:host {
		border-bottom: #c8cacc solid 1px;
	}

	* {
		box-sizing: border-box;
	}

	p {
		margin: 0;
	}

	.details {
		display: none;
	}

	.container:hover > .details,
	.container.current > .details {
		display: flex;
		flex-direction: column;
		background: var(--background-colour);
	}

	.first-column {
		display: none;
	}

	.summary {
		display: flex;
		padding: 0 0 0 1em;
		align-items: center;
		justify-content: space-between;
	}

	.summary__icon {
		fill: var(--primary-colour);
		transition: transform 0.1s;
	}
	
    .summary__icon-container {
		display: inline-flex;
		min-width: 48px;
		min-height: 48px;
		border-left: #c8cacc solid 1px;
		justify-content: center;
		align-items: center;
	}

	.container:hover .summary__icon,
	.container.current .summary__icon {
		transform: rotate(180deg);
	}

	.summary__name {
		margin-right: 0.5em;
		text-decoration: none;
		font-size: 14px;
		font-weight: bold;
	}

	.summary__name:visited {
		color: inherit;
	}

	.summary__icon-container:focus,
	.summary__name:focus {
		outline: var(--primary-colour) solid;
	}

	.name.current {
		color: var(--primary-colour);
	}

	@media (min-width: 769px) {
		:host {
			border: none;
		}

		:host(:last-of-type) {
			border: none;
		}

		.container:hover > .details,
		.container.current > .details {
			width: 100%;
			padding: 3em 2em;
			flex-direction: row;
			flex-wrap: wrap;
			position: absolute;
			left: 0;
			top: 100%;
		}

		.summary {
			padding: 2em 0;
			border-bottom: transparent solid 4px;
			margin: 0 1em;
		}

		.current .summary {
			border-color: var(--primary-colour);
		}

		.summary__icon-container {
			border-left: none;
		}

		.summary__name {
			display: inline-block;
		}

		.first-column {
			display: block;
			flex: 1 1 320px;
		}
	
		.second-column {
			flex: 2 1 320px;
			columns: 320px;
		}

		.second-column ::slotted(*) {
			display: inline-block;
			width: 100%;
		}
	}
`;

export default [variables, layout];
