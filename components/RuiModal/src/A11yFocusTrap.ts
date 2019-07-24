export default class FocusTrap {

    private _trapStartEl: HTMLElement | null = null;
    private _trapEndEl: HTMLElement | null = null;
    private _lastFocusedEl: HTMLElement | null = null;
    private _trappedEl: HTMLElement | null = null;
    private _initiallyFocusedEl: HTMLElement | null = null;
    private _initialDocumentFocusEl: HTMLElement | null = null;

    public constructor(element: HTMLElement, id: string, inititiallyFocusedEl?: HTMLElement) {
        this._trappedEl = element;

        if (inititiallyFocusedEl) {
            this._initiallyFocusedEl = inititiallyFocusedEl;
        }

        if (this._trappedEl) {
            const parentEl = this._trappedEl.parentNode;

            if (parentEl) {
                const trapStartEl = document.createElement('div');
                this._trapStartEl = parentEl.insertBefore(trapStartEl, element);
                this._trapStartEl.tabIndex = 0;
                this._trapStartEl.id = `${id}-focus-trap-start`;

                const trapEndEl = document.createElement('div');
                this._trapEndEl = parentEl.insertBefore(trapEndEl, element.nextSibling);
                this._trapEndEl.tabIndex = 0;
                this._trapEndEl.id = `${id}-focus-trap-end`;

                this._trappedEl.addEventListener('focus', this._handleTrappedElFocus.bind(this), true)
                this._trapEndEl.addEventListener('focus', this._handleTrapEndFocus.bind(this), true)
                this._trapStartEl.addEventListener('focus', this._handleTrapStartFocus.bind(this), true)
            }
        }
    }

    public focusFirstEl(): void {

        if (document && document.activeElement) {
            this._initialDocumentFocusEl = document.activeElement as HTMLElement;
        }

        if (this._initiallyFocusedEl) {
            this._initiallyFocusedEl.focus();
            this._lastFocusedEl = this._initiallyFocusedEl;
        } else {
            const focusableElements: HTMLElement[] = this.focusableElements;

            if (focusableElements.length > 0) {
                focusableElements[0].focus();
                this._lastFocusedEl = focusableElements[0];
            }
        }
    }

    private _handleTrappedElFocus(event): void {
        this._lastFocusedEl = event.target;
    }

    private _handleTrapStartFocus(): void {
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

    private _handleTrapEndFocus(): void {
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

    public get focusableElements(): HTMLElement[] {
        return this._trappedEl 
            ? this._getFocusableElements(this._trappedEl)
            : [];
    }

    public restoreFocus(): void {
        if (this._initialDocumentFocusEl) {
            this._initialDocumentFocusEl.focus();
        }
    }

    private _getFocusableElements(element: HTMLElement): HTMLElement[] {
		
		let focusableElements: HTMLElement[] = [];

        const TRAP_START_ID = this._trapStartEl ? this._trapStartEl.id : '';
        const TRAP_END_ID = this._trapEndEl ? this._trapEndEl.id : '';

		if (this._isFocusable(element) && element.id !== TRAP_START_ID && element.id !== TRAP_END_ID) {
			focusableElements = [
				...focusableElements,
				element
			]
		}

		const numChildNodes = element.childNodes.length;

		if (element.shadowRoot) {
            // FIXME
            const el = element.shadowRoot as unknown as HTMLElement;
			focusableElements = [
				...focusableElements,
				...this._getFocusableElements(el)
			]
		} else if (numChildNodes > 0) {
			for (let i = 0; i < numChildNodes; i++) {
				const el = element.childNodes[i] as HTMLElement;
				focusableElements = [
					...focusableElements,
					...this._getFocusableElements(el)
				]
			}
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
    
    private _isFocusable(element: HTMLElement): boolean {
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