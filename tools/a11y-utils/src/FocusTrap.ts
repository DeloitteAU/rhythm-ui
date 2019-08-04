/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

/**
 * FocusTrap handles the logic for restricting focus to within a given element
 * and hiding all elements outside of the trap.
 */
export default class FocusTrap {

    // an element that is created dynamically to indicate the begin of the focus trap
    private _trapStartEl: HTMLElement | null = null;

     // an element that is created dynamically to indicate the end of the focus trap
    private _trapEndEl: HTMLElement | null = null;

    // keeps track of the last focused element in the trap
    private _lastFocusedEl: HTMLElement | null = null;

    // the element that the focus trap surrounds
    private _trappedEl: HTMLElement | null = null;

    // users have option to pass in a different element to focus initially
    // otherwise focus trap will default to first focusable element found in trap
    private _initiallyFocusedEl: HTMLElement | null = null;

    // keeps track of what was focused before the trap was triggered
    private _initialDocumentFocusEl: HTMLElement | null = null;

    // keeps track of the aria-hidden elements while the trap is active
    private _hiddenEls: HTMLElement[] = [];

    // the parent element of the trap
    private _parentEl: HTMLElement | null = null;

    // whether or not the trap is currently active
    private _isActive: boolean = false;

    /**
     * Here we set up the elements required for the focus trap to operate,
     * and save the references to the elements we will need later.
     * 
     * NB that the trap is not actually activated until the this.trap()
     * is called
     * @param element The element to create the trap around
     * @param id A unique id to assist with creating and referencing of the trap
     * @param inititiallyFocusedEl If you have an element you want to focus once the trap
     * activates that is not the first focusable el you can specify it here
     */
    public constructor(element: HTMLElement, id: string, inititiallyFocusedEl?: HTMLElement) {
        this._trappedEl = element;

        if (inititiallyFocusedEl) {
            this._initiallyFocusedEl = inititiallyFocusedEl;
        }

        if (this._trappedEl) {
            const parentEl = this._trappedEl.parentNode;

            if (parentEl) {
                this._parentEl = parentEl as HTMLElement;

                /**
                 * Create invisible divs that indicates the start and end of the focus 
                 * trap, and insert them before and after the trap element. 
                 */
                const trapStartEl = document.createElement('div');
                this._trapStartEl = parentEl.insertBefore(trapStartEl, element);
                this._trapStartEl.tabIndex = 0;
                this._trapStartEl.id = `${id}-focus-trap-start`;

                const trapEndEl = document.createElement('div');
                this._trapEndEl = parentEl.insertBefore(trapEndEl, element.nextSibling);
                this._trapEndEl.tabIndex = 0;
                this._trapEndEl.id = `${id}-focus-trap-end`;
            }
        }
    }

    /**
     * Once the focus trap is no longer needed this can be called to remove
     * the trap start and end divs that we created for the trap
     */
    public destroy = (): void => {
        if (this.isActive) {
            this.free();
        }

        if (this._parentEl) {
            if (this._trapStartEl) {
                this._parentEl.removeChild(this._trapStartEl);
            }

            if (this._trapEndEl) {
                this._parentEl.removeChild(this._trapEndEl);
            }
        }
    }

    /**
     * Used to activate the trap, it add listeners to the necessary elements,
     * hides all other elements of the document and focuses the first element
     */
    public trap = (): void => {
        if (this._trappedEl) {
            this._trappedEl.addEventListener('focus', this._handleTrappedElFocus, true)
        }
        
        if (this._trapEndEl) {
            this._trapEndEl.addEventListener('focus', this._handleTrapEndFocus, true)
        }

        if (this._trapStartEl) {
            this._trapStartEl.addEventListener('focus', this._handleTrapStartFocus, true)
        }

        if (document && document.activeElement) {
            this._initialDocumentFocusEl = document.activeElement as HTMLElement;
        }

        if (this._parentEl) {
            this.hideOthers(this._parentEl);
            this.focusFirstEl();
        }

        this.isActive = true;
    }

    /**
     * Used to deactivate the trap, removes the event listeners, 
     * restores the aria visibility of the other elements on the page
     * and restores focus to the originally focused element
     */
    public free = (): void => {
        if (this._trappedEl) {
            this._trappedEl.removeEventListener('focus', this._handleTrappedElFocus)
        }
        
        if (this._trapEndEl) {
            this._trapEndEl.removeEventListener('focus', this._handleTrappedElFocus)
        }

        if (this._trapStartEl) {
            this._trapStartEl.removeEventListener('focus', this._handleTrapStartFocus)
        }

        this.unhideOthers();
        this.restoreFocus();
        
        this.isActive = false;
    }

    /**
     * Focuses the user given element to focus or finds the first focusable
     * element within the trap and focuses that
     */
    public focusFirstEl = (): void => {
        let targetEl: HTMLElement | null = null;
        if (this._initiallyFocusedEl) {
            targetEl = this._initiallyFocusedEl;
            this._lastFocusedEl = this._initiallyFocusedEl;
        } else {
            const focusableElements: HTMLElement[] = this.focusableElements;
            if (focusableElements.length > 0) {
                targetEl = focusableElements[0];
                this._lastFocusedEl = focusableElements[0];
            }
        }

        setTimeout(() => {
            if (targetEl) {
                targetEl.focus();
            }
        }, 0);
    }

    /**
     * Sets the aria-hidden attribute for all other elements in the body 
     * appart from the given element, all elements that are hidden
     * have references kept to them via the _hiddenEls variable
     */
    public hideOthers = (element: HTMLElement): void => {
        if (document && document.body && document.body.hasChildNodes()) {
            const children = [...document.body.childNodes] as HTMLElement[];
            this._traverseAndHide(children, element)
        }
    }

