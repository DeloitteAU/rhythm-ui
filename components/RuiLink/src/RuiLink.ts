/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';

import {variables, layout} from './RuiLink.css'

export class RuiLink extends LitElement {

	/**
	*
	* The styles for Link
	* @remarks
	* If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
	*/
	public static get styles(): CSSResultArray {
		return [variables, layout];
	}

	/**
	 * The href of the link, if undefined this will switch to a normal un-styled div. i.e at the end of a breadcrumb trail
	 */

	@property({type : String})
	public href? = undefined;

	/**
	 * If area-label is page
	 */
	@property({type : String})
	public active? = undefined;

	/**
	 * The colour of the Link
	 */

	@property({type : String})
	public color?: 'default' | 'inherit' | 'error' | 'primary'  = 'default';

	/**
	 * text decoration of the link - defaults to none
	 */

	@property({type : String})
	public underline: 'none' | 'hover' | 'always' | 'invert' = 'hover';

	/**
	 * Target of the link
	 */
	@property({type : String})
	public target?: '_blank' | '_self' | '_parent' | '__top' = '_self';

	/* #endregion */


	/* #region Methods */
	public render(): TemplateResult {
		if (this.href === undefined || this.active) {
			return html`
				<a class="active">
					<slot> </slot>
				</a>
			`;
		}
		return html`
		<a
			class="link"
			href=${this.href} 
			target=${this.target}
		>
			<slot> </slot>
		</a>
		`;
	}
	/* #endregion */
}

export default RuiLink;
