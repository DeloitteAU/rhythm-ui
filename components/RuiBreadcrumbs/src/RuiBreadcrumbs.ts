/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import { LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import { variables, layout } from './RuiBreadcrumbs.css'


export class RuiBreadcrumbs extends LitElement {
	/**
	 * The array of breadcrumbs
	 */

	@property({type : String})
	public crumbs?: string = '';


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

    /**
    * Render method
        * @slot This is a slot test
    */

    public render(): TemplateResult {
		if (this.crumbs) {
			const crumbsArray = JSON.parse(this.crumbs);
			const activeCrumb = crumbsArray.pop();

			return html`
				<div class="crumbs">
  					${crumbsArray.map((crumb: { url: unknown; title: unknown; }) => html`<div><a href=${crumb.url}>${crumb.title}</a></div> `)}
					<div class="active_crumb"> ${activeCrumb.title }</div>
				</div>`
    	}
        return html`
			<div class="crumbs">  
				<slot></slot>
			</div>
            `;
    }

	/* #endregion */
}


// separator="›" aria-label="Breadcrumb"
