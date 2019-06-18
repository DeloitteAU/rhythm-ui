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
	 * The location array of the breadcrumbs
	 */

	@property({type : String})
	public location?: string = '';



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
		if (this.location) {
			const location = JSON.parse(this.location);
			const lastLocation = location.pop();

			return html`
				<div class="breadcrumb">
  					${location.map((i: { url: unknown; title: unknown; }) => html`<div><a href=${i.url}>${i.title}</a></div> `)}
					<div> ${lastLocation.title }</div>
				</div>`
    	}
        return html`
			<div class="breadcrumb">  
				<slot name="crumb"> </slot>
				<slot name="lastCrumb"> </slot>
			</div>
            `;
    }

	/* #endregion */
}


