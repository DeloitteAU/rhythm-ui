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
	 * Accordion component behaviour; Allow only 1 item to be open (single) or allow multiple to be open.
	 * @type {string}
	 */
	@property({type : String})
	public behaviour: 'single' | 'multiple'  = 'multiple';

	/**
	 * Have all items been opened or not.
	 * @type {boolean}
	 * @private
	 */
	private _openAll: boolean = false;

	/**
	 * Accordion-items
	 * @type {any[]}
	 * @private
	 */
	private _items: any[] = [];

	/**
	 * Button to collapse all accordion items
	 * @type {HTMLElement}
	 * @private
	 */
	private _buttonCollapse?: HTMLElement;

	/**
	 * Button to expand all accordion items
	 * @type {HTMLElement}
	 * @private
	 */
	private _buttonExpand?: HTMLElement;

	/**
	 * The styles for Accordion
	 * @remarks If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
	 */
	public static get styles(): CSSResultArray {
		return [variables, layout, getShadowStylesFor('RuiAccordion')] as CSSResultArray;
	}

	/* #endregion */

	/* #region A11Y */

	public constructor() {
		super();

		const elements = this.querySelectorAll('rui-accordion-item');
		this._items = Array.from(elements);
		this._buttonCollapse = this.querySelector('[slot=button-collapse]') as HTMLElement;
		this._buttonExpand = this.querySelector('[slot=button-expand]') as HTMLElement;
	}


	/**
	 * Add event listeners
	 */
	public connectedCallback():void {
		super.connectedCallback();
		this._items.forEach(item => item.addEventListener("keydown", this._onKeyDownAccordion, true));
	};

	/**
	 * Remove event listeners
	 */
	public disconnectedCallback():void {
		this._items.forEach(item => item.removeEventListener("keydown", this._onKeyDownAccordion, true));
		super.disconnectedCallback();
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
				case 38: // up (move to previous element)
					if (activeElementIndex !== 0) {
						this._items[(activeElementIndex - 1)].focus();
					}
					return;
				case 40: // down (move to next element)
					if (activeElementIndex !== this._items.length - 1) {
						this._items[activeElementIndex + 1].focus();
					}
					return;
			}
		}
		return;

	};

	/* #endregion */

	/* #region Methods */

	/**
	 * Expand/collapse all accordions items using the expand/collapse button
	 * @private
	 */
	private _expandCollapseAll = ():void => {
		this._items.forEach(element => {
			element.open = !this._openAll;
		});

		this._openAll = !this._openAll;
		this.requestUpdate(); // update component so the button changes state
	};


	/**
	 * Collapse other accordions when behaviour is set to `single`
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
	 * @slot <>: Accordion item
	 * @slot <heading>: Accordion heading
	 * @slot <button-collapse>: Accordion expand all button
	 * @slot <button-expand>: Accordion collapse all button
	 * @returns {TemplateResult}
	 */
	public render(): TemplateResult {
		return html`
			<div class="outer-container">
				<div id="accordion-heading">
					<slot name="heading"></slot>
				</div>
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
			<div role="tablist" aria-multiselectable="${this.behaviour === 'single' ? false : true}">
				<slot @opened="${this._onExpandCollapseItem}"></slot>
			</div>
		 `;
	}

	/* #endregion */
}

export default RuiAccordion;
