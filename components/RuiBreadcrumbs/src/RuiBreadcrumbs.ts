/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {getShadowStylesFor} from '@rhythm-ui/styles';
import {variables, layout} from './RuiBreadcrumbs.css'

/**
 * RuiBreadcrumb component
 */
export class RuiBreadcrumbs extends LitElement {

	/* #region Properties */

	/**
	 * The breadcrumbs elements
	 */
	private _crumbs: TemplateResult[] = [];

	/**
	 * True shows all the breadcrumbs
	 */
	private _isExpanded: boolean = false;

	/**
	 * Setter for _isExpanded
	 */
	public set expanded(val) {
		const oldVal = this._isExpanded;
		this._isExpanded = val;
		this.requestUpdate('expanded', oldVal);
	}

	/**
	 * Getter for _isExpanded
	 */
	public get expanded() {
		return this._isExpanded;
	}

	/**
	 * Maximum length of crumbs to show before truncation
	 */
	@property({type : Number})
	public max?: number;

	/**
	* The styles for breadcrumbs
	*/
	public static get styles(): CSSResultArray {
		return [variables, layout, getShadowStylesFor('RuiBreadcrumbs')];
	}

	/* #endregion */

	/* #region Methods */

	/**
	 * Connected callback
	*/
	public connectedCallback() {
		super.connectedCallback();

		this._crumbs = 
			[...this.children]
			.map((c, i) => {
				c.slot = i;

				// A11y. Set the aria-current on the last element if not done so
				if (i === this.children.length - 1 && !c.getAttribute('aria-current')) {
					c.setAttribute('aria-current', 'page');
				}
				return html`
					<li>
						<slot name=${i}></slot>
					</li>`;
			});
	}

	/**
	 * Event handler for expand button, expands
	 */
	private _handleExpandButtonClick = () => {
		this.expanded = true;
		this.dispatchEvent(new Event('onexpand'));
	}

	/**
	 * Create collapsed crumb list array
	 * @param array - Array of elements to add the a collapse element to
	 * @returns {T[] | HTMLLIElement[][]}
	 */
	public createCollapsedCrumbArray = (array, maxLength) => {
		const collapseEl = html`
			<li>
				<button
					class="expand-btn"
					aria-expanded="false"
					aria-label="Show hidden breadcrumbs"
					@click=${this._handleExpandButtonClick}
				>
					&hellip;
				</button>
			</li>`;

		const collapseArray = [
			...array.slice(0, 1),
			collapseEl,
			...array.slice((array.length - (maxLength - 1)), array.length)
		];

		return collapseArray;
	};

	/**
	 * Render function
	 * @returns {TemplateResult}
	 */
	public render(): TemplateResult {

		const crumbs = (!this.expanded && !!this.max) ? 
			this.createCollapsedCrumbArray(this._crumbs, this.max)
			: this._crumbs;

		return html`
			<nav aria-label="Breadcrumbs" class="crumbs">
				<ol>
					${crumbs}
				</ol>
			</nav>
		`
	}

	/* #endregion */

}

export default RuiBreadcrumbs;
