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
	public href? = undefined;

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
	 * Render method
	 * @slot This is a slot test
	 */
	public render(): TemplateResult {

		// If href has not been defined use <button>
		if (!this.href && this.behaviour !== 'anchor') {
			return html`
				<button
					class="btn"
					?disabled=${this.disabled}
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
				href=${ifDefined(this.href)}
				aria-label="${ifDefined(this.label)}"
			>
				<slot></slot>
			</a>
		`;
	}

	/* #endregion */

}

export default RuiButton;
