/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {getShadowStylesFor} from '@rhythm-ui/styles';
import {variables, layout} from './RuiHeaderDesktop.css'

export class RuiHeaderDesktop extends LitElement {

	/**
	 *
	 * The styles for desktop header
	 * @remarks
	 * If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
	 */
	public static get styles(): CSSResultArray {
		return [variables, layout, getShadowStylesFor('RuiHeaderDesktop')];
	}

	/* #endregion */

	/* #region Methods */

	/**
	 * Render method
	 * @slot This is a slot test
	 */
	public render(): TemplateResult {
		return html`
			<div class="utilities">
				<div class="content">
					<div class="left">
						<slot name="utilities-left"></slot>
					</div>
					<div class="center">
						<slot name="utilities-center"></slot>
					</div>
					<div class="right">
						<slot name="utilities-right"></slot>
					</div>
				</div>
			</div>
			<div class="main">
				<div class="content">
					<div class="left">
						<slot name="main-left"></slot>
					</div>
					<div class="center">
						<slot name="main-center"></slot>
					</div>
					<div class="right">
						<slot name="main-right"></slot>
					</div>
				</div>
			</div>
		`;
	}

	/* #endregion */
}

export default RuiHeaderDesktop;
