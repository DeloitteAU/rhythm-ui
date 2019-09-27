/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {ifDefined} from 'lit-html/directives/if-defined.js';
import {getShadowStylesFor} from '@rhythm-ui/styles';
import {variables, layout} from './RuiButton.css'

/**
 * RuiButton
 */
export class RuiButton extends LitElement {

	/**
	 * Button button element
	 */
	private _buttonEl: HTMLButtonElement;


	/* #region Properties */

	/**
	 * The theme type of the button
	 */
	@property({type: String})
	public type: 'default' | 'primary' | 'secondary' | 'tertiary' = 'primary';

	/**
	 * The variant style of the button
	 */
	@property({type: String})
	public variant: 'outline' | 'ghost' | 'fill' = 'fill';

	/**
	 * The size of the button
	 */
	@property({type: String})
	public size: 'normal' | 'small' | 'large' = 'normal';

	/**
	 * Set to true if the button should be disabled
	 */
	@property({type: Boolean})
	public disabled: boolean = false;

	/**
	 * The underlying type of the button.
	 */
	@property({type: String})
	public behaviour: 'submit' | 'reset' | 'button' | 'anchor' = 'button';

	/**
	 * Href location for the button
	 * @remarks
	 * This forces the element to render using an anchor tag in the shadow dom
	 */
	@property({type: String})
	public href?: string;

	/**
	 * Specifies a target value to the anchor tag
	 * Requires href to be set or behaviour to be anchor
	 */
	@property({type : String})
	public target?: '_blank' | '_parent' | '_self' | '_top';

	/**
	 * Set button aria-label
	 */
	@property({type: String})
	public label?: '';

	/**
	 *
	 * The styles for button
	 * @remarks
	 * If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
	 */
	public static get styles(): CSSResultArray {
		return [variables, layout, getShadowStylesFor('RuiButton')];
	}

	/* #endregion */


	/* #region Methods */

	/**
	 * LIT firstUpdated lifecycle event
	 */
	public firstUpdated():void {
		this._buttonEl = this.shadowRoot.querySelector('button');
	}

	/**
	 * Set focus to child button element
	 */
	public focus():void {
		!!this._buttonEl && this._buttonEl.focus();
	};

	/**
	 * Handle blur to child button element
	 */
	public blur():void {
		!!this._buttonEl && this._buttonEl.blur();
	};

	/**
	 * Render method
	 * @slot This is a slot test
	 */
	public render(): TemplateResult {

		// If href has not been defined use <button>
		if (!this.href && this.behaviour !== 'anchor') {
			return html`
				<button
					class="btn"
					?disabled="${this.disabled}"
					aria-label="${ifDefined(this.label)}"
				>
					<slot></slot>
				</button>
			`;
		}

		// Use <a>
		return html`
			<a
				class="btn"
				href="${ifDefined(this.href)}"
				aria-label="${ifDefined(this.label)}"
				target="${ifDefined(this.target)}"
			>
				<slot></slot>
			</a>
		`;
	}

	protected createRenderRoot() {
		return this.attachShadow({mode: 'open', delegatesFocus: true});
	}

	/* #endregion */

}

export default RuiButton;
