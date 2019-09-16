/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {getShadowStylesFor} from '@rhythm-ui/styles';
import {variables, layout} from './RuiBadge.css'

export class RuiBadge extends LitElement {
	@property({type: String})
	public type: 'default' | 'success' | 'warning' | 'error' | 'info' = 'default';

	@property({type: String})
	public value? = '';

	@property({type: String})
	public label? = '';

	@property({type: String})
	public icon? = '';

	/**
	*
	* The styles for button
	* @remarks
	* If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
	*/
	public static get styles(): CSSResultArray {
		return [variables, layout, getShadowStylesFor('RuiBadge')];
	}

	/* #endregion */

	/* #region Methods */

	/**
	* Render method
		* @slot This is a slot test
	*/
	public render(): TemplateResult {
		return html`
			<div>
				<slot> </slot>
			</div>
			<div class="badge">
				<span class="label">${this.label}</span>
				<span class="value">${this.value}</span>
			</div>
			`;
	}

	/* #endregion */
}

export default RuiBadge;
