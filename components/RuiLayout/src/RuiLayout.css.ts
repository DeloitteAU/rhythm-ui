/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {css, unsafeCSS, CSSResult} from 'lit-element';

const bp = (size: string, rules: CSSResult) => {
	switch (size.toLowerCase()) {
		case 'm':
			return css` @media screen and (min-width: 800px) { ${rules} } `;
		case 'l':
			return css` @media screen and (min-width: 1200px) { ${rules} } `;
		case 'xl':
			return css` @media screen and (min-width: 1400px) { ${rules} } `;
		default:
			return rules;
	}
}

/**
 *  RuiGrid Variables
 */
export const variables = css`
	:host {
		/**
		 * @variable The max container width
		 */
		--container-width: 1216px;

		/**
		 * @variable The default number of columns (must be in range 1 to 16)
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
		--template-columns: 336px minmax(0, 1fr) 336px;

		/**
		 * @variable The grid row
		 */
		--template-rows: 80px 1fr 150px;
	}
`;

/**
 * RuiGrid Styles
 */
export const layout = css`
	:host {
		display: grid;
		min-height: 100%;
		grid-template-columns: var(--template-columns);
		grid-template-rows: var(--template-rows);
	}

	:host,
	:host([type="monet"]) {
		grid-template-areas:
			"header header header"
			"main main main"
			"footer footer footer";
	}

	:host([type="vangogh"]) {
		grid-template-areas:
			"header header header"
			"nav main aside"
			"footer footer footer";
	}

	:host([type="picasso"]) {
		grid-template-areas:
			"header header header"
			"nav main main"
			"nav footer footer";
	}

	:host([type="davinci"]) {
		grid-template-areas:
			"header header header"
			"nav main main"
			"footer footer footer";
	}

	::slotted(header) { grid-area: header; }

	::slotted(footer) { grid-area: footer; }

	::slotted(main) { grid-area: main; }

	::slotted(aside) { grid-area: aside; }

	::slotted(nav) { grid-area: nav; }
`;

export default [variables, layout];
