/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {getShadowStylesFor} from '@rhythm-ui/styles';
import {variables, layout} from './RuiAlert.css'

export class RuiAlert extends LitElement {
	/**
	 * Internal open state of component
	 */
	private _isDismissed: boolean = false;

	/**
	*
	* The styles for button
	* @remarks
	* If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
	*/
	public static get styles(): CSSResultArray {
		return [variables, layout, getShadowStylesFor('RuiAlert')]
	}

	/**
	 * Handler for a click of the summary content
	 */
	private _handleDismiss(): void {
		this._isDismissed = true;
		this.requestUpdate()
	}

	/* #endregion */

	/* #region Methods */

	/**
	* Render method
		* @slot This is a slot test
	*/
	public render(): TemplateResult {
		return this._isDismissed ? html`` : html`
					<div class="alert">
						<slot> </slot>
						<div class="dismissible">
							<slot name="dismissible" @click="${this._handleDismiss}"></slot>
						</div>
					</div>
				`};

	/* #endregion */
}

export default RuiAlert;
