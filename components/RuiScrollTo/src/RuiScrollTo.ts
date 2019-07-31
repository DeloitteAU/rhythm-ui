/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {variables, layout} from './RuiScrollTo.css'


/**
 * RuiScrollTo Provides functionality to add scroll-to behaviour
 * to a given trigger element on click
 */
export class RuiScrollTo extends LitElement {

	private _scrollTriggerEl: HTMLElement | null = null;

	@property({type : String})
	public to?;

	@property({
		type: String,
		attribute: 'scroll-container'
	})
	public scrollContainer?;

	@property({type : Number})
	public offset = 0;

	@property({
		type : Boolean,
		attribute: 'no-smooth-scroll'
	})
	public noSmoothScroll?;


	public connectedCallback() {
		super.connectedCallback();

		const scrollTriggerEl = this.querySelector('[slot=scroll-trigger]') as HTMLElement;
		if (scrollTriggerEl) {
			this._scrollTriggerEl = scrollTriggerEl;
			this._scrollTriggerEl.onclick = this._scrollHandler
		}
	}


	private _scrollHandler = (): void => {
		if (
			!this._scrollTriggerEl ||
			!window ||
			!window.scrollTo
		) { return; }

		let yCoordinate = 0;
		let scrollContainer = window;

		if (this.to) {
			const targetEl = document.querySelector(this.to);
			if (!targetEl) { return; }
			
			yCoordinate = targetEl.getBoundingClientRect().top + window.pageYOffset;
		}

		if (this.scrollContainer) {
			
			const customScrollContainer = document.querySelector(this.scrollContainer);
			if (!customScrollContainer) { return; }
			scrollContainer = customScrollContainer;
			const scrollContainerYCoordinate = customScrollContainer.getBoundingClientRect().top + window.pageYOffset;
			
			 window.scrollTo({
			 	top: scrollContainerYCoordinate,
			 	behavior: this.noSmoothScroll ? 'auto' : 'smooth'
			 });
		}

		scrollContainer.scrollTo({
			top: yCoordinate + this.offset,
			behavior: this.noSmoothScroll ? 'auto' : 'smooth'
		});


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

	/* #endregion */

	/* #region Methods */

	public render(): TemplateResult {
		return html`
			<slot name="scroll-trigger"></slot>
		`;
	}

	/* #endregion */
}

export default RuiScrollTo;
