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
	 * Queries the window scroll position every 100 ms to see if we have 
	 * reached the scroll position in question, 
	 */
	private _onScrollComplete = (targetYCoord, timeout = 1000) => {
		return new Promise((resolve, reject) => {
			let timeoutCount = 0;
			const interval = setInterval(() => {
				if (window.scrollY > targetYCoord - 1 && window.scrollY < targetYCoord + 1) {
					clearInterval(interval);
					resolve();
				} else if (timeoutCount >= timeout) {
					reject('Timeout exceeded')
				} else {
					timeoutCount += 100;
				}
			}, 100)
		})
	} 


	/**
	 * Handles the scrolling to the target element on click of the given
	 * trigger. Makes use of window.scrollTo method with scrollOptions object
	 * to achieve smooth scroll.  
	 */
	private _scrollHandler = async (): Promise<void> =>  {
	
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
		let scrollContainer: Window | HTMLElement = window;
	
		/**
		 * In cases where we need to scroll two different containers 
		 * we sequence two scrolls one after another, if the user
		 * tries to counteract the scroll - they can break the logic,
		 * so we detect user interference and prevent weird logic occuring
		 */
		let userInterferance = false;

		/**
		 * attempt to find element defined by user given 'to' selector,
		 * if found set the yCoordinate to top of that element
		 */
		if (this.to) {
			const targetEl = document.querySelector(this.to) as HTMLElement;
			if (!targetEl) { return; }

			// if scroll container was provided need to scroll to scroll container first
			if (this.scrollContainer) {
				const customScrollContainer = document.querySelector(this.scrollContainer);
				if (!customScrollContainer) { return; }

				// set scrollcontainer to container el for the final scroll
				scrollContainer = customScrollContainer as HTMLElement;

				const scrollContainerYCoordinate = customScrollContainer.getBoundingClientRect().top + window.pageYOffset;
				
				// scroll window to top of scroll container
				window.scrollTo({
					top: scrollContainerYCoordinate,
					behavior: this.noSmoothScroll ? 'auto' : 'smooth'
				});

				/**
				 * wait for the scroll to be complete before calculating ycoord for
				 * target element scroll, if the wait function times out,
				 * generally it is because the user counteracted the scroll
				 * to make it not reach, in which case we flag that 
				 * we should no longer 
				 */
				try {
					await this._onScrollComplete(scrollContainerYCoordinate);
				} catch (e) {
					userInterferance = true;
				}
				
				// get top of target el from container, taking into account how much the 
				// scroll container has already scrolled
				yCoordinate = targetEl.getBoundingClientRect().top + scrollContainer.scrollTop
			} else {
				// if no scroll container, get top of element and take into account
				// how much window has already been scrolled
				yCoordinate = targetEl.getBoundingClientRect().top + window.pageYOffset;
			}
		}

		/**
		 * finally scroll to the target element, by scrolling window or
		 * scroll container defined before and including user provided offset.
		 * Use smooth scroll unless user has specified no smooth scroll. 
		 */
		if (!userInterferance) {
			scrollContainer.scrollTo({
				top: yCoordinate + this.offset,
				behavior: this.noSmoothScroll ? 'auto' : 'smooth'
			});	
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
