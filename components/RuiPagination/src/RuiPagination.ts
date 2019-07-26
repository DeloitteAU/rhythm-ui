/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {variables, layout} from './RuiPagination.css'


export class RuiPagination extends LitElement {

	@property({
		type : Number,
		attribute: 'current-page',
	})
	public currentPage = 1;

	@property({
		type : Number,
		attribute: 'pages-shown'
	})
	public pagesToShow = 1;

	@property({
		type : Number,
		attribute: 'num-pages'
	})
	public numberOfPages = 1;

	@property({
		type : String,
	})
	public prevlink = null;

	@property({
		type : String,
	})
	public nextlink = null;

	/**
	 * Object containing a maping between page numbers and 
	 * display text/links
	 * 
	 * {
	 * 	1: {
	 * 		href: '#', // 
	 * 		label: 'First Page' // only include if not page number
	 * 	}
	 * }
	 */
	@property({
		type : Object,
	})
	public items = {};

	private leftEllipsesEl: HTMLElement | null = null;
	private rightEllipsesEl: HTMLElement | null = null;
	private nextSlottedEl: HTMLElement | null = null;
	private prevSlottedEl: HTMLElement | null = null;

	/**
	 * Here we duplicate the provided ellipses slotted content and also
	 * display it in the ellipses-dupe slot
	 * 
	 * Web components do not provide a first class way to render the same provided slot
	 * content in two places, so we copy the slotted content and change the slot value to 
	 * get around this for the ellipses
	 */
	public connectedCallback(): void {
		super.connectedCallback();
		this.leftEllipsesEl = this.querySelector('[slot=ellipses]');
		if (this.leftEllipsesEl) {
			// clone node returns node so we cast to HTMLElement
			this.rightEllipsesEl = this.leftEllipsesEl.cloneNode(true) as HTMLElement;
			this.rightEllipsesEl.slot = 'ellipses-dupe';
			this.appendChild(this.rightEllipsesEl);
		}

		const nextSlottedEl = this.querySelector('[slot=next]') as HTMLElement;
		if (nextSlottedEl) {
			this.nextSlottedEl = nextSlottedEl
		}

		const prevSlottedEl = this.querySelector('[slot=prev]') as HTMLElement;
		if (prevSlottedEl) {
			this.prevSlottedEl = prevSlottedEl
		}
	}	
	

	/**
	*
	* The styles for button
	* @remarks
	* If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
	*/
	public static get styles(): CSSResultArray {
		return [variables, layout];
	}

	// public onnextclick() {}

	// public onprevclick() {}

	// public onitemclick(pageNumber: number) {}


	private _generateNextClickEvent(): CustomEvent {
		return new CustomEvent('rui-pagination-next-click', {
			bubbles: true
		});
	}

	private _generatePrevClickEvent(): CustomEvent {
		return new CustomEvent('rui-pagination-prev-click', {
			bubbles: true
		})
	}

	private _generateItemClickEvent(pageNumber: number): CustomEvent {
		return new CustomEvent('rui-pagination-item-click', {
			bubbles: true,
			detail: {
				pageNumber,
			}
		});
	}
	

	private _calculatePageStartEnd(): number[] {
		let pageStart = 1;
		let pageEnd = this.numberOfPages;

		// if the number of pages to show is greater or equal to the number of pages
		// then we should just display every page as a pagination item
		if (this.pagesToShow >= this.numberOfPages) {
			return [pageStart, pageEnd];
		}

		// the number of items that should show to the left of the current page
		const leftShown = Math.floor(this.pagesToShow / 2);
		
		// the render logic is slightly different when we are in the 
		// part of the app where ellipses are not shown
		const leftSideThreshold = leftShown + 2;
		
		if (this.currentPage <= leftSideThreshold) {
			// the number of pagination items that should show is 
			// defined by pages to show + 4 where 
			// the 4 comes from the start and end item which are always present,
			// and the two ellipses slots which may or may not be actual ellipses
			// e.g | 1 | ... | pages-to-show items | ... | n |
			const MAX_ITEMS = Math.min(this.pagesToShow + 4, this.numberOfPages);
			pageEnd = this.currentPage + (MAX_ITEMS - 2 - this.currentPage);
		} else {
			const rightShown = this.pagesToShow - leftShown - 1;
			const rightSideThreshold = this.numberOfPages - rightShown - 1;

			let rightTruncate = 0;
			if (this.currentPage >= rightSideThreshold) {
				rightTruncate = rightShown - (this.numberOfPages - this.currentPage) + 2
			}
			
			pageStart = Math.max(this.currentPage - leftShown - rightTruncate, 1);
			pageEnd =  Math.min(this.currentPage + rightShown, this.numberOfPages);
		}

		// if page start is at 3, then to the left will be 1 and ... 
		// rather than spend a space on ..., may as well render the 2 instead
		// | 1 | ... | 3 |  => | 1 | 2 | 3 |
		if (pageStart === 3) {
			pageStart = 2;
		}

		// same principal as above but | n - 2 | ... | n |  => | n - 2 | n - 1 | n |
		if (pageEnd === this.numberOfPages - 2) {
			pageEnd = this.numberOfPages - 1;
		}

		return [
			pageStart,
			pageEnd
		];
	}
	/* #endregion */

	/* #region Methods */

	public attributeChangedCallback(name, oldVal, newVal): void {
		switch(name) {
			case 'current-page':
				this.currentPage = newVal;
				this.requestUpdate('currentPage', oldVal);
				break;
			case 'pages-shown':
				this.pagesToShow = newVal;
				this.requestUpdate('pagesToShow', oldVal);
				break;
			case 'num-pages':
				this.numberOfPages = newVal;
				this.requestUpdate('numberOfPages', oldVal);
				break;
		}

		super.attributeChangedCallback(name, oldVal, newVal);
	  }

