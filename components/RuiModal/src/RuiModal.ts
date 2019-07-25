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

	private _focusTrap?: FocusTrap;
	private _slotEl: HTMLSlotElement | null = null;
	private _modalEl: HTMLElement | null = null;
	private _modalContainerEl: HTMLElement | null = null;
	private _open: boolean = false;

	@property({
		type : Boolean,
		attribute: 'no-click-outside-close',
		converter: (value): boolean => value === undefined,
	})
	public clickOutsideClose: boolean = true;

	@property({
		type : Boolean,
		attribute: 'no-esc-btn-close',
		converter: (value): boolean => value === undefined,
	})
	public escBtnClose: boolean = true;


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
			this._handleModalOpen();
		} else if (!isOpen && usedToBeOpen) {
			this._handleModalClose();
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

	private _handleKeyPress = (e): void => {
		if (e.keyCode === 27 || e.key === "Escape") {
			this.open = false;
		}
	}

	/* #region Methods */

	private _initialiseModal = (): void => {
		if (this.shadowRoot) {
			const modalEl = this.shadowRoot.querySelector('#modal') as HTMLElement;
			
			if (modalEl) {
				this._modalEl = modalEl;
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
						}				
					}
				})
			}


			if (this.escBtnClose) {
				document.addEventListener('keydown', this._handleKeyPress);
			}
			
		}
	}

	private _handleModalOpen = (): void => {
		document.body.style.overflow = 'hidden';
		if (this._focusTrap) {
			this._focusTrap.trap();
		}
	}

	private _handleModalClose = (): void => {
		document.body.style.overflow = '';
		if (this._focusTrap) {
			this._focusTrap.free();
		}
	}

	public disconnectedCallback() {
		super.disconnectedCallback();

		if (this._focusTrap) {
			this._focusTrap.destroy();
		}
	}

	/**
	 * Render method
	 * @slot This is a slot test
	 */
	public render(): TemplateResult {
		return html`
			<div id="modal-container" tabindex="-1" class="${this.open ? 'modal-container open': 'modal-container'}">
				<div role="dialog" id="modal" aria-modal="true" class="${this.open ? 'modal open': 'modal'}">
					<a href="#">Another</a>
					<slot id="modal-content"></slot>
					<button @click=${():void => {this.open = false; }}>Close modal</button>
				</div>
			</div>
		`;
	}

	/* #endregion */
}

export default RuiModal;
