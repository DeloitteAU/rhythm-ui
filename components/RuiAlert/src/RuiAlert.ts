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
	public constructor() {
		super();
		this.role = 'alert';
	}

	/**
	 * @property role: A11Y role that is set on the host element
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
	 * @property type: Alert component type
	 */
	@property({type: String})
	public type: 'default' | 'success' | 'warning' | 'error' | 'info' = 'default';

	/**
	 * @property dismissible: Can the alert be dismissed
	 */
	@property({type: Boolean})
	public dismissible?: boolean = false;

	/**
	 * Internal; alert has been dismissed by user
	 */
	private _isDismissed: boolean = false;

	/**
	* The styles for RuiAlert
	* @remarks If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
	*/
	public static get styles(): CSSResultArray {
		return [variables, layout, getShadowStylesFor('RuiAlert')]
	}

	/* #endregion */

	/* #region Methods */

	/**
	 * LIT: Render method
	 * @slot <icon>: Slot for alert icon
	 * @slot <>: Slot for alert content
	 * @slot <dismissible>: Slot for dismissible button icon/text
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
					<button @click="${this._handleDismiss}" >
						<slot name="dismissible"> </slot>
					</button>
				</div>
			` : html``}
		`
	};

	/**
	 * Handler for a click of the summary content
	 */
	private _handleDismiss(): void {
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
