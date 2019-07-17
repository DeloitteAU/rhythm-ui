/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {variables, layout} from './RuiBreadcrumbs.css'


export class RuiBreadcrumbs extends LitElement {
	public constructor() {
		super();
		/**
		 * set child array
		 * */
		this._childArray = [...this.children];
	}

	/**
	 * Private properties to set number of crumbs before and after collapse element
	 * */
	private _childArray: any[] = [];
	private _collapsedArray: any[] = [];
	private _isExpanded: boolean = false;

	public set expand(val) {
		const oldVal = this._isExpanded;
		this._isExpanded = val;
		this.requestUpdate('expand', oldVal);
	}

	public get expand() { return this._isExpanded; }

	/**
	 * The array of breadcrumbs
	 */
	@property({type : String})
	public crumbs?: string = '';

	/**
	 * Maximum length of crumbs to show
	 */
	@property({type : String})
	public maxCrumbs?: string = '';

	/**
    *
    * The styles for breadcrumbs
    * @remarks
    * If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
    */
    public static get styles(): CSSResultArray {
        return [variables, layout];
    }

    /* #endregion */

    /* #region Methods */

	/**
	 * Event handler for expand button, expands
	 */
	public onExpandCollapsedCrumbs = () => {
		console.log('event')
		this.expand = true;
	};

	/**
	 * Create collapsed crumb list array
	 * @param array - Array of elements to add the a collapse element to
	 * @returns {T[] | HTMLLIElement[][]}
	 */
	public createCollapsedCrumbArray = (array, maxLength) => {
		const collapseEl = html`<li><button @click=${this.onExpandCollapsedCrumbs}>... <span class="vh">Show all breadcrumbs</span></button></li>`;

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

		if (this.crumbs) {
			const crumbsArray = JSON.parse(this.crumbs);
			const activeCrumb = crumbsArray.pop();
			this._childArray = crumbsArray.map((crumb: { url: unknown; title: unknown; }) => html`<li><a href=${crumb.url}>${crumb.title}</a></li> `)
			this._childArray.push(html`<li aria-current="page" > ${activeCrumb.title }</li>`);
		}

		if (this.maxCrumbs) {
			this._collapsedArray = this.createCollapsedCrumbArray(this._childArray, parseInt(this.maxCrumbs))
		}

		const crumbsToShow = (!this._isExpanded && !!this.maxCrumbs) ? this._collapsedArray : this._childArray;

		return html`
			<nav aria-label="Breadcrumb" class="crumbs">
				<ol>
					${crumbsToShow.map((child) => (child))}
				</ol>
			</nav>
		`
	}

	/* #endregion */

}

export default RuiBreadcrumbs;
