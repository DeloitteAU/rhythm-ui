/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {variables, layout} from './RuiNavigationGroup.css'

export class RuiNavigationGroup extends LitElement {

	private _classToken: string = 'current';

	/**
	 * Href location for the button
	 * @remarks
	 * This forces the element to render using an anchor tag in the shadow dom
	 */
	@property({type: String})
	public href: string = '/';


	public static get styles(): CSSResultArray {
		return [variables, layout];
	}
	/* #endregion */

	/* #region Methods */
	private _onPointerDown(event): void {
		event.preventDefault();

		const container = this.shadowRoot.firstElementChild;
		const token = this._classToken;

		if (!container.classList.contains(token)) {

			const groups = Array.from(this.parentElement.children);
			groups.forEach(group => {
				if (group !== this) {
					const container = group.shadowRoot.firstElementChild;
					container.classList.remove(token);
					group.shadowRoot.querySelector('.summary__icon').setAttribute('aria-expanded', false);
				}
			});
			// event.currentTarget.setAttribute('aria-expanded', true);
		}

		container.classList.toggle(token);
	}

	private _onPointerLeave(event): void {
		const container = event.currentTarget;
		container.classList.remove(this._classToken);
	}

	/**
	* Render method
		* @slot This is a slot test
	*/
	public render(): TemplateResult {
		return html`
			<div class="container" @mouseleave="${this._onPointerLeave}">
				<div class="summary">
					<p>
						<a href="${this.href}" class="summary__name">
							<slot name="name"></slot>
						</a>
					</p>
					<p>
						<a href="/" aria-label="" aria-expanded="false" aria-haspopup="true" class="summary__icon-container"
							@click="${this._onPointerDown}" title="Expand or collapse related content.">
							<!--- <slot name="summary__icon"></slot> -->
							<svg width="8px" height="5px" viewBox="0 0 8 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="summary__icon">
								<g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
									<path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" class="icon"></path>
								</g>
							</svg>
						</a>
					</p>
				</div>
				<div class="details">
					<div class="first-column">
						<slot name="first-column"></slot>
					</div>
					<div class="second-column">
						<slot></slot>
					</div>
				</div>
			</div>
			`;
		}
	/* #endregion */
}

export default RuiNavigationGroup;
