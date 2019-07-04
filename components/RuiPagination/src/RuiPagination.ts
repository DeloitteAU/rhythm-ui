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
		attribute: 'current-page'
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

	/* #endregion */

	/* #region Methods */

	/**
	* Render method
		* @slot This is a slot test
	*/
	public render(): TemplateResult {
		const leftShown = Math.floor(this.pagesToShow / 2);
		const rightShown = this.pagesToShow - leftShown - 1;
		let pageStart = Math.max(this.currentPage - leftShown, 1);
		let pageEnd =  Math.min(this.currentPage + rightShown, this.numberOfPages);


		const leftTruncate = leftShown - (pageStart - 1);
		if (leftTruncate > 0) {
			pageEnd = Math.min(pageEnd + leftTruncate, this.numberOfPages);
		}

		const rightTruncate = rightShown - (this.numberOfPages - pageEnd);
		if (rightTruncate > 0) {
			pageStart = Math.max(pageStart - rightTruncate, 1);
		}

		if (this.currentPage <= leftShown) {
			pageEnd += 1 + leftShown - this.currentPage
		}

		if (this.currentPage >= this.numberOfPages - rightShown) {
			pageStart -= rightShown - (this.numberOfPages - this.currentPage)
		}

		if (pageStart === 3) {
			pageStart = 2;
		}

		if (pageEnd === this.numberOfPages - 2) {
			pageEnd = this.numberOfPages - 1;
		}

		let renderLeftEllipses = false;
		let renderRightEllipses = false;

		if (pageStart > 3) { renderLeftEllipses = true; }
		if ((this.numberOfPages - pageEnd) > 2) { renderRightEllipses = true; }

		const ellipsesEl = html`<div class="ellipses">...</div>`;

		const renderItems = (startPage, endPage): TemplateResult[] => {
			const items: TemplateResult[] = [];
			for (let i = startPage; i < endPage + 1; i++) {
				if (i !== 1 && i !== this.numberOfPages) {
					items.push(html`
					<li class="pagination-item">
						<a href="#">${i}${(i === this.currentPage) ? ' (Current)' : ''}</a>
					</li>
				`);
				}
			}

			return items;
		}

		if (this.numberOfPages === 1) {
			return html`
				<ul role="navigation">
					<li class="pagination-item"><a href="#">1</a></li>
				</ul>
			`;
		}

		return html`
			<ul role="navigation">
				<li class="pagination-item"><a href="#">1${(this.currentPage === 1) ? ' (Current)' : ''}</a></li>
				${renderLeftEllipses ? ellipsesEl : ''}
				${renderItems(pageStart, pageEnd)}
				${renderRightEllipses ? ellipsesEl : ''}
				<li class="pagination-item"><a href="#">${this.numberOfPages}${(this.currentPage === this.numberOfPages) ? ' (Current)' : ''}</a></li>
			</ul>			
		`;
	}

	/* #endregion */
}

export default RuiPagination;
