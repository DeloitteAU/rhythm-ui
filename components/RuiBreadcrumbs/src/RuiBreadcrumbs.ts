/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {variables, layout} from './RuiBreadcrumbs.css'


interface ICrumbConfig {
	title: string,
	url: string
}

export class RuiBreadcrumbs extends LitElement {
	/**
	 * Private properties to set number of crumbs before and after collapse element
	 * */
	private _seperatorEl: HTMLSlotElement | null = null;
	private _customCrumbLength: number = 0;
	private _isExpanded: boolean = false;
	private _tooltipEl: HTMLElement | null = null;

	public set expand(val) {
		const oldVal = this._isExpanded;
		this._isExpanded = val;
		this.requestUpdate('expand', oldVal);
	}
	public get expand():boolean { return this._isExpanded; }

	/**
	 * The array of breadcrumbs
	 */
	@property({type : Array})
	public crumbs?: ICrumbConfig[] = [];

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
	
	public connectedCallback(): void {
		super.connectedCallback();
		const customCrumbs = this.querySelectorAll('[slot=crumb]');
		this._customCrumbLength = customCrumbs.length;
		if (this._customCrumbLength > 0) {
			customCrumbs.forEach((crumbEl, i):void => {
				if (i === customCrumbs.length - 1) {
					if (!crumbEl.hasAttribute('aria-current')) {
						crumbEl.setAttribute('aria-current','page');
					}
				} 
				crumbEl.slot = `crumb-${i + 1}`
			})
		}
	
		if ((this.crumbs && this.crumbs.length > 2) || this._customCrumbLength > 2) {
			this._seperatorEl = this.querySelector('[slot=seperator]');
			if (this._seperatorEl) {
				const length = this.crumbs ? this.crumbs.length : this._customCrumbLength
				const numSeperators = length - 1;
				for (let i = 1; i < numSeperators; i++) {
					const el = this._seperatorEl.cloneNode(true) as HTMLElement;
					el.slot = `seperator-dupe-${i}`;
					this.appendChild(el);
				}
			}
		}
	}

    /* #endregion */

	/* #region Methods */

	private _generateItemClickEvent(crumbIndex: number): CustomEvent {
		return new CustomEvent('rui-breadcrumbs-item-click', {
			bubbles: true,
			detail: {
				crumbIndex,
			}
		});
	}
	

	private _renderBreadCrumbs(): TemplateResult[] {
		
		const crumbEls: TemplateResult[] = [];

		const numCrumbs = (this.crumbs && this.crumbs.length > 0) ? this.crumbs.length : this._customCrumbLength;

		for(let i = 0; i < numCrumbs; i++) {
			const isActiveCrumb = i === (numCrumbs - 1)
			
			let crumbEl = html``;
			let seperatorEl = i === 0 ? html`` : html`<span aria-hidden="true" class="seperator">/</span>`;
			
			if (i > 0 && this._seperatorEl) {
				const seperatorSlotName = i === 1 ? 'seperator' : `seperator-dupe-${i - 1}`
				seperatorEl = html`<slot name=${seperatorSlotName}></slot>`;
			}

			if (this.crumbs && this.crumbs.length > 0) {
				const crumb = this.crumbs[i]
				if (isActiveCrumb) {
					crumbEl = html`<a aria-current="page">${crumb.title}</a>`;
				} else if (crumb.url) {
					crumbEl = html`<a href=${crumb.url}>${crumb.title}</a>`;
				} else {
					const evt = this._generateItemClickEvent(i);
					const onClick = ():void => { this.dispatchEvent(evt); }
					crumbEl = html`<a @click=${onClick}>${crumb.title}</a>`;
				}
			} else {
				crumbEl = html`<slot name=${`crumb-${i + 1}`}></slot>`
			}

			let listElClasses = 'breadcrumb__item';
			if (isActiveCrumb) {
				listElClasses += ' current'
			}
			const listEl = html`<li class=${listElClasses}>${seperatorEl}${crumbEl}</li>`
			crumbEls.push(listEl);
		}
 
		return crumbEls;
	}

    public render(): TemplateResult {
		return html`
			<nav aria-label="Breadcrumb" class="breadcrumbs">
				<ul>
					${this._renderBreadCrumbs()}
				</ul>
			</nav>`
    }

}

export default RuiBreadcrumbs;
