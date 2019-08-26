/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {getShadowStylesFor} from '@rhythm-ui/styles';
import {variables, layout} from './RuiIcon.css'

export class RuiIcon extends LitElement {
	/**
	 * Icon source
	 */
	@property({type : String})
	public src: string = '';

	/**
	 * Icon alt text
	 */
	@property({type : String})
	public alt?: string = '';


	/**
	*
	* The styles for button
	* @remarks
	* If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
	*/
	public static get styles(): CSSResultArray {
		return [variables, layout, getShadowStylesFor('RuiIcon')];
	}

	/* #endregion */

	/* #region Methods */

	/**
	* Render method
		* @slot This is a slot test
	*/
	public render(): TemplateResult {
		return html`
			<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="${this.alt}" style="--rui-icon__url: url(${this.src})"/>
		`;
	}

	/* #endregion */
}

export default RuiIcon;
