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

	@property({type: String})
	public type: 'default' | 'success' | 'warning' | 'error' | 'info' = 'default';

	@property({type: Boolean})
	public dismissible?: boolean = false;

	/**
	 * Internal has
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

	/* #endregion */

	/* #region Methods */

	protected createRenderRoot() {
		return this.attachShadow({mode: 'open', delegatesFocus: true});
	}

	/**
	 * Handler for a click of the summary content
	 */
	private _handleDismiss(): void {
		this._isDismissed = true;
		this.requestUpdate()
	}

	/**
	* Render method
		* @slot This is a slot test
	*/
	public render(): TemplateResult {
		return this._isDismissed ? html`` : html`
			<div class="alert">
				<div class="icon">
					<slot name="icon"> </slot>
				</div>
				<div class="content" role="alert">
					<slot> </slot>
				</div>
				${this.dismissible ? html`
					<div class = "dismissible">
						<button @click="${this._handleDismiss}" >
							<slot name="dismissible"> </slot>
						</button>
					</div>
				` : html``}
			</div>
		`};

	/* #endregion */
}

export default RuiAlert;
