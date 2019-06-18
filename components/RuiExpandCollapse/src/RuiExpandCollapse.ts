/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import { variables, layout } from './RuiExpandCollapse.css'

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
    let oldVal = this.open;
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

  /**
   * 
   * The styles for the expand collapse
   * @remarks
   * If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
   */
  public static get styles(): CSSResultArray {
    return [variables, layout];
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
   * Sets height to 0 trigger collapse
   * transition animation
   */
  private _triggerCollapseAnimation(): void {
    // add back height style and then remove on next frame to trigger animation
    requestAnimationFrame((): void => {
      if (this._collapseableEl) {
        var sectionHeight = this._collapseableEl.scrollHeight;
        this._collapseableEl.style.height = sectionHeight + 'px';
        this._collapseableEl.classList.add('hide-content');
        requestAnimationFrame((): void => {
          if (this._collapseableEl) {
            this._collapseableEl.style.height = 0 + 'px';
            const transitionEndHandler = (): void => {
              if (this._collapseableEl) {
                this._collapseableEl.removeEventListener('transitionend', transitionEndHandler);
                this._collapseableEl.hidden = true;
              }
            }
        
            this._collapseableEl.addEventListener('transitionend', transitionEndHandler);
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
    if (this._collapseableEl) {
      this._collapseableEl.hidden = false;
      var sectionHeight = this._collapseableEl.scrollHeight;
      this._collapseableEl.style.height = sectionHeight + 'px';
      this._collapseableEl.classList.remove('hide-content');
  
      const transitionEndHandler = (): void => {
        if (this._collapseableEl) {
          this._collapseableEl.style.height = '';
          
          this._collapseableEl.removeEventListener('transitionend', transitionEndHandler);
        }
      }
  
      this._collapseableEl.addEventListener('transitionend', transitionEndHandler);
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
          this._collapseableEl.classList.add('hide-content');
        }
        
        let expandCollapse: HTMLElement | null = this.shadowRoot.querySelector('.expand-collapse');
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
        // when the slotted content changes we initialise expand collapse
        // we need to wait for this because the animation of heigh calc 
        // will only work once the slot and it's content have mounted and rendered
        this._detailsSlotEl.addEventListener('slotchange', (): void => {
          this._initialiseExpandCollapse();
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
      <section class=${`expand-collapse${this.open ? ' is-open' : ''}`}>
        <button id="expand-trigger" @click="${this._handleClick}" class="summary-container" aria-expanded=${`${this.open ? 'true': 'false'}`} aria-controls="expandable-section">
          <slot name="summary-content"></slot>
          <span class="icon-container"></span>
        </button>
        <div class="details-container" id="expandable-section" role="region" aria-labelledby="expand-trigger">
          <slot id="details-slot" name="details-content"></slot>
        </div>
      </section>
    `;
  }

  /* #endregion */
}
