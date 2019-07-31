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

	// reference to trigger element provided by user
	private _scrollTriggerEl: HTMLElement | null = null;

	/**
	 * A selector for the element that the user wants to scroll to
	 */
	@property({type : String})
	public to?;
	

	/**
	 * A selector for a scrollable container that contains the element 
	 * given by the 'to' attribute. Used when the page contains nested scrollable elements.
	 */
	@property({
		type: String,
		attribute: 'scroll-container'
	})
	public scrollContainer?;

	/**
	 * An optional offset to use when scrolling
	 */
	@property({type : Number})
	public offset = 0;

	/**
	 * By default smooth scrolling is used, but in some cases  users may want to 
	 * 'jump' to the element with no scroll behaviour, they can indicate their 
	 * preference to jump via the no-smooth-scroll attribute
	 */
	@property({
		type : Boolean,
		attribute: 'no-smooth-scroll'
	})
	public noSmoothScroll?;


	/**
	 * Once element is attached to dom, get slotted element from light dom and 
	 * attach onclick listener to our internal scrollhandler
	 */
	public connectedCallback() {
		super.connectedCallback();

		const scrollTriggerEl = this.querySelector('[slot=scroll-trigger]') as HTMLElement;
		if (scrollTriggerEl) {
			this._scrollTriggerEl = scrollTriggerEl;
			this._scrollTriggerEl.onclick = this._scrollHandler
		}
	}


	/**
	 * Handles the scrolling to the target element on click of the given
	 * trigger. Makes use of window.scrollTo method with scrollOptions object
	 * to achieve smooth scroll.  
	 */
	private _scrollHandler = (): void => {
		
		/**
		 * Ensure we have a reference to the scroll trigger
		 * and the required functions are present
		 * 
		 * If polyfill applies correctly this should never 
		 * trigger
		 */
		if (
			!this._scrollTriggerEl ||
			!window ||
			!window.scrollTo ||
			!Element.prototype.scrollTo
		) { return; }

		/**
		 * ycoord of 0 coresponds to top of page, so trigger will
		 * scroll to top by default
		 */
		let yCoordinate = 0;

		/**
		 * the element we are scrolling is the window by default
		 * but if the element is contained in another scrollable element
		 * this will be reassigned to scroll container provided by user
		 */
		let scrollContainer = window;

		/**
		 * attempt to find element defined by user given 'to' selector,
		 * if found set the yCoordinate to top of that element
		 */
		if (this.to) {
			const targetEl = document.querySelector(this.to);
			if (!targetEl) { return; }
			
			yCoordinate = targetEl.getBoundingClientRect().top + window.pageYOffset;
		}

		/**
		 * attempt to find scroll container give by user, if 
		 * found set the scroll container and scroll the window to that container
		 */
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

		/**
		 * Scroll to the element using the provided offset and scroll container/window
		 */
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

	/**
	 * All we do is add logic to the given element, so the scroll to
	 * component doesnt show any UI itself
	 */
	public render(): TemplateResult {
		return html`
			<slot name="scroll-trigger"></slot>
		`;
	}

	/* #endregion */
}

export default RuiScrollTo;
