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
		 * set child array and collapsed array
		 * */
		this._childArray = [...this.children];
	}

	/**
	 * Private properties to set number of crumbs before and after collapse element
	 * */
	private _itemsBeforeCollapse: number = 1;
	private _itemsAfterCollapse: number = 1;
	private _collapsedSlotEl: HTMLSlotElement | null = null;

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
	public separator?: string = '/';

	/**
	 * The array of breadcrumbs
	 */
	@property({type : String})
	public crumbs?: string = '';

	/**
	 * The array of breadcrumbs
	 */
	@property({type : Number})
	public maxCrumbs?: number = undefined;

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

    public render(): TemplateResult {

		if (this.crumbs) {
			const crumbsArray = JSON.parse(this.crumbs);
			const activeCrumb = crumbsArray.pop();
			return html`
				<nav aria-label="Breadcrumb" class="crumbs">
					<ol>
						${crumbsArray.map((crumb: { url: unknown; title: unknown; }) => html`<li><a href=${crumb.url}>${crumb.title}</a></li> `)}
						<li aria-current="page" > ${activeCrumb.title }</li>
					</ol>
				</nav>`
		} else if (this.maxCrumbs && (this.maxCrumbs <= this._childArray.length)) {
			this._itemsAfterCollapse = this.maxCrumbs - 1;
			this._collapsedArray = this.collapsedBreadcrumbs([...this.children]);
			return html`
			<nav aria-label="Breadcrumb" class="childCrumbs">
				<ol>
					${this.applySeparators(this.allChildren(
				this._isExpanded ? this._childArray : this._collapsedArray
			))}
				</ol>
			</nav>
		`;
		} else {
			return html`
			<nav aria-label="Breadcrumb" class="childCrumbs">
				<ol>
					${this.applySeparators(this.allChildren( this._childArray ))}
				</ol>
			</nav>
		`;
		}
    }

	/* #endregion */
	/**
	 * Map over the given array to return each child
	 * */
	public allChildren(array) {
		return array
			.map((child) => (
				child
		));
	}

	/**
	 * Add event listener onto the collapsed crumb when the DOM has updated with the correct array
	 * If no collapsed El. there will be no need for an event listener
	 **/
	public firstUpdated(): void {
		if (this.shadowRoot && this.maxCrumbs) {
			this._collapsedSlotEl = this.shadowRoot.querySelector('#collapsedEl');
			if (this._collapsedSlotEl) {
				this._collapsedSlotEl.addEventListener('click', (): void => {
					this.expand = true;
				});
			}
		}
	}

	/**
	 * Create new array if max.crumbs is smaller than array.length
	 * */
	public collapsedBreadcrumbs = (crumbElements) => {
		return [
			...crumbElements.slice(0, this._itemsBeforeCollapse),
			this.newLiEl('...', true),
			...crumbElements.slice(crumbElements.length - this._itemsAfterCollapse, crumbElements.length),
		];
	};

	/**
	 * So we can have custom separators, we have to add new elements in between each element in the given array
	 * To do this we map over each element placing a newEl with the custom separator in between
	 * */
	public applySeparators(crumbElements) {
		return [...crumbElements].map(
			(el, i) => i < crumbElements.length - 1
				? [el, this.newLiEl(`${this.separator}`, null)]
				: [el]).reduce((a, b) => a.concat(b))
	}

	/**
	 * New element generator
	 **/
	private newLiEl(text, collapsedEl) {
		const node = document.createTextNode(text);
		const newEl = document.createElement("li");
		newEl.setAttribute("slot", "crumb");
		newEl.setAttribute("aria-hidden", "true");
		newEl.appendChild(node);
		if(collapsedEl) {
			newEl.setAttribute("id", "collapsedEl");
		}
		return newEl;
	}

}

export default RuiBreadcrumbs;
