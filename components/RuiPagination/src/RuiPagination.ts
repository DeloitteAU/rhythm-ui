/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {variables, layout} from './RuiPagination.css'

export class RuiPagination extends LitElement {
	// reference to the left shown ellipses element
	private leftEllipsesEl: HTMLElement | null = null;

	// reference to the right shown ellipses element
	private rightEllipsesEl: HTMLElement | null = null;

	// reference to the next element
	private nextSlottedEl: HTMLElement | null = null;

	// reference to the prev element
	private prevSlottedEl: HTMLElement | null = null;

	/**
	 * Indicates which page the user is currently on
	 */
	private _currentPage: number = 1;
	@property({
		type : Number,
		attribute: 'current-page',
	})
	public get currentPage(): number {
		return this._currentPage;
	}
	public set currentPage(currentPage: number) {
		const oldVal = this._currentPage;
		this._currentPage = currentPage;
		this.requestUpdate('currentPage', oldVal);
	}

	/**
	 * Indcates how many pages can be shown before truncation logic applies.
	 * If not provided, all pages will be shown
	 */
	private _pagesToShow?: number;
	@property({
		type : Number,
		attribute: 'pages-shown'
	})
	public get pagesToShow(): number | undefined {
		return this._pagesToShow;
	};
	public set pagesToShow(pagesToShow: number | undefined) {
		const oldVal = this._pagesToShow;
		this._pagesToShow = pagesToShow;
		this.requestUpdate('pagesToShow', oldVal);
	}

	/**
	 * Indicates how many pages total are present in cases where the
	 * user doesn't want to use the items attribute
	 */
	private _numberOfPages: number = 1;
	@property({
		type : Number,
		attribute: 'num-pages'
	})
	public get numberOfPages(): number {
		return this._numberOfPages;
	};
	public set numberOfPages(numberOfPages: number) {
		const oldVal = this._numberOfPages;
		this._numberOfPages = numberOfPages;
		this.requestUpdate('numberOfPages', oldVal);
	}

	/**
	 * The href to direct to on previous item click,
	 * if not provided, an event will be dispatched instead
	 */
	private _prevLink?: string;
	@property({
		type : String,
		attribute: 'prev-link'
	})
	public get prevLink(): string | undefined {
		return this._prevLink;
	};
	public set prevLink(prevLink: string | undefined) {
		const oldVal = this._prevLink;
		this._prevLink = prevLink;
		this.requestUpdate('prevLink', oldVal);
	}

	/**
	 * The href to direct to on next item click,
	 * if not provided, an event will be dispatched instead
	 */
	private _nextLink?: string;
	@property({
		type : String,
		attribute: 'next-link'
	})
	public get nextLink(): string | undefined {
		return this._nextLink;
	};
	public set nextLink(nextLink: string | undefined) {
		const oldVal = this._nextLink;
		this._nextLink = nextLink;
		this.requestUpdate('nextLink', oldVal);
	}

	/**
	 * user overrideable function for generating 
	 * href's for each pagination item. 
	 */
	@property()
	public generateHref = (page: number): string | null => {
		return null;
	}

	/**
	 * user overrideable function for generating 
	 * labels for each pagination item. 
	 */
	public generateLabel = (page: number) => {
		return `${page}`;
	}

	/**
	 * user overrideable function for generating 
	 * aria labels for each pagination item. 
	 */
	public generateAriaLabel = (page: number) => {
		return `Goto page ${page}`;
	}


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

		// keep reference to next element if user passed it in
		const nextSlottedEl = this.querySelector('[slot=next-content]') as HTMLElement;
		if (nextSlottedEl) {
			this.nextSlottedEl = nextSlottedEl
		}

		// keep reference to prev element if user passed it in
		const prevSlottedEl = this.querySelector('[slot=prev-content]') as HTMLElement;
		if (prevSlottedEl) {
			this.prevSlottedEl = prevSlottedEl
		}

