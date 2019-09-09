/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {getShadowStylesFor} from '@rhythm-ui/styles';
import {variables, layout} from './RuiHeaderMobile.css'

export class RuiHeaderMobile extends LitElement {

	/**
	 *
	 * The styles for desktop header
	 * @remarks
	 * If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
	 */
	public static get styles(): CSSResultArray {
		return [variables, layout, getShadowStylesFor('RuiHeaderMobile')];
	}

	/* #endregion */

	/* #region Methods */

	_openMenu = () => {
		console.log('opened');
	}

	_closeMenu = () => {
		console.log('closed');
	}

	/**
	 * Render method
	 * @slot This is a slot test
	 */
	public render(): TemplateResult {
		return html`
			<div class="main">
				<div class="content">
					<div class="left">
						<slot name="menu-open" @click="${this._openMenu()}"></slot>
					</div>
					<div class="center">
						<slot name="main-center"></slot>
					</div>
					<div class="right">
						<slot name="main-right"></slot>
					</div>
				</div>
			</div>
			<div class="overlay"></div>
			<div class="menu">
				<div class="content">
					<slot name="menu-close" @click="${this._closeMenu()}"></slot>
					<slot name="menu-top"></slot>
					<slot name="menu-middle"></slot>
					<slot name="menu-bottom"></slot>
				</div>
			</div>
		`;
	}

	/* #endregion */
}

export default RuiHeaderMobile;
