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
	private _customCrumbs: Element[] = [];
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
		this._customCrumbs = [...this.querySelectorAll('[slot=crumb]')];
		if (this._customCrumbs.length > 0) {
			this._customCrumbs.forEach((crumbEl, i):void => {
				if (i === this._customCrumbs.length - 1) {
					if (!crumbEl.hasAttribute('aria-current')) {
						crumbEl.setAttribute('aria-current','page');
					}
				} 
				crumbEl.slot = `crumb-${i + 1}`
			})
		}
	
		if ((this.crumbs && this.crumbs.length > 2) || this._customCrumbs.length > 2) {
			this._seperatorEl = this.querySelector('[slot=seperator]');
			if (this._seperatorEl) {
				const length = this.crumbs ? this.crumbs.length : this._customCrumbs.length
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

	private _generateTruncatedSelectEvent(crumbIndex: number): CustomEvent {
		return new CustomEvent('rui-breadcrumbs-truncated-select', {
			bubbles: true,
			detail: {
				crumbIndex,
			}
		});
	}

	private _renderSeperator(index: number): TemplateResult {
		let seperatorEl = (index === 0) ? html`` : html`<span aria-hidden="true" class="seperator"></span>`;
			
		if (index > 0 && this._seperatorEl) {
			const seperatorSlotName = index === 1 ? 'seperator' : `seperator-dupe-${index - 1}`
			seperatorEl = html`<slot name=${seperatorSlotName}></slot>`;
		}

		return seperatorEl;
	}

	private _renderCrumb(index: number, isActiveCrumb: boolean): TemplateResult {
		let crumbEl = html``;
		if (this.crumbs && this.crumbs.length > 0) {
			const crumb = this.crumbs[index]
			if (isActiveCrumb) {
				crumbEl = html`<a aria-current="page">${crumb.title}</a>`;
			} else if (crumb.url) {
				crumbEl = html`<a href=${crumb.url}>${crumb.title}</a>`;
			} else {
				const evt = this._generateItemClickEvent(index);
				const onClick = ():void => { this.dispatchEvent(evt); }
				crumbEl = html`<a @click=${onClick}>${crumb.title}</a>`;
			}
		} else {
			crumbEl = html`<slot name=${`crumb-${index + 1}`}></slot>`
		}

		return crumbEl;
	}

	

	private _renderBreadCrumbs(): TemplateResult[] {
		
		const crumbEls: TemplateResult[] = [];
		const standardCrumbs = !!this.crumbs && this.crumbs.length > 0;

		const numCrumbs = (this.crumbs && this.crumbs.length > 0) ? this.crumbs.length : this._customCrumbs.length;

		let loopCount = numCrumbs;
		let truncate = false;

		if (this.maxCrumbs && (numCrumbs > this.maxCrumbs)) {
			loopCount = this.maxCrumbs - 1;
			truncate = true;
		}

		for(let i = 0; i < loopCount; i++) {
			const isActiveCrumb = i === (numCrumbs - 1)
			
			const seperatorEl = this._renderSeperator(i);
			const crumbEl = this._renderCrumb(i, isActiveCrumb)

			let listElClasses = 'breadcrumb__item';
			if (isActiveCrumb) {
				listElClasses += ' current'
			}

			const listEl = html`<li class=${listElClasses}>${seperatorEl}${crumbEl}</li>`
			crumbEls.push(listEl);
		}

		if (truncate) {
			let pageTitles: string[] = [];
			if (standardCrumbs) {
				pageTitles = this.crumbs ? this.crumbs.slice(loopCount, -1).map(crumb => crumb.title  || '') : []
			} else {
				pageTitles = this._customCrumbs.slice(loopCount, -1).map(crumb => crumb.textContent || '')
			}

			const truncatedCrumbSelect = this._renderTruncatedCrumbSelect(loopCount, pageTitles);
			let seperatorEl = this._renderSeperator(loopCount + 1);
			
			let listEl = html`<li class="breadcrumb__item">${seperatorEl}${truncatedCrumbSelect}</li>`;
			crumbEls.push(listEl);

			// if we truncated then we also have to render the final active crumb
			seperatorEl = this._renderSeperator(numCrumbs - 1);
			const crumbEl = this._renderCrumb(numCrumbs - 1, true)
			listEl = html`<li class="breadcrumb__item current">${seperatorEl}${crumbEl}</li>`;
			crumbEls.push(listEl);
		}
  
		return crumbEls;
	}

	private handleChange(e) {
		const indexSelected = e.target.value;
		const evt = this._generateTruncatedSelectEvent(indexSelected);
		this.dispatchEvent(evt);

		if (this.crumbs && this.crumbs.length > 0) {
			const crumb = this.crumbs[indexSelected];

			if (crumb.url) {
				window.location.href = crumb.url;
			}
		} else {
			const crumb = this._customCrumbs[indexSelected] as HTMLElement;
			if (crumb.hasAttribute('href')) {
				window.location.href = crumb.getAttribute('href') || '#';
			}
		}
	}

	public _renderTruncatedCrumbSelect(startIndex: number, pageTitles: string[]): TemplateResult {
		return html`
			<select class="selector" @change=${this.handleChange}>
				<option value="" disabled selected>...</option>
				${pageTitles.map((title, i) => html`<option value=${startIndex + i}>${title}</option>`)}
			</select>
		`;
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