		// if no pages to show is defined we default to the total number of pages
		if (this.pagesToShow === undefined) {
			this.pagesToShow = this.numberOfPages || 1;
		}
	}


	/**
	 * The styles for button
	 * @remarks
	 * If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
	 */
	public static get styles(): CSSResultArray {
		return [variables, layout];
	}


	/**
	 * Event created when next item is triggered
	 */
	private _generateNextClickEvent(): CustomEvent {
		return new CustomEvent('rui-pagination-next-click', {
			bubbles: true
		});
	}

	/**
	 * Event created when prev item is triggered
	 */
	private _generatePrevClickEvent(): CustomEvent {
		return new CustomEvent('rui-pagination-prev-click', {
			bubbles: true
		})
	}

	/**
	 * Event created when pagination item is triggered
	 */
	private _generateItemClickEvent(pageNumber: number): CustomEvent {
		return new CustomEvent('rui-pagination-item-click', {
			bubbles: true,
			detail: {
				pageNumber,
			}
		});
	}

	/**
	 * _calculatePageStartEnd handles the calculation of the page start and
	 * end indexes based on the pages to show constraints.
	 *
	 * Note that because we always show the first and last pagination item,
	 * the pagestart and pageend in this case refer to the items to show
	 * between the ellipses.
	 */
	private _calculatePageStartEnd(): number[] {
		let pageStart = 1;
		let pageEnd = this.numberOfPages;

		// if the number of pages to show is greater or equal to the number of pages
		// then we should just display every page as a pagination item
		if (
			this.pagesToShow === undefined ||
			this.pagesToShow >= this.numberOfPages
		  ) {
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

	/**
	 * Renders a pagination item based on the given pageNumber.
	 * If the page is the current page then it renders the item
	 * as the active item
	 *
	 * @param pageNumber Number of page to render
	 * @param currentPage Currently active page
	 */
	private _renderPaginationItem(pageNumber, currentPage): TemplateResult {
		const isCurrentPage = currentPage === pageNumber;
 
		const label = this.generateLabel(pageNumber);
		const href = this.generateHref(pageNumber);
		const ariaLabel = this.generateAriaLabel(pageNumber);

		let tag = html``;
		if (isCurrentPage) {
			tag = html`
				<a class="pagination-link${isCurrentPage ? ' pagination-link--current' : ''}" aria-label="${ariaLabel}">${label}</a>
			`
		} else if (href) {
			tag = html`
				<a class="pagination-link${isCurrentPage ? ' pagination-link--current' : ''}" href="${href}" aria-label="${ariaLabel}">${label}</a>
			`
		} else {
			const evt = this._generateItemClickEvent(pageNumber);
			const onClick = (e):void => { e.preventDefault(); this.dispatchEvent(evt); }
			tag =  html`
					<a class="pagination-link${isCurrentPage ? ' pagination-link--current' : ''}" href="#" @click=${onClick} aria-label="${ariaLabel}">${label}</a>
			`
		}

		return html`
			<li class="pagination-item${isCurrentPage ? ' pagination-item--current' : ''}">
				${tag}
			</li>
		`
	}

	/**
	 * Renders the ellipses item, will use the given custom ellipses element if present,
	 * otherwise will render default ...
	 *
	 * @param side which side of the pagination the ellipses is appearing on
	 */
	private _renderEllipsesItem(side: string): TemplateResult {

		let el = html``;
		if (this.leftEllipsesEl) {
			el = html`<slot name=${(side === 'left') ? 'ellipses' : 'ellipses-dupe'}></slot>`
		} else {
			el = html`<span>...</span>`
		}

		return html`
			<li aria-hidden="true" class="pagination-item">
				<div class="ellipses">
					${el}
				</div>
			</li>
		`;
	}

	/**
	 * Handles the overall rendering logic of the pagination, 
	 * including rendering of ellipses
	 */
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

	/**
	 * handles rendering of the previous pagination item
	 * using user provided previous content if provided or 
	 * default arrow left
	 */
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
		} else if (this.prevLink) {
			const href = isDisabled ? false : this.prevLink;
			tag = html`
				<a class="${classes}" aria-label="${ariaLabel}" href="${href}">
					${prevEl}
				</a>`
		} else {
			const evt = this._generatePrevClickEvent();
			const onClick = (e):void => { e.preventDefault(); this.dispatchEvent(evt); }
			tag = html`
				<a href="#" class="${classes}" aria-label="${ariaLabel}" @click=${onClick}>
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

	/**
	 * handles rendering of the next pagination item
	 * using user provided next content if provided or 
	 * default arrow right
	 */
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
			tag = html`<span class="${classes}">${nextEl}</span>`;
		} else if (this.nextLink) {
			const href = isDisabled ? false : this.nextLink;
			tag = html`
				<a class="${classes}" aria-label="${ariaLabel}" href="${href}">
					${nextEl}
				</a>`
		} else {
			const evt = this._generateNextClickEvent();
			const onClick = (e):void => { e.preventDefault(); this.dispatchEvent(evt); }
			tag = html`
				<a href="#" class="${classes}" aria-label="${ariaLabel}" @click=${onClick}>
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
	 * Renders the previous, next and pagination items within a
	 * list
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
