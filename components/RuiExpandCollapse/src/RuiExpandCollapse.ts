/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {generateUUID} from '@rhythm-ui/utils';
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
  private _uuid: string = generateUUID();

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
   * Once the collapse transition is complete we set the content to hidden for AX
   * reasons
   */
  private _collapseTransitionEndHandler = () => {
    if (this._collapseableEl) {
      this._collapseableEl.removeEventListener('transitionend', this._collapseTransitionEndHandler);
      this._collapseableEl.hidden = true;
    }
  }

  /**
   * Once the expand transition is complete, we no longer need to use an inline style to animate
   * the height
   */
  private _expandTransitionEndHandler = () => {
    if (this._collapseableEl) {
      this._collapseableEl.style.height = '';
      this._collapseableEl.removeEventListener('transitionend', this._expandTransitionEndHandler);
    }
  }

  /**
   * Sets height to 0 trigger collapse
   * transition animation
   */
  private _triggerCollapseAnimation(): void {
    // add back height style and then remove on next frame to trigger animation
    requestAnimationFrame((): void => {
      if (this._collapseableEl) {
        // remove expand transition listener if it has not already ticked over
        this._collapseableEl.removeEventListener('transitionend', this._expandTransitionEndHandler);

        const sectionHeight = this._collapseableEl.scrollHeight;
        this._collapseableEl.style.height = `${sectionHeight}px`;
        this._collapseableEl.classList.add('hide-content');
        requestAnimationFrame((): void => {
          if (this._collapseableEl) {
            this._collapseableEl.style.height = '0px';
            this._collapseableEl.addEventListener('transitionend', this._collapseTransitionEndHandler);
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
      // remove collapse transition listener if it has not already ticked over
      this._collapseableEl.removeEventListener('transitionend', this._collapseTransitionEndHandler);

      this._collapseableEl.hidden = false;
      const sectionHeight = this._collapseableEl.scrollHeight;
      this._collapseableEl.style.height = `${sectionHeight}px`;
      this._collapseableEl.classList.remove('hide-content');  
      this._collapseableEl.addEventListener('transitionend', this._expandTransitionEndHandler);
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
