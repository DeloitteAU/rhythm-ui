/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {getShadowStylesFor} from '@rhythm-ui/styles';
import {variables, layout} from './RuiAccordion.css';

export class RuiAccordion extends LitElement {

	/**
	 * The underlying type of the button.
	 */
	@property({type : String})
	public behaviour?: 'single' | 'multiple'  = 'multiple';

	/**
	 * Internal: open state of component
	 */
	private _openAll: boolean = false;
	/**
	 * Internal: array of <rui-accordion-items>
	 */
	private _items: any[] = [];
	/**
	 * Internal: component has Heading slotted element
	 */
	private _hasHeading?: boolean = false;
	/**
	 * Internal: component has button-toggle slotted element
	 */
	private _hasButtonToggle?: boolean = false;

	/**
	 *
	 * The styles for button
	 * @remarks
	 * If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
	 */
	public static get styles(): CSSResultArray {
		return [variables, layout, getShadowStylesFor('RuiAccordion')];
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
					if (activeElementIndex !== this._items.length - 1) {
						this._items[this._items.length - 1].focus();
					}
					return;
				case 36: // home (jump to first element)
					if (activeElementIndex !== 0) {
						this._items[0].focus();
					}
					return;
				case 38: // up (move to previous element, or last when focused el is the first)
					if (activeElementIndex !== 0) {
						this._items[(activeElementIndex - 1)].focus();
					} else {
						this._items[this._items.length - 1].focus();
					}
					return;
				case 40: // down (move to next element. or first when focused el is the last)
					if (activeElementIndex !== this._items.length - 1) {
						this._items[activeElementIndex + 1].focus();
					} else {
						this._items[0].focus()
					}
					return;
			}
		}
		return;
	};

	/* #endregion */

	/* #region Methods */

	/**
	 * Expand all accordion items
	 * @private
	 */
	private _expandCollapseAll = ():void => {
		this._items.forEach(element => {
			element.open = !this._openAll;
		});

		this._openAll = !this._openAll;
		this.requestUpdate();
	};


	/**
	 * Collapse all accordion items
	 * @param event
	 * @private
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
			${this._hasHeading || this._hasButtonToggle ? html`
				<div class="accordion-heading">
					<slot name="heading"></slot>
					<slot name="button-toggle" @click="${this._expandCollapseAll}"></slot>
				</div>
			` : html``}
			<div class="item-area">
				<slot @opened="${this._onExpandCollapseItem}"></slot>
			</div>
		 `;
	}

	public firstUpdated(): void {
		const elements = this.querySelectorAll('rui-accordion-item');
		this._items = Array.from(elements);
		this._hasHeading = !!this.querySelector('[slot=heading]');
		this._hasButtonToggle = !!this.querySelector('[slot=button-toggle]');

		this._addEventListener();
		this.requestUpdate(); // required to feed back the values from above
	}

	public disconnectedCallback():void {
		this._removeEventListener();
	}

	/* #endregion */
}

export default RuiAccordion;
