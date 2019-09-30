/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {getShadowStylesFor} from '@rhythm-ui/styles';
import {variables, layout} from './RuiExpandCollapse.css'

// Update to include any possible type a value
// can take, currently only have boolean open property
type RuiExpandCollapsePropertyType = boolean;

/**
 * RuiExpandCollapse
 */
export class RuiExpandCollapse extends LitElement {
	/**
	 * Collapsible element
	 */
	private _collapsibleEl?: HTMLDivElement;

	/**
	 * Slot element
	 */
	private _detailsSlotEl?: HTMLSlotElement;

	/**
	 * Button button element
	 */
	private _buttonEl?: HTMLButtonElement;


	/* #region Properties*/

	/**
	 * The aria-level of the accordion item, defaults to to 2
	 */
	@property({type : Number})
	public level?: number = 2;

	/**
	 * Open property deals with the internal open/close state.
	 * Mirrors the open attribute on the root element
	 */
	private _open: boolean = false;
	@property({
		type: Boolean,
		reflect: true, // reflect attribute on parent element when internal state updates
	})
	public get open(): boolean {
		return this._open;
	}

	public set open(isOpen: boolean) {
		const oldVal = this.open;
		this._open = isOpen;
		this.requestUpdate('open', oldVal);
	}

	/**
	 * Disabled property
	 * Mirrors the open attribute on the root element
	 */
	private _disabled: boolean = false;
	@property({
		type: Boolean,
		reflect: true, // reflect attribute on parent element when internal state updates
	})
	public get disabled(): boolean {
		return this._disabled;
	}

	public set disabled(isOpen: boolean) {
		const oldVal = this.disabled;
		this._disabled = isOpen;
		this.requestUpdate('disabled', oldVal);
	}

	/**
	 * The styles for the expand collapse
	 * @remarks
	 * If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
	 */
	public static get styles(): CSSResultArray {
		return [variables, layout, getShadowStylesFor('RuiExpandCollapse')] as CSSResultArray;
	}

	/* #endregion */

	/* #region Methods */

	/**
	 * Specify render root
	 */
	// protected createRenderRoot() {
	// 	return this.attachShadow({mode: 'open', delegatesFocus: true});
	// }

	/**
	 * Handler for a click of the summary content
	 */
	private _handleClick(): void {
		this.open = !this.open;
		this.dispatchEvent(
			new CustomEvent(this.open ? 'opened' : 'closed', {
				bubbles: true,
				composed: true
			} as CustomEventInit)
		);
	}

	/**
	 * Once the collapse transition is complete we set the content to hidden for AX
	 * reasons
	 */
	private _collapseTransitionEndHandler = (): void => {
		if (this._collapsibleEl) {
			this._collapsibleEl.removeEventListener('transitionend', this._collapseTransitionEndHandler);
			this._collapsibleEl.hidden = true;
		}
	}

	/**
	 * Once the expand transition is complete, we no longer need to use an inline style to animate
	 * the height
	 */
	private _expandTransitionEndHandler = (): void => {
		if (this._collapsibleEl) {
			this._collapsibleEl.style.height = '';
			this._collapsibleEl.removeEventListener('transitionend', this._expandTransitionEndHandler);
		}
	}

	/**
	 * Sets height to 0 trigger collapse
	 * transition animation
	 */
	private _triggerCollapseAnimation(): void {
		// add back height style and then remove on next frame to trigger animation
		requestAnimationFrame((): void => {
			if (this._collapsibleEl) {
				// remove expand transition listener if it has not already ticked over
				this._collapsibleEl.removeEventListener('transitionend', this._expandTransitionEndHandler);

				const sectionHeight = this._collapsibleEl.scrollHeight;
				this._collapsibleEl.style.height = `${sectionHeight}px`;
				this._collapsibleEl.classList.add('hide-content');
				requestAnimationFrame((): void => {
					if (this._collapsibleEl) {
						this._collapsibleEl.style.height = '0px';
						this._collapsibleEl.addEventListener('transitionend', this._collapseTransitionEndHandler);
					}
				})
			}
		})
	}

