
import {LitElement, html, property, CSSResultArray, TemplateResult, query} from 'lit-element';
import {ifDefined} from 'lit-html/directives/if-defined';
import {classMap} from 'lit-html/directives/class-map';

import {RuiMenubarItem} from './RuiMenubarItem';
import {layout} from './RuiMenubarDropDownItem.css';

export enum InteractionType {
	HOVER = 'hover',
	CLICK = 'click',
}

export class RuiMenubarDropDownItem extends RuiMenubarItem {

	public static tag = 'rui-menubar-dropdown-item';

	public static get styles() {
		return [...super.styles, layout];
	}

	private _expanded: boolean = false;

	@property({type: String})
	public interaction: InteractionType = InteractionType.CLICK;

	public set expanded(value) {
		this._expanded = value;
		this.requestUpdate();
	}

	public get expanded() {
		return this._expanded;
	}

	private _handleItemClick() {
		if (this.interaction === InteractionType.CLICK) {
			this.toggle();

			// Use custom event instead of 'click' so RuiMenuBar can dodge noise from clicks on sub menus
			let event = new CustomEvent('menu-item-click');
			this.dispatchEvent(event);
		}
	}

	public collapse() {
		this.expanded = false;
	}

	public expand() {
		this.expanded = true;
	}

	public toggle() {
		this.expanded = !this.expanded;
	}

	private _handleMouseEnter() {
		this.expanded = true;

		// Fire this so any other menus will close
		let event = new CustomEvent('menu-item-click');
		this.dispatchEvent(event);
	}

	connectedCallback() {
		super.connectedCallback();

		if (this.interaction === InteractionType.HOVER) {
			this.addEventListener('mouseenter', this._handleMouseEnter);
			this.addEventListener('mouseleave', this.collapse);
		}
	}

	disconnectedCallback() {
		super.disconnectedCallback();

		if (this.interaction === InteractionType.HOVER) {
			this.removeEventListener('mouseenter', this._handleMouseEnter);
			this.removeEventListener('mouseleave', this.collapse);
		}
	}

	renderTopItem() {
		// If nav item has a href then we need to render an additional button to toggle the drop down
		// This is really important for accessibility (particularly if the interaction is hover)
		if (this.href) {
			return html`
				<a id="main" href=${this.href} role="menuitem">
					<slot></slot>
				</a>
				<a
					class="menu-chevron"
					role="menuitem"
					@click=${this._handleItemClick}
					aria-haspopup="true"
					aria-expanded=${this.expanded}
					aria-labelledby="main"
				>
					<slot name="chevronIcon">${this.defaultChevronIcon()}</slot>
				</a>
			`;
		}

		// No href so we can just use the menu item itself to toggle drop down
		return html`
			<a
				@click=${this._handleItemClick}
				role="menuitem"
				aria-haspopup="true"
				aria-expanded=${this.expanded}
			>
				<slot></slot>
				<span class="menu-chevron">
					<slot name="chevronIcon">${this.defaultChevronIcon()}</slot>
				</span>
			</a>
		`;
	}

	defaultChevronIcon() {
		return html`<span class="defaultChevron">&#9660;</span>`;
	}

	render() {
		return html`
			<li role="none" class=${`on-${this.interaction} ${this.expanded ? 'expanded' : ''}`}>
				${this.renderTopItem()}
				<div class="dropdown">
					<slot name="dropdown"></slot>
				</div>
			</li>
		`;
	}
}