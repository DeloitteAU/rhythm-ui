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
  /* #region Properties */

  /**
   * The underlying type of the button.
   */
  @property({type : Boolean})
  public initallyOpen = false;


  /**
   * The underlying type of the button.
   */
  @property({type : Boolean})
  private _open = this.initallyOpen;

  /**
   * 
   */
  protected get open(): boolean {
    return this._open;
  }

  protected set open(isOpen: boolean) {
    let oldVal = this._open;
    this._open = isOpen;
    this.requestUpdate('open', oldVal);
  }

  /**
   * 
   * The styles for button
   * @remarks
   * If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
   */
  public static get styles(): CSSResultArray {
    return [variables, layout];
  }

  /**
   * The html tag for the button
   */
  public static get tag(): string {
    return 'rui-expand-collapse';
  }

  /* #endregion */

  /* #region Methods */

  private handleClick() {
    this.open = !this.open;
  }

  /**
   * Render method
   * @slot This is a slot test
   */
  public render(): TemplateResult {
    console.log('-----')
    console.log(this.open)
    console.log(this.initallyOpen)
    console.log(this._open)
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
