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
		const buttonCollapse = this.querySelector('[slot=button-collapse]');
		const buttonExpand = this.querySelector('[slot=button-expand]');

		return html`
			<div class="outer-container">
				<slot name="heading"></slot>
				${buttonCollapse || buttonExpand
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
	}

	/* #endregion */
}

export default RuiAccordion;
