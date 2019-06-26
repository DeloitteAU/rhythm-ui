/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {variables, layout} from './RuiExpandCollapse.css'

// Update to include any possible type a value
// can take, currenlty only have boolean open property
type RuiExpandCollapsePropertyType = boolean;

/**
 * RuiExpandCollapse
 */
export class RuiExpandCollapse extends LitElement { 
  /**
   * Open property deals with the internal open/close 
   * state. Mirrors the open attribute on the root element
   */
  @property({
    type : Boolean,
    reflect: true, // reflect attribute on parent element when internal state updates
    converter: (value): boolean => value !== undefined, // check presence of open attribute
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
   * onExpandCollapse is the handler function that is called
   * when the user triggers an expand/collapse. This
   * function should be overriden when trying to control
   * the component externally
   */
  @property()
  public onExpandCollapse = ():void => {
    this.open = !this.open;
  };

  /**
   * Internal open state of component
   */
  private _open: boolean = false;
  private _collapseableEl: HTMLDivElement | null = null;
  private _detailsSlotEl: HTMLSlotElement | null = null;
  private _uuid: string = this._generateUUIDv4();

  /**
   * 
   * The styles for the expand collapse
   * @remarks
   * If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
   */
  public static get styles(): CSSResultArray {
    return [variables, layout];
  }

  // TODO: Move this to a core lib
  private _generateUUIDv4(): string {
    return (`${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`)
      .replace(/[018]/g, (c: string): string => {
        const numC = parseInt(c, 10);
        return (numC ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> numC / 4).toString(); // eslint-disable-line no-bitwise
      });
  }

  /* #endregion */

  /* #region Methods */

  /**
   * Handler for a click of the summary content
   */
  private _handleClick(): void {
    this.onExpandCollapse();
  }

  /**
   * Sets height to 0 and hides content
   */
  public handleCollapse(): void {
    if (this._collapseableEl) {
      this._collapseableEl.style.height = '0px';
      this._collapseableEl.hidden = true;
    }
  }

  /**
   * Unhides the content and removes the inline height styles
   */
  public handleExpand(): void {
    if (this._collapseableEl) {
      this._collapseableEl.hidden = false;
      this._collapseableEl.style.height = '';
    }
  }

  /**
   * Initialises the expand collapse logic and styling,
   * once complete makes the expand collapse visible
   */
  private _initialiseExpandCollapse(): void {
    if (this.shadowRoot) {
      this._collapseableEl = this.shadowRoot.querySelector('.details-container');

      if (this._collapseableEl) {
        
        // need to set height initially if closed without triggering animation
        if (!this.open) {
          this._collapseableEl.style.height = '0px';
          this._collapseableEl.hidden = true;
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
      this._detailsSlotEl = this.shadowRoot.querySelector('#details-slot');

      if (this._detailsSlotEl) {
        /**
         * Wait for element to render and all slotted content to render before
         * dispatching mounted event. The mounted event serves as a hook for 
         * any external logic that needs to be implemented once element is ready such
         * as custom animations. 
         */
        this._detailsSlotEl.addEventListener('slotchange', (): void => {
          this._initialiseExpandCollapse();
          this.dispatchEvent(new CustomEvent(
            "rui-expand-collapse-mounted", 
            {
              bubbles: true,
              cancelable: true
            })
          )
         });
      }
    }
  }

  public updated(changedProperties: Map<string, RuiExpandCollapsePropertyType>): void {
    changedProperties.forEach((oldValue: RuiExpandCollapsePropertyType, propName: string): void => {
      // detect change in open prop and trigger animation as necessary
      if (propName === 'open' && this._collapseableEl) {

        // transition from closed to open
        if (this.open && !oldValue) {
          this.handleExpand();
        }
         
        // transition from open to closed
        if (!this.open && oldValue) {
          this.handleCollapse();
        }

        /**
         * Exposing event hook for letting components know of change in internal 
         * state.
         */
        this.dispatchEvent(new CustomEvent(
          "rui-expand-collapse", 
          {
            detail: {
              open: this.open
            },
            bubbles: true,
            cancelable: true
          })
        )
      }
    });
  }

  /**
   * Render method
   */  
  public render(): TemplateResult {
    const expandTriggerID = `expand-trigger__${this._uuid}`;
    const expandableSectionID = `expandable-section__${this._uuid}`;

    return html`
      <section class=${`expand-collapse${this.open ? ' is-open' : ''}`}>
        <button id=${expandTriggerID} @click="${this._handleClick}" class="summary-container" aria-expanded=${`${this.open ? 'true': 'false'}`} aria-controls=${expandableSectionID}>
          <slot name="summary-content"></slot>
          <span class="icon-container"></span>
        </button>
        <div class="details-container" id=${expandableSectionID} role="region" aria-labelledby=${expandTriggerID}>
          <slot id="details-slot" name="details-content"></slot>
        </div>
      </section>
    `;
  }

  /* #endregion */
}

export default RuiExpandCollapse;
