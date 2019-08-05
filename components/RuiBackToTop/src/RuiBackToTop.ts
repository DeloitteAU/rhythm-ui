/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import '@rhythm-ui/scroll-to';

import {variables, layout} from './RuiBackToTop.css'

export class RuiBackToTop extends LitElement {

	@property({type: String})
	public label: string = 'Back to Top'

	@property({type: String})
	public variant: 'icon' | 'custom' | 'default' = 'default';


	/**
	*
	* The styles for button
	* @remarks
	* If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
	*/
	public static get styles(): CSSResultArray {
		return [variables, layout];
	}

	private _renderContent = (): TemplateResult => {
		if (this.variant === 'default') {
			return html`
				<button class="btn" slot="scroll-trigger">
					${this.label}
					<div class="icon-container">
						<span class="chevron-up"></span>
					</div>
				</button>
			`;
		}
		
		if (this.variant === 'icon') {
			return html`
				<button class="btn btn--icon" slot="scroll-trigger" aria-label="${this.label}">
					<span class="chevron-up"></span>
				</button>
			`;
		}

		return html`
			<button class="btn btn--custom" slot="scroll-trigger">
				<slot></slot>
			</button>
		`;
		 
	}

	/* #endregion */

	/* #region Methods */

	/**
	* Render method
		* @slot This is a slot test
	*/
	public render(): TemplateResult {
		return html`
			<rui-scroll-to>
				${this._renderContent()}
			</rui-scroll-to>
		`;
	}

	/* #endregion */
}

export default RuiBackToTop;
