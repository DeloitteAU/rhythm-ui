import {css, unsafeCSS, CSSResult} from 'lit-element';

const maxNoColumns = 16;

const columns = [...Array(maxNoColumns+1).keys()].filter(n => !!n); //Create array and shift start from '0' to '1'

const defineColumnsForSize = (size: string) => {
	return columns
		.map(n => css` ::slotted(.${unsafeCSS(size)}-${unsafeCSS(n)}) { grid-column-end: span ${unsafeCSS(n)}; } `)
		.reduce((a, b) => css`
			${a}
			${b}
		`);
};

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
 * RuiButton Shadow Dom CSS
 */
export default css`
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

	${defineColumnsForSize('s')}

	${bp('m', defineColumnsForSize('m'))}

	${bp('l', defineColumnsForSize('l'))}

	${bp('xl', defineColumnsForSize('xl'))}

	/* TESTING */

	::slotted(div) {
		background-color: #FEDBED;
	}

	:host(:nth-child(odd)) { background: #CCCCCC; }
`;


