/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {getShadowStylesFor} from '@rhythm-ui/styles';
import {variables, layout} from './RuiHeroBanner.css'

export class RuiHeroBanner extends LitElement {
	/**
	 * Icon source
	 */
	@property({type : String})
	public img: string = '';

	/**
	*
	* The styles for button
	* @remarks
	* If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
	*/
	public static get styles(): CSSResultArray {
		return [variables, layout, getShadowStylesFor('RuiHeroBanner')];
	}

	/* #endregion */

	/* #region Methods */

	/**
	* Render method
		* @slot This is a slot test
	*/
	public render(): TemplateResult {
		return html`
			<div class="hero-banner" style="--rui-hero-banner__background-image: url(${this.img})">
				<slot name="overlay"></slot>
				<div class="hero-banner-content">
					<slot></slot>
					<slot name="actions"></slot>
				</div>
			</div>
			`;
	}

	/* #endregion */
}

export default RuiHeroBanner;
