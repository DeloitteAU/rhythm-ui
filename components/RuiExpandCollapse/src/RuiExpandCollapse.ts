/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import { variables, layout } from './RuiExpandCollapse.css'

/**
 * RuiStory
 */
export class RuiExpandCollapse extends LitElement {  
  /**
   * Controls whether the expand collapse is open initially
   */
  @property({type : Boolean })
  public initiallyOpen = false;

  @property({type : Boolean })
  public open = false;


  /*
  @property({type : Boolean })
  public get open(): boolean {
    return this._open;
  }

  public set open(isOpen: boolean) {
    let oldVal = this.open;
    this._open = isOpen;
    this.requestUpdate('open', oldVal);
  }

  */
  /**
   * Internal open state of component
   */
  //_open: boolean = false;

  /**
   * 
   * The styles for the expand collapse
   * @remarks
   * If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
   */
  public static get styles(): CSSResultArray {
    return [variables, layout];
  }

  /**
   * The html tag for the expand collapse
   */
  public static get tag(): string {
    return 'rui-expand-collapse';
  }

  /* #endregion */

  /* #region Methods */

  /**
   * Default handler for when the expand collapse is clicked
   */
  private handleClick() {
    this.open = !this.open;
  }

  /**
   * We initialise open to be the value given by initially open attribute
   */
  public firstUpdated() {
    this.open = this.initiallyOpen;
  }

  /**
   * Render method
   */
  public render(): TemplateResult {
    return html`
      <section class=${`expand-collapse${this.open ?  ' is-open' : '' }`}>
        <div @click="${this.handleClick}" class="summary">
          <slot name="summary-content"></slot>
          <div class="icon-container">
            <slot name="icon"></slot>
          </div>
        </div>
        <div class="details">
          ${
            this.open
              ? html`<slot name="details-content"></slot>`
              : ''
          }
        </div>
      </section>
      
    `;
  }

  /* #endregion */

}
