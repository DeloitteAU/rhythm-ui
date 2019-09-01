/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {variables, layout} from './RuiHeader.css'

export class RuiHeader extends LitElement {

	/**
	 * The header elements
	 */
	private _items: TemplateResult[] = [];

	private _itemsUtilLeft: TemplateResult[] = [];
	private _itemsUtilCenter: TemplateResult[] = [];
	private _itemsUtilRight: TemplateResult[] = [];

	private _itemsMainLeft: TemplateResult[] = [];
	private _itemsMainCenter: TemplateResult[] = [];
	private _itemsMainRight: TemplateResult[] = [];

	private _itemsMobileLeft: TemplateResult[] = [];
	private _itemsMobileCenter: TemplateResult[] = [];
	private _itemsMobileRight: TemplateResult[] = [];

	private _itemsMobilePrimary: TemplateResult[] = [];
	private _itemsMobileSecondary: TemplateResult[] = [];
	private _itemsMobileTertiary: TemplateResult[] = [];


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
		this._items =
			[...this.children]
				.map((c, i) => {
					const slots = JSON.stringify(c.slot).replace(/\"/g, '').split(" ")
					slots.forEach(slot => {
						switch (slot) {
							case "utilities-left" :
								this._itemsUtilLeft.push(html `${c}`);
							case "utilities-center" :
								this._itemsUtilCenter.push(html `${c}`);
							case "utilities-right" :
								this._itemsUtilRight.push(html `${c}`);
							case "main-left" :
								this._itemsMainLeft.push(html `${c}`);
							case "main-center" :
								this._itemsMainCenter.push(html `${c}`);
							case "main-right" :
								this._itemsMainRight.push(html `${c}`);
							case "mobile-main-left" :
								this._itemsMobileLeft.push(html `${c}`);
							case "mobile-main-center" :
								this._itemsMobileCenter.push(html `${c}`);
							case "mobile-main-right" :
								this._itemsMobileRight.push(html `${c}`);
							case "mobile-menu-primary" :
								this._itemsMobilePrimary.push(html `${c}`);
							case "mobile-menu-secondary" :
								this._itemsMobileSecondary.push(html `${c}`);
							case "mobile-menu-tertiary" :
								this._itemsMobileTertiary.push(html `${c}`);
						}
					})
					
					return html`${c}`;
				});

		console.log(this._items)

		return html`
			<header>
				<div class="desktop">
					<div class="utility">
						<div div="utilities-left"></div>
						<div div="utilities-center"></div>
						<div div="utilities-right"></div>
					</div>
					<div class="main">
						<div div="main-left"></div>
						<div div="main-center"></div>
						<div div="main-right"></div>
					</div>
				</div>
				<div class="mobile">
					<div div="hamburger"></div>
					<div class="main">
						<div div="mobile-main-left"></div>
						<div div="mobile-main-center"></div>
						<div div="mobile-main-right"></div>
					</div>
					<div class="menu">
						<div div="mobile-menu-primary"></div>
						<div div="mobile-menu-secondary"></div>
						<div div="mobile-menu-tertiary"></div>
					</div>
				</div>
			</header>
			`;
	}

	/* #endregion */
}

export default RuiHeader;
