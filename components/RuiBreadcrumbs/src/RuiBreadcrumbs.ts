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


// separator="›" aria-label="Breadcrumb"
