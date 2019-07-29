/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {variables, layout} from './RuiIcon.css'

export class RuiIcon extends LitElement {

	public constructor() {
		super();
	}

	/**
	 * Icon source
	 */
	@property({type : String})
	public src: string = '';

	/**
	 * Icon has hover effect
	 */
	@property({type : Boolean})
	public hover?: boolean = false;

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
		return [variables, layout];
	}

	/* #endregion */

	/* #region Methods */

	/**
	* Render method
		* @slot This is a slot test
	*/
	public render(): TemplateResult {
		let style = '';
		let src = '';

		if (this.hover) {
			style = `mask: url(${this.src}); -webkit-mask: url(${this.src}); mask-size: contain; -webkit-mask-size: contain;`; //Currently vendor prefixes are required for this value
		} else {
			src = this.src;
		}

		return html`
			<img src="${src}" alt="${this.alt}" style="${style}" class="${this.hover ? 'hover' : ''}"/>
		`;
	}

	/* #endregion */
}

export default RuiIcon;
