/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {getShadowStylesFor} from '@rhythm-ui/styles';
import {variables, layout} from './RuiHeader.css'

export class RuiHeader extends LitElement {

	/**
	*
	* The styles for header
	* @remarks
	* If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
	*/
	public static get styles(): CSSResultArray {
		return [variables, layout, getShadowStylesFor('RuiHeader')];
	}

	/* #endregion */

	/* #region Methods */

	/**
	* Render method
		* @slot This is a slot test
	*/
	public render(): TemplateResult {
		return html`
			<header>
				<div class="mobile">
					<slot name="mobile"></slot>
				</div>
				<div class="desktop">
					<slot name="desktop"></slot>
				</div>
			</header>
			`;
	}

	/* #endregion */
}

export default RuiHeader;