    /**
     * Removes the aria-hidden attribute from the elements that were previously
     * hidden
     */
    public unhideOthers = (): void => {
        this._hiddenEls.forEach((el): void => {
            el.removeAttribute('aria-hidden');
        })

        this._hiddenEls = [];
    }

    /**
     * A recursive function that traverses the dom adding aria-hidden to all elements 
     * that do not contain the given baseElement
     */
    private _traverseAndHide = (elements: HTMLElement[], baseElement: HTMLElement): void => {
        elements.forEach((el): void => {
            if (el === baseElement) {
                // base case, no need to continue
            } else if (el.contains(baseElement) && el.hasChildNodes()) {
                const children = [...el.childNodes] as HTMLElement[];
                this._traverseAndHide(children, baseElement);
            } else if (
                el instanceof HTMLLinkElement ||
                el instanceof HTMLScriptElement) {
                // do nothing, no need to hide these
            } else {
                // element should be hidden
                if ((el.hasAttribute && !el.hasAttribute('aria-hidden')) || (el.getAttribute && el.getAttribute('aria-hidden') === 'false')) {
                    el.setAttribute('aria-hidden', 'true');
                    this._hiddenEls.push(el);
                }
            }
        })
    }

    /**
     * if focus changes but we are still within  the trap, we just
     * update the last focused element variable for use later
     */
    private _handleTrappedElFocus = (event): void => {
        this._lastFocusedEl = event.target;
    }

    /**
     * If the trap start element that we created is focused,
     * we either have to wrap around to the last focusable element
     * or the first depending on what the last focused element is
     */
    private _handleTrapStartFocus = (): void => {
        const focusableElements: HTMLElement[] = this.focusableElements;

        if (focusableElements && focusableElements.length > 0) {
            let newFocusedEl = focusableElements[0];
            if (this._lastFocusedEl === focusableElements[0]) {
                newFocusedEl = focusableElements[focusableElements.length - 1];
            }

            newFocusedEl.focus();
            this._lastFocusedEl = newFocusedEl
        }
    }

    /**
     * If the trap end element that we created is focused,
     * we either have to wrap around to the last focusable element
     * or the first depending on what the last focused element is
     */
    private _handleTrapEndFocus = (): void => {
        const focusableElements: HTMLElement[] = this.focusableElements;

        if (focusableElements && focusableElements.length > 0) {
            let newFocusedEl = focusableElements[0];
            if (this._lastFocusedEl === focusableElements[0]) {
                newFocusedEl = focusableElements[focusableElements.length - 1];
            }

            newFocusedEl.focus();
            this._lastFocusedEl = newFocusedEl
        }
    }

    /**
     * returns all focusable elements within the focus trap, appart from
     * the trap start and end elements
     */
    public get focusableElements(): HTMLElement[] {
        return this._trappedEl 
            ? this._getFocusableElements(this._trappedEl)
            : [];
    }

    public get isActive(): boolean {
        return this._isActive;
    }

    public set isActive(isActive: boolean) {
        this._isActive = isActive;
    }

    /**
     * Used to restore focuse to the initially focused element in the 
     * document before the trap was activated
     */
    public restoreFocus = (): void => {
        if (this._initialDocumentFocusEl) {
            this._initialDocumentFocusEl.focus();
        }
    }

    /**
     * A recursive function that traverses all elements within the 
     * given element and returns an array of all focusable elements
     */
    private _getFocusableElements = (element: HTMLElement): HTMLElement[] => {
		
		let focusableElements: HTMLElement[] = [];

        const TRAP_START_ID = this._trapStartEl ? this._trapStartEl.id : '';
        const TRAP_END_ID = this._trapEndEl ? this._trapEndEl.id : '';

        // if the current element is focusable and not the trap start or end element then we
        // add it to the focusable elements array
		if (this._isFocusable(element) && element.id !== TRAP_START_ID && element.id !== TRAP_END_ID) {
			focusableElements = [
				...focusableElements,
				element
			]
		}

		const numChildNodes = element.childNodes.length;

        // if the element is a web component with a shadowroot, then need to traverse the shadow root
		if (element.shadowRoot) {
            // FIXME
            const el = element.shadowRoot as unknown as HTMLElement;
			focusableElements = [
				...focusableElements,
				...this._getFocusableElements(el)
            ]
        // if the element has children then need to traverse each child
		} else if (numChildNodes > 0) {
			for (let i = 0; i < numChildNodes; i++) {
				const el = element.childNodes[i] as HTMLElement;
				focusableElements = [
					...focusableElements,
					...this._getFocusableElements(el)
				]
            }
            
        // if the element is a slot, need to traverse each of the assigned nodes
		} else if (element instanceof HTMLSlotElement) {
			const slottedNodes = element.assignedNodes();
			if (slottedNodes.length > 0) {
				for (let i = 0; i < slottedNodes.length; i++) {
					const el = slottedNodes[i] as HTMLElement;
					focusableElements = [
						...focusableElements,
						...this._getFocusableElements(el)
					]
				}
			}
		}

		return focusableElements;
    }
    
    /**
     * Returns whether an element is focusable or not,
     * currently buttons, inputs, selects, textarea elements are all focusable
     * as well as any element with a href attribute or a tabindex other than -1
     */
    private _isFocusable = (element: HTMLElement): boolean => {
		if (element instanceof HTMLButtonElement) { return true; }
		if (element instanceof HTMLInputElement) { return true; }
		if (element instanceof HTMLSelectElement) { return true; }
		if (element instanceof HTMLTextAreaElement) { return true; }

		if (element.hasAttribute) {
			if (element.hasAttribute('href')) { return true; }

			if (element.hasAttribute('tabindex') && element.getAttribute('tabindex') !== '-1') {
				return true;
			}
		}

		return false;
	}
}