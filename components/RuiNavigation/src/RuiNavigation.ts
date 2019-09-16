/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {variables, layout} from './RuiNavigation.css'

export class RuiNavigation extends LitElement {

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

	private _currentlyOpen: HTMLElement | null = null;

	/* #region Methods */
	private _onToggle(event): void {
		const isOpen = event.target.open;

		if (isOpen) {
			const currentlyOpen = event.target;

			const groups = Array.from(this.children);
			groups.forEach(group => {
				if (group !== currentlyOpen) {
					group.open = false;
				}
			});

			this._currentlyOpen = currentlyOpen;
		}
	}

	/**
	* Render method
		* @slot This is a slot test
	*/
	public render(): TemplateResult {
		this.addEventListener('toggle', this._onToggle, true);

		return html`
			<slot></slot>
			`;
	}

	/* #endregion */
}

export default RuiNavigation;
