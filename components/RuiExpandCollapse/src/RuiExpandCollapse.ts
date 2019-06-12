/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import { variables, layout } from './RuiExpandCollapse.css'

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
    converter: (value): boolean => value === 'true',
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
   * the component
   */
  @property()
  public onExpandCollapse = ():void => {
    this.open = !this.open;
  };

  /**
   * Internal open state of component
   */
  private _open: boolean = false;

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
   * Render method
   */  
  public render(): TemplateResult {
    return html`
      <section class=${`expand-collapse${this.open ?  ' is-open' : '' }`}>
        <div @click="${this.onExpandCollapse}" class="summary">
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