	private _renderPaginationItem(pageNumber, currentPage): TemplateResult {
		const isCurrentPage = currentPage === pageNumber;

		const itemConfig = this.items[pageNumber] || {};
		console.log(itemConfig);
		const label = itemConfig.label || pageNumber;
		const href = itemConfig.href || false;

		let tag = html``;
		if (isCurrentPage) {
			tag = html`
				<a class="pagination-link${isCurrentPage ? ' pagination-link--current' : ''}" aria-label="Goto page ${pageNumber}">${label}</a>
			`
		} else if (href) {
			tag = html`
				<a class="pagination-link${isCurrentPage ? ' pagination-link--current' : ''}" href="${href}" aria-label="Goto page ${pageNumber}">${label}</a>
			`
		} else {
			const evt = this._generateItemClickEvent(pageNumber);
			const onClick = ():void => { this.dispatchEvent(evt); }
			tag =  html`
					<a class="pagination-link${isCurrentPage ? ' pagination-link--current' : ''}" @click=${onClick} aria-label="Goto page ${pageNumber}">${label}</a>
			`
		}

		return html`
			<li class="pagination-item${isCurrentPage ? ' pagination-item--current' : ''}">
				${tag}
			</li>
		`
		
	}

	private _renderEllipsesItem(side: string): TemplateResult {
		return html`
			<li class="pagination-item">
				<div class="ellipses">
					<slot name=${(side === 'left') ? 'ellipses' : 'ellipses-dupe'}></slot>
				</div>
			</li>`;
	}

	private _renderPaginationItems(): TemplateResult[] {
		if (this.numberOfPages === 1) {
			return [this._renderPaginationItem(1,1)];
		}

		const [pageStart, pageEnd] = this._calculatePageStartEnd();

		let renderLeftEllipses = false;
		let renderRightEllipses = false;

		if (pageStart > 3) { renderLeftEllipses = true; }
		if ((this.numberOfPages - pageEnd) > 2) { renderRightEllipses = true; }

		const paginationItems = [
			this._renderPaginationItem(1, this.currentPage)
		]

		if (renderLeftEllipses) { paginationItems.push(this._renderEllipsesItem('left')); }

		for (let i = pageStart; i < pageEnd + 1; i++) {
			if (i !== 1 && i !== this.numberOfPages) {
				paginationItems.push(this._renderPaginationItem(i, this.currentPage));
			}
		}

		if (renderRightEllipses) { paginationItems.push(this._renderEllipsesItem('right')) }

		paginationItems.push(this._renderPaginationItem(this.numberOfPages, this.currentPage))

		return paginationItems;
	}

	private _renderPrev(): TemplateResult {
		let tag: TemplateResult = html``;
		const isDisabled = (this.currentPage <= 1);
		const ariaLabel = "Goto previous page";

		let classes = 'pagination-link pagination-link--previous';
		if (isDisabled) { classes += ' disabled'}


		const prevEl = this.prevSlottedEl
			? html`<slot name="prev-content"></slot>`
			: html`<span class="arrow arrow-left"></span>`;

		if (isDisabled) {
			tag = html`<span class=${classes}>${prevEl}</span>`;
		} else if (this.prevlink) {
			const href = isDisabled ? false : this.prevlink;
			tag = html`
				<a class=${classes} aria-label=${ariaLabel} ?href=${href}>
					${prevEl}
				</a>`
		} else {
			const evt = this._generatePrevClickEvent();
			const onClick = ():void => { this.dispatchEvent(evt); }
			tag = html`
				<a class=${classes} aria-label=${ariaLabel} @click=${onClick}>
					${prevEl}
				</a>`
		}

		let liClasses = 'pagination-item';
		if (isDisabled) { liClasses += ' disabled'}
		
		return html`
			<li class=${liClasses}>
				${tag}
			</li>
		`;
	}

	private _renderNext(): TemplateResult {
		let tag: TemplateResult = html``;

		const isDisabled = (this.currentPage >= this.numberOfPages);
		const ariaLabel = "Goto next page";

		let classes = 'pagination-link pagination-link--next';
		if (isDisabled) { classes += ' disabled'}

		const nextEl = this.nextSlottedEl
			? html`<slot name="next-content"></slot>`
			: html`<span class="arrow arrow-right"></span>`;

		if (isDisabled) {
			tag = html`<span class=${classes}>${nextEl}</span>`;
		} else if (this.nextlink) {
			const href = isDisabled ? false : this.nextlink;
			tag = html`
				<a class=${classes} aria-label=${ariaLabel} ?href=${href}>
					${nextEl}
				</a>`
		} else {
			const evt = this._generateNextClickEvent();
			const onClick = ():void => { this.dispatchEvent(evt); }
			tag = html`
				<a class=${classes} aria-label=${ariaLabel} @click=${onClick}>
					${nextEl}
				</a>`
		}

		let liClasses = 'pagination-item';
		if (isDisabled) { liClasses += ' disabled'}
		
		return html`
			<li class=${liClasses}>
				${tag}
			</li>
		`;
	}

	/**
	* Render method
		* @slot This is a slot test
	*/
	public render(): TemplateResult {
		return html`
			<ul role="navigation" class="pagination">
				${this._renderPrev()}
				${this._renderPaginationItems()}
				${this._renderNext()}
			</ul>			
		`;
	}

	/* #endregion */
}

export default RuiPagination;
