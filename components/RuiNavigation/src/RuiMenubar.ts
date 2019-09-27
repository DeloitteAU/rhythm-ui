/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {variables, layout} from './RuiMenubar.css'
import RuiNavigationGroup from './RuiNavigationGroup';

export class RuiMenubar extends LitElement {

	public static tag = 'rui-menubar';

	/* #region Properties */

	/**
	 * Active navigation item
	 */
	private _activeNavItemEl?: HTMLElement;


	@property({type: Boolean})
	public stacked: boolean = false;

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

	private _handleMenuItemClick(event): void {
		if (event.target && typeof event.target.expanded !== 'undefined') {
			if (event.target.expanded) {
				[...this.children].filter(child => child !== event.target).forEach(child => {
					if (typeof child['collapse'] === 'function') {
						child['collapse']();
					}
				});
			}
		}
	}

	public collapseAll(): void {
		[...this.children].forEach(child => {
			if (typeof child['collapse'] === 'function') {
				child['collapse']();
			}
		});
	}

	private _handleKeyPress = (event: KeyboardEvent): void => {
		if (event.key === 'Escape' || event.keyCode === 27) {
			this.collapseAll();
		}
	}

	private _handleDocumentClick = (event) => {
		if(!this.contains(event.target)) {
			this.collapseAll();
		};
	}

	connectedCallback() {
		super.connectedCallback();
		this.addEventListener('menu-item-click', this._handleMenuItemClick, true);
		document.addEventListener('keydown', this._handleKeyPress);
		document.addEventListener('click', this._handleDocumentClick, true)


		if (this.stacked) {
			[...this.children].forEach(c => {
				c.setAttribute('data-stacked', 'true');
			})
		}
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.removeEventListener('menu-item-click', this._handleMenuItemClick);
		document.removeEventListener('keydown', this._handleKeyPress);
		document.removeEventListener('click', this._handleDocumentClick)
	}

	/**
	* Render method
		* @slot This is a slot test
	*/
	public render(): TemplateResult {
		return html`
			<nav aria-label="Main Navigation">
				<ul role="menubar" aria-label="Main Navigation">
					<slot></slot>
				</ul>
			</nav>
		`;
	}

	/* #endregion */
}

export default RuiMenubar;
