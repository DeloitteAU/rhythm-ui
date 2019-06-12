/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html, CSSResultArray, TemplateResult} from 'lit-element';
import { variables, layout } from './RuiSkipLinks.css'

/**
 * RuiStory
 */
export class RuiSkipLinks extends LitElement {

  /* #region Properties */

  /**
   * 
   * The styles for skip links
   * @remarks
   * If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
   */
  public static get styles(): CSSResultArray {
    return [variables, layout];
  }

  /**
   * The html tag for the skip links component
   */
  public static get tag(): string {
    return 'rui-skip-links';
  }

  /* #endregion */

  /* #region Methods */

  /**
   * Render method
   */
  public render(): TemplateResult {

    return html`
      <ul class="skip-links" tabindex="-1">
        <li><a href="#nav">Jump to main navigation</a></li>
        <li><a href="#main">Jump to main content</a></li>
      </ul>
    `;
  }

  /* #endregion */

}
