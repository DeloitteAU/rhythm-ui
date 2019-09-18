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
	 * onExpandCollapse is the handler function that is called
	 * when the user triggers an expand/collapse. This
	 * function should be overriden when trying to control
	 * the component externally
	 */
	@property()
	public expandCollapseAll = ():void => {
		let elements = this.querySelectorAll('rui-expand-collapse');
		elements = Array.from(elements);
		
		elements.forEach(element => {
			element.open = !this._openAll;
		});

		const buttonExpand = this.querySelector('[slot=button-expand]');
		const buttonCollapse = this.querySelector('[slot=button-collapse]');

		if (this._openAll) {
			buttonCollapse.style.display = "none";
			buttonExpand.style.display = "";
		}
		else {
			buttonCollapse.style.display = "";
			buttonExpand.style.display = "none";
		}
		
		this._openAll = !this._openAll;
	};


	/**
	 * onExpandCollapse is the handler function that is called
	 * when the user triggers an expand/collapse. This
	 * function should be overriden when trying to control
	 * the component externally
	 */
	@property()
	private onExpandCollapseOnlyOne = (event):void => {
		const {target} = event;
		const expandCollapse = target.closest('rui-expand-collapse');
		
		if (expandCollapse) {
			const isOpen = expandCollapse.open;

			if (isOpen) {
				const accordion = event.currentTarget;
	
				const elements = accordion.assignedElements();
				elements.forEach(element => {
					if (expandCollapse !== element) {
						element.open = false;
					}
				});
			}
		}
	};

	/**
	 * Internal open state of component
	 */
	private _openAll: boolean = false;

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
	* Render method
		* @slot This is a slot test
	*/
	public render(): TemplateResult {

		if (this.behaviour === 'single') {
			return html`
			<div class="outer-container">
				<slot name="heading"></slot>
			</div>
			<slot @click="${this.onExpandCollapseOnlyOne}"></slot>
			`;
		}

		else {
			const buttonCollapse = this.querySelector('[slot=button-collapse]');
			buttonCollapse.style.display = "none";

			return html`
				<div class="outer-container">
					<slot name="heading"></slot>
					<div class="inner-container">
						<slot name="button-collapse" @click="${this.expandCollapseAll}"></slot>
						<slot name="button-expand" @click="${this.expandCollapseAll}"></slot>
					</div>
				</div>
				<slot></slot>
				`;
		}
	}

	/* #endregion */
}

export default RuiAccordion;