/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {variables, layout} from './RuiAccordion.css'

export class RuiAccordion extends LitElement {

	/**
	 * The underlying type of the button.
	 */
	@property({type : String})
	public behaviour?: 'single' | 'multiple'  = 'multiple';

	/**
	 * Internal open state of component
	 */
	private _openAll: boolean = false;
	private _items: any[] = [];
	private _itemsLength?: number;

	private _buttonCollapse?: HTMLElement;
	private _buttonExpand?: HTMLElement;

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

	/* #region A11Y */


	/**
	 * Add event listeners
	 */
	private _addEventListener = ():void => {
		this._items.forEach(item => item.addEventListener("keydown", this._onKeyDownAccordion));
	};

	/**
	 * Remove event listeners
	 */
	private _removeEventListener = ():void => {
		this._items.forEach(item => item.removeEventListener("keydown", this._onKeyDownAccordion));
	};

	/**
	 * A11Y behaviour for keydown
	 */
	private _onKeyDownAccordion = (event):void => {
		// Intercept end(35), home(36), up(38), and down (40) for custom accordion behaviour https://www.w3.org/TR/wai-aria-practices/#accordion
		if (event.which === 35 || event.which === 36 || event.which === 38 || event.which === 40) {
			event.preventDefault();

			const activeElement = document.activeElement;
			const activeElementIndex = this._items.indexOf(activeElement);
			
			switch (event.which) {
				case 35: // end (jump to last element)
					if (activeElementIndex === this._itemsLength - 1) {
						return;
					} else {
						this._items[this._itemsLength - 1].focus();
					}
				case 36: // home (jump to first element)
					if (activeElementIndex === 0) {
						return;
					} else {
						this._items[0].focus();
					}
				case 38: // up (move to previous element)
					if (activeElementIndex === 0) {
						return;
					} else {
						this._items[activeElementIndex - 1].focus();
					}
				case 40: // down (move to next element)
					if (activeElementIndex === this._itemsLength - 1) {
						return;
					} else {
						this._items[activeElementIndex + 1].focus();
					}
			}

			console.log(event.which)
			console.log(this._itemsLength);
			console.log(activeElement)
			console.log(activeElementIndex)
			console.log(document.activeElement)
		}
		return;

	};

	/* #endregion */

	/* #region Methods */

	/**
	 */
	private _expandCollapseAll = ():void => {
		this._items.forEach(element => {
			element.open = !this._openAll;
		});

		this._openAll = !this._openAll;
		this.requestUpdate();
	};


	/**
	 */
	private _onExpandCollapseItem = (event):void => {
		if (this.behaviour !== 'single') {
			return;
		}

		this._items.forEach(element => {
			element.open = false;
		});

		event.target.open = true;
	};

	/**
	 * Render method
	 */
	public render(): TemplateResult {

		return html`
			<div class="outer-container">
				<slot name="heading"></slot>
				${this._buttonCollapse || this._buttonExpand
					? html`
						<div class="inner-container">
							${this._openAll
								? html`<slot name="button-collapse" @click="${this._expandCollapseAll}"></slot>`
								: html`<slot name="button-expand" @click="${this._expandCollapseAll}"></slot>`
							}
						</div>` 
					: html``
				}
			</div>
			<slot @opened="${this._onExpandCollapseItem}"></slot>
		 `;
	}

	public firstUpdated(): void {
		const elements = this.querySelectorAll('rui-expand-collapse');
		this._items = Array.from(elements);
		this._itemsLength = this._items.length;

		this._buttonCollapse = this.querySelector('[slot=button-collapse]') || undefined;
		this._buttonExpand = this.querySelector('[slot=button-expand]') || undefined;

		this._addEventListener();
		console.log('Custom accordion element update.');
	}

	public disconnectedCallback():void {
		this._removeEventListener();
	}

	/* #endregion */
}

export default RuiAccordion;
