/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {css, unsafeCSS, CSSResult} from 'lit-element';

const maxNoColumns = 16;

 //Create array and shift start from '0' to '1'
const columns = [...Array(maxNoColumns+1).keys()].filter(n => !!n);

/**
 * Creates
 * @param size 
 */
const defineColumnsForSize = (size: string) => columns.reduce((a, n) => css`
	::slotted(.p-${unsafeCSS(size)}-${unsafeCSS(n)}) { grid-column-start: ${unsafeCSS(n)}; }
	::slotted(.${unsafeCSS(size)}-${unsafeCSS(n)}) { grid-column-end: span ${unsafeCSS(n)}; }
	${a}
`, css``);

const defineColumns = () => columns.reduce((a, n) => css` 
	:host([columns="${unsafeCSS(n)}"]) { --template-columns: repeat(${unsafeCSS(n)}, minmax(0, 1fr)); }
	${a}
`, css``);

const bp = (size: string, rules: CSSResult) => {
	switch (size.toLowerCase()) {
		case 'm':
			return css` @media screen and (min-width: 768px) { ${rules} } `;
		case 'l':
			return css` @media screen and (min-width: 1024px) { ${rules} } `;
		case 'xl':
			return css` @media screen and (min-width: 1440px) { ${rules} } `;
		case 'xxl':
			return css` @media screen and (min-width: 1920px) { ${rules} } `;
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
		--template-columns: repeat(var(--columns), minmax(0, 1fr));
	}
`;

/**
 * RuiGrid Styles
 */
export const layout = css`
	:host {
		display: grid;
		grid-template-columns: var(--template-columns);
		grid-auto-flow: dense;
		grid-column-gap: var(--column-gap);
		/* stylelint-disable-next-line declaration-block-no-redundant-longhand-properties */
		grid-row-gap: var(--row-gap);
		max-width: var(--container-width);
		margin: 0 auto;
	}

	${defineColumns()}

	${bp('s', css`
		:host {
			--container-width: 288px;
		}
		${defineColumnsForSize('s')}
	`)}

	${bp('m', css`
		:host {
			--container-width: 720px;
		}
		${defineColumnsForSize('m')}
	`)}

	${bp('l', css`
		:host {
			--container-width: 960px;
		}
		${defineColumnsForSize('l')}
	`)}

	${bp('xl', css`
		:host {
			--container-width: 1216px;
		}
		${defineColumnsForSize('xl')}
	`)}

	${bp('xxl', css`
		:host {
			--container-width: 1640px;
		}
		${defineColumnsForSize('xxl')}
	`)}
`;

export default [variables, layout];
