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
	 * Alert role (https://www.w3.org/TR/wai-aria-practices/#alert)
	 * @type {string}
	 * @private
	 */
	private _role: string = '';
	@property({type : String, reflect: true})
	public get role(): string {
		return this._role;
	}
	public set role(newRole: string) {
		const oldVal = this.role;
		this._role = newRole;
		this.requestUpdate('role', oldVal);
	}

	/**
	 * Alert type
	 * @type {string}
	 */
	@property({type: String})
	public type: 'default' | 'success' | 'warning' | 'error' | 'info' = 'default';

	/**
	 * Allow the alert to be dismissed
	 * @type {boolean}
	 */
	@property({type: Boolean})
	public dismissible?: boolean = false;

	/**
	 * Has the alert been dismissed
	 * @type {boolean}
	 * @private
	 */
	private _isDismissed: boolean = false;

	/**
	* The styles for RuiAlert
	* @remarks If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
	*/
	public static get styles(): CSSResultArray {
		return [variables, layout, getShadowStylesFor('RuiAlert')] as CSSResultArray;
	}

	/* #endregion */

	/* #region Methods */

	public constructor() {
		super();
		this.role = 'alert';
	}

	/**
	 * Render
	 * @slot <icon>: Alert icon
	 * @slot <>: Alert content
	 * @slot <dismissible>: Alert dismissible button icon/text
	*/
	public render(): TemplateResult {
		return this._isDismissed ? html`` : html`
			<div class="icon">
				<slot name="icon"> </slot>
			</div>
			<div class="content">
				<slot> </slot>
			</div>
			${this.dismissible ? html`
				<div class = "dismissible">
					<button @click="${this._onDismiss}" >
						<slot name="dismissible"> </slot>
					</button>
				</div>
			` : html``}
		`
	};

	/**
	 * Action when user dismisses the alert
	 * @private
	 */
	private _onDismiss(): void {
		this._isDismissed = true;
		this.role = 'none';
		this.dispatchEvent(
			new CustomEvent('dismissed', {
				bubbles: true,
				composed: true
			})
		);
	}

	/* #endregion */
}

export default RuiAlert;
