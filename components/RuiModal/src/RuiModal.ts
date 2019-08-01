/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {FocusTrap} from '@rhythm-ui/a11y-utils';
import {variables, layout} from './RuiModal.css'


export class RuiModal extends LitElement {

	// a reference to the focuse trap we create when the modal is open
	private _focusTrap?: FocusTrap;

	// a reference to the content slot el, we only initialise the modal when the main content is ready
	private _slotEl: HTMLSlotElement | null = null;

	// the container for the modal, shows dropshadow, contains focus trap etc
	private _modalContainerEl: HTMLElement | null = null;
	
	// reference to user provided cancel element (if provided)
	private _cancelEl: HTMLElement | null = null;

	// reference to user provided confirm element (if provided)
	private _confirmEl: HTMLElement | null = null;
	
	// whether or not the user has provided custom actions
	private _hasActions: boolean = false;

	// whether or not the user has provided a heading element
	private _hasHeading: boolean = false;


	/**
	 * An inverted boolean property, used to indicate whether or
	 * not clicking outside the modal should close it
	 */
	@property({
		type : Boolean,
		attribute: 'no-click-outside-close',
		converter: (value): boolean => value === undefined,
	})
	public clickOutsideClose: boolean = true;

	/**
	 * An inverted boolean property, used to indicate whether or
	 * not pressing esc should close the modal
	 */
	@property({
		type : Boolean,
		attribute: 'no-esc-btn-close',
		converter: (value): boolean => value === undefined,
	})
	public escBtnClose: boolean = true;


	/**
	 * Handles modal open/close state, engages and releases
	 * the focus trap on open/close 
	 */
	private _open: boolean = false;
	@property({
		type : Boolean,
		reflect: true, 
		converter: (value): boolean => value !== undefined,
	})
	public get open(): boolean {
		return this._open;
	}
	public set open(isOpen: boolean) {
		const usedToBeOpen = this.open;
		this._open = isOpen;
		this.requestUpdate('open', usedToBeOpen);
		if (isOpen && !usedToBeOpen) {
			this._engageFocusTrap();
		} else if (!isOpen && usedToBeOpen) {
			this._releaseFocusTrap();
		}
	}

	/**
	 * Get references to any user provided optional elements so
	 * we can know whether or not to render them in future
	 */
	public connectedCallback() {
		super.connectedCallback();

		const confirmEl = this.querySelector('[slot="confirm"]') as HTMLElement
		if (confirmEl) {
			this._confirmEl = confirmEl;
			
			if (!this._confirmEl.onclick) {
				this._confirmEl.onclick = this._onConfirm;
			}
			
		}

		const cancelEl = this.querySelector('[slot="cancel"]') as HTMLElement
		if (cancelEl) {
			this._cancelEl = cancelEl;

			if (!this._cancelEl.onclick) {
				this._cancelEl.onclick = this._onCancel;
			}
		}

		const headingEl = this.querySelector('[slot="heading"]') as HTMLElement
		if (headingEl) {
			this._hasHeading = true;
		}

		if (this._confirmEl || this._cancelEl) {
			this._hasActions = true;
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

	/* #endregion */

	/**
	 * We can only initialise the modal once the main content is ready, in 
	 * this case it refers to the modal-detail slot
	 */
	public firstUpdated(): void {
		if (this.shadowRoot) {
			this._slotEl = this.shadowRoot.querySelector('#modal-content');
			
			if (this._slotEl) {
			  this._slotEl.addEventListener('slotchange', (): void => {
				this._initialiseModal();
			   });
			}
		  }
		
	}

	/**
	 * Handles esc to close behaviour
	 */
	private _handleKeyPress = (e): void => {
		if (e.keyCode === 27 || e.key === "Escape") {
			this.open = false;
			this.dispatchEvent(this._generateCancelEvent())
		}
	}

	/**
	 * Event generated when modal is closed for any reason other than confirm click
	 */
	private _generateCancelEvent(): CustomEvent {
		return new CustomEvent('rui-modal-cancel', {
			bubbles: true
		});
	}

	/**
	 * Event generated when modal confirm element is clicked
	 */
	private _generateConfirmEvent(): CustomEvent {
		return new CustomEvent('rui-modal-confirm', {
			bubbles: true
		});
	}

	/* #region Methods */


	/**
	 * Initialises a focus trap around the modal and adds click
	 * and escape handlers (if needed)
	 */
	private _initialiseModal = (): void => {
		if (this.shadowRoot) {
			const modalEl = this.shadowRoot.querySelector('#modal') as HTMLElement;
			
			if (modalEl) {
				this._focusTrap = new FocusTrap(modalEl, 'rui-modal');

				if (this.open) {
					this._focusTrap.trap();
				}
			}
			
			const modalContainer = this.shadowRoot.querySelector('#modal-container') as HTMLElement;
			if (modalContainer) {
				this._modalContainerEl = modalContainer;

				this._modalContainerEl.addEventListener('click', (e): void => {
					if (e.target === this._modalContainerEl) {
						if (this.clickOutsideClose) {
							this.open = false;
							this.dispatchEvent(this._generateCancelEvent())
						}				
					}
				})
			}

			if (this.escBtnClose) {
				document.addEventListener('keydown', this._handleKeyPress);
			}
			
		}
	}

	/**
	 * Block scrolling on the backdrop and set the focus trap to trap
	 */
	private _engageFocusTrap = (): void => {
		document.body.style.overflow = 'hidden';
		if (this._focusTrap) {
			this._focusTrap.trap();
		}
	}

	/**
	 * Allow scrolling on the backdrop and unset the focus trap
	 */
	private _releaseFocusTrap = (): void => {
		document.body.style.overflow = '';
		if (this._focusTrap) {
			this._focusTrap.free();
		}
	}

	/**
	 * If user cancels out of modal, modal should close and cancel event 
	 * generated
	 */
	private _onCancel = () => {
		this.open = false;
		this.dispatchEvent(this._generateCancelEvent());
	}

	/**
	 * If user confirms modal, modal should close and confirm event 
	 * generated
	 */
	private _onConfirm = () => {
		this.open = false;
		this.dispatchEvent(this._generateConfirmEvent());
	}

	/**
	 * Clean up focusTrap instance
	 */
	public disconnectedCallback() {
		super.disconnectedCallback();

		if (this._focusTrap) {
			this._focusTrap.destroy();
		}
	}

	private _renderActions = () => {
		if (this._hasActions) {
			return html`
				<div class="modal__actions">
					<slot name="cancel"></slot>
					<slot name="confirm"></slot>
				</div>
			`;
		}

		return html`<button aria-label="Close" class="close-btn" @click=${this._onCancel}></button>`
	}

	private _renderHeading = () => {
		if (this._hasHeading) {
			return html`
				<div class="modal__heading">
					<slot name="heading"></slot>
				</div>
			`
		}
	}

	private _renderModalBody = () => {
		return html`
			${this._renderHeading()}
			<div class="modal__detail">
				<slot id="modal-content" name="detail"></slot>
			</div>
			${this._renderActions()}
		`
	}

	

	/**
	 * Render method
	 * @slot This is a slot test
	 */
	public render(): TemplateResult {
		return html`
			<div id="modal-container" tabindex="-1" class="${this.open ? 'modal-container open': 'modal-container'}">
				<div role="dialog" id="modal" aria-modal="true" class="${this.open ? 'modal open': 'modal'}">
					${this._renderModalBody()}
				</div>
			</div>
		`;
	}

	/* #endregion */
}

export default RuiModal;
