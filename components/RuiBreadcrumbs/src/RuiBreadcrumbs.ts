/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {variables, layout} from './RuiBreadcrumbs.css'


export class RuiBreadcrumbs extends LitElement {
	public firstUpdated() {
		/**
		 * 'assignedElements()'
		 * Define all slots that are passed in (As Rui-link)
		 * flatten: true returns the assigned elements of any available child <slot> elements
		 */
		const slots = this.shadowRoot.querySelector('slot');
		const crumbElements = slots.assignedElements({flatten: true});

		for (let i = 1, len = crumbElements.length; i < len; i++) {
			/**
			 * create an li element with slot='crumb' to be appended before each li child node in the breadcrumb parent node.
			 * the separator is used as 'text'
			 * We use 'this' in reference to the parent node
			 */

			const node = document.createTextNode(`${this.separator}`);
			const listEl = document.createElement("li");
			listEl.setAttribute("slot", "crumb");
			listEl.setAttribute("aria-hidden", "true");
			listEl.appendChild(node);

			this.insertBefore(listEl, crumbElements[i]);
		}
	}

	/**
	 * The array of breadcrumbs
	 */

	@property({type : String})
	public separator?: string = '/';

	/**
	 * The array of breadcrumbs
	 */

	@property({type : String})
	public crumbs?: string = '';

	/**
	 * The array of breadcrumbs
	 */
	@property({type : Number})
	public maxCrumbs?: number = 100;


	/**
    *
    * The styles for breadcrumbs
    * @remarks
    * If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
    */
    public static get styles(): CSSResultArray {
        return [variables, layout];
    }

    /* #endregion */


    /* #region Methods */

    public render(): TemplateResult {
		if (this.crumbs) {
			const crumbsArray = JSON.parse(this.crumbs);
			const activeCrumb = crumbsArray.pop();

			return html`
				<nav aria-label="Breadcrumb" class="crumbs">
					<ol>
						${crumbsArray.map((crumb: { url: unknown; title: unknown; }) => html`<li><a href=${crumb.url}>${crumb.title}</a></li> `)}
						<li aria-current="page" > ${activeCrumb.title }</li>
					</ol>
				</nav>`
    	}
        return html`
		<nav aria-label="Breadcrumb" class="crumbs">
			<ol>
				<slot name="crumb"> </slot>
			</ol>
		</nav>
            `;
    }
	/* #endregion */
}

export default RuiBreadcrumbs;
