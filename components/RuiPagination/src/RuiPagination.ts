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

	/**
	*
	* The styles for button
	* @remarks
	* If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
	*/
	public static get styles(): CSSResultArray {
		return [variables, layout];
	}


	private calculatePageStartEnd(): number[] {
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

		if (pageStart === 3) {
			pageStart = 2;
		}

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
		return html`
			<li class="pagination-item${isCurrentPage ? ' pagination-item--current' : ''}">
				<a href="#">${pageNumber}${isCurrentPage ? ' (Current)' : ''}</a>
			</li>
		`
	}

	private _renderEllipsesItem(): TemplateResult {
		return html`<div class="ellipses">...</div>`;
	}

	private _renderPaginationItems(): TemplateResult[] {
		if (this.numberOfPages === 1) {
			return [this._renderPaginationItem(1,1)];
		}

		const [pageStart, pageEnd] = this.calculatePageStartEnd();
	
		let renderLeftEllipses = false;
		let renderRightEllipses = false;

		if (pageStart > 3) { renderLeftEllipses = true; }
		if ((this.numberOfPages - pageEnd) > 2) { renderRightEllipses = true; }

		const paginationItems = [
			this._renderPaginationItem(1, this.currentPage)
		]

		if (renderLeftEllipses) { paginationItems.push(this._renderEllipsesItem()); }

		for (let i = pageStart; i < pageEnd + 1; i++) {
			if (i !== 1 && i !== this.numberOfPages) {
				paginationItems.push(this._renderPaginationItem(i, this.currentPage));
			}
		}

		if (renderRightEllipses) { paginationItems.push(this._renderEllipsesItem()) }

		paginationItems.push(this._renderPaginationItem(this.numberOfPages, this.currentPage))

		return paginationItems;
	}

	/**
	* Render method
		* @slot This is a slot test
	*/
	public render(): TemplateResult {
		return html`
			<ul role="navigation">
				${this._renderPaginationItems()}
			</ul>			
		`;
	}

	/* #endregion */
}

export default RuiPagination;
