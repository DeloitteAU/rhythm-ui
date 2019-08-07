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
	 * @default
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
	 * Disable smooth scrolling animation
	 */
	@property({
		type : Boolean,
		attribute: 'disable-animation'
	})
	public disableAnimation?;


	/**
	 * Once element is attached to dom, get slotted element from light dom and 
	 * attach onclick listener to our internal scrollhandler
	 */
	public connectedCallback() {
		super.connectedCallback();

		const scrollTriggerEl = this.querySelector('[slot=scroll-trigger]') as HTMLElement;
		if (scrollTriggerEl) {
			this._scrollTriggerEl = scrollTriggerEl;
			this._scrollTriggerEl.onclick = this._handleScrollTrigger
		}
	}

	/**
	 * Check if scroll to should animate
	 */
	private _shouldAnimate() {

		if (typeof this.disableAnimation === 'boolean') {
			return !this.disableAnimation;
		}

		// Check to see if user prefers reduced motion
		if ('matchMedia' in window && window.matchMedia('(prefers-reduced-motion)').matches) {
			return false;
		}

		return true;
	};


	/**
	 * Queries the window scroll position every 100 ms to see if we have 
	 * reached the scroll position in question
	 */
	private _onScrollComplete = (targetYCoord, timeout = 1000): Promise<void> => {
		return new Promise((resolve, reject) => {
			let timeoutCount = 0;
			const interval = setInterval((): void => {
				if ((window.scrollY > targetYCoord - 1 && window.scrollY < targetYCoord + 1) || this._hasScrolledToBottom())  {
					clearInterval(interval);
					resolve();
				} else if (timeoutCount >= timeout) {
					clearInterval(interval);
					reject('Timeout exceeded')
				} else {
					timeoutCount += 100;
				}
			}, 100)
		})
	} 


	/**
	 * Detect if we have scrolled as far down as possible on the window
	 */
	private _hasScrolledToBottom = (): boolean => {
		let scrollY = 0;
		if( typeof( window.pageYOffset ) === 'number' ) {
			scrollY = window.pageYOffset;
		} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
			scrollY = document.body.scrollTop;
		}
		
		const docHeight =  Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.body.clientHeight, document.documentElement.clientHeight
		);

		return docHeight <= (scrollY + window.innerHeight)
	}


	/**
	 * Handles the scrolling to the target element on click of the given
	 * trigger. Makes use of window.scrollTo method with scrollOptions object
	 * to achieve smooth scroll.  
	 */
	private _handleScrollTrigger = async (e): Promise<void> =>  {

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
		let scrollingElement: Window | HTMLElement = window;
	
		/**
		 * In cases where we need to scroll two different containers 
		 * we sequence two scrolls one after another, if the user
		 * tries to counteract the scroll - they can break the logic,
		 * so we detect user interference and prevent weird logic occuring
		 */
		let userInterferance = false;

		// Where we are scrolling to
		let toSelector = this.to;

		// Handle trigger anchor tags, use their href attribute for to instead
		// eg <a slot="trigger" href="#some-id"></a>
		if (this._scrollTriggerEl && this._scrollTriggerEl.tagName === 'A') {

			const anchorTrigger = this._scrollTriggerEl as HTMLAnchorElement;

			if (anchorTrigger.hash) {
				toSelector = anchorTrigger.hash;

				// Disable default event in favour of our scroll
				if (e && e.preventDefault) {
					e.preventDefault();
				}
			}
		}

		/**
		 * attempt to find element defined by user given 'to' selector,
		 * if found set the yCoordinate to top of that element
		 */
		if (toSelector) {
			const targetEl = document.querySelector(toSelector) as HTMLElement;
			if (!targetEl) {
				console.error(`Cannot find element with id "${toSelector}"`);
				return;
			}

			// Attempt to give focus to target element
			targetEl.focus();

			// if scroll container was provided need to scroll to scroll container first
			if (this.scrollContainer) {
				const customScrollContainer = document.querySelector(this.scrollContainer);
				if (!customScrollContainer) { return; }

				// set scrollingElement to container el for the final scroll
				scrollingElement = customScrollContainer as HTMLElement;

				const scrollContainerYCoordinate = customScrollContainer.getBoundingClientRect().top + window.pageYOffset;
				
				// scroll window to top of scroll container
				window.scrollTo({
					top: scrollContainerYCoordinate,
					behavior: this._shouldAnimate() ?  'smooth' : 'auto'
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

				/**
				 * If the user has scrolled as far as they can, but the container 
				 * el is not at the top of the screen, then the top calc below 
				 * will be off by the difference between the window pos and
				 * the scroll container pos
				 */
				let coordCorrection = 0;
				if (this._hasScrolledToBottom()) {
					coordCorrection = window.scrollY - scrollContainerYCoordinate;
				}
				
				// get top of target el from container, taking into account how much the 
				// scroll container has already scrolled
				yCoordinate = targetEl.getBoundingClientRect().top + scrollingElement.scrollTop + coordCorrection;
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
			scrollingElement.scrollTo({
				top: yCoordinate + this.offset,
				behavior: this._shouldAnimate() ?  'smooth' : 'auto'
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
