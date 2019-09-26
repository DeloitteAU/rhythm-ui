
import {LitElement, html, property, CSSResultArray, query} from 'lit-element';
import {ifDefined} from 'lit-html/directives/if-defined';

import {variables, layout} from './RuiMenubarItem.css';

export class RuiMenubarItem extends LitElement {

	public static tag = 'rui-menubar-item';

	public static get styles(): CSSResultArray {
		return [variables, layout];
	}

	@query('#button') buttonElement!: HTMLAnchorElement;

	protected createRenderRoot() {
		return this.attachShadow({mode: 'open', delegatesFocus: true});
	}

	focus() {
		const buttonElement = this.buttonElement;
		if (buttonElement) {
			buttonElement.focus();
		}
	}
	
	blur() {
		const buttonElement = this.buttonElement;
		if (buttonElement) {
			buttonElement.blur();
		}
	}

	@property({type: String})
	href?: string;

	@property({type: Boolean})
	active: boolean = false;

	renderTopItem() {
		return html`
			<a id="button" href=${ifDefined(this.href)} role="menuitem">
				<slot></slot>
			</a>
		`;
	}

	render() {
		return html`
			<li role="none">
				${this.renderTopItem()}
			</li>
		`;
	}

}