	/**
	 * Sets element height to transition to,
	 * once element height is reached it unsets height
	 * style
	 */
	private _triggerExpandAnimation(): void {
		if (this._collapsibleEl) {
			// remove collapse transition listener if it has not already ticked over
			this._collapsibleEl.removeEventListener('transitionend', this._collapseTransitionEndHandler);

			this._collapsibleEl.hidden = false;
			const sectionHeight = this._collapsibleEl.scrollHeight;
			this._collapsibleEl.style.height = `${sectionHeight}px`;
			this._collapsibleEl.classList.remove('hide-content');
			this._collapsibleEl.addEventListener('transitionend', this._expandTransitionEndHandler);
		}
	}

	/**
	 * Initialises the expand collapse logic and styling,
	 * once complete makes the expand collapse visible
	 */
	private _initialiseExpandCollapse(): void {
		if (this.shadowRoot) {
			this._collapsibleEl = this.shadowRoot.querySelector('.details-container') as HTMLDivElement || undefined;

			if (this._collapsibleEl) {

				// need to set height initially if closed without triggering animation
				if (!this.open) {
					this._collapsibleEl.style.height = '0px';
					this._collapsibleEl.hidden = true;
					this._collapsibleEl.classList.add('hide-content');
				}

				const expandCollapse: HTMLElement | null = this.shadowRoot.querySelector('.expand-collapse');
				if (expandCollapse) {
					expandCollapse.style.opacity = '1';
				}
			}
		}
	}

	/**
	 * After initial render initialise expand collapse logic. Because
	 * we are animating slotted content, we have to wait for the
	 * slot to be mounted
	 */
	public firstUpdated(): void {
		if (this.shadowRoot) {
			this._buttonEl = this.shadowRoot.querySelector('button') || undefined;
			this._detailsSlotEl = this.shadowRoot.querySelector('#details-slot') as HTMLSlotElement || undefined;

			if (this._detailsSlotEl) {
				// when the slotted content changes we initialise expand collapse
				// we need to wait for this because the animation of height calc
				// will only work once the slot and it's content have mounted and rendered
				this._detailsSlotEl.addEventListener('slotchange', (): void => {
					this._initialiseExpandCollapse();
				});
			}
		}
	}

	/**
	 * Set focus to child button element
	 */
	public focus():void {
		!!this._buttonEl && this._buttonEl.focus();
	};

	/**
	 * Handle blur to child button element
	 */
	public blur():void {
		!!this._buttonEl && this._buttonEl.blur();
	};

	public updated(changedProperties: Map<string, RuiExpandCollapsePropertyType>): void {
		changedProperties.forEach((oldValue: RuiExpandCollapsePropertyType, propName: string): void => {
			// detect change in open prop and trigger animation as necessary
			if (propName === 'open' && this._collapsibleEl) {
				// transition from closed to open
				if (this.open && !oldValue) {
					this._triggerExpandAnimation();
				}

				// transition from open to closed
				if (!this.open && oldValue) {
					this._triggerCollapseAnimation();
				}
			}
		});
	}

	/**
	 * Render method
	 */
	public render(): TemplateResult {
		return html`
			<button
				id="expand-trigger"
				@click="${this._handleClick}"
				class="summary-container"
				aria-expanded="${this.open}"
				aria-controls="expandable-section"
				aria-disabled="${this.open && this.disabled}"
				role="tab"
			>
				<slot name="summary-content"></slot>
			</button>
			<div
				class="details-container"
				id="expandable-section"
				role="region"
				aria-labelledby="expand-trigger"
			>
				<slot id="details-slot" name="details-content"></slot>
			</div>
		`;
	}

	/* #endregion */
}

export default RuiExpandCollapse;
