/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {getShadowStylesFor} from '@rhythm-ui/styles';
import {variables, layout} from './RuiLayout.css';

/**
 * RuiLayout
 */
export class RuiLayout extends LitElement {

  /* #region Properties */

  /**
   * The layout type
   */
  @property({type : String})
  public type?: 'monet' | 'vangogh' | 'picasso' | 'morisot' | 'rembrandt' | 'davinci' = 'monet';

  /**
   *
   * The styles for layout
   */
  public static get styles(): CSSResultArray {
    return [variables, layout, getShadowStylesFor('RuiLayout')];
  }

  /* #endregion */

  /* #region Methods */

  /**
   * Render method
   * @slot Valid children are <header />, <footer />, <nav />, <aside /> & <main />
   * @remark Order of children does not matter
   */
  public render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }

  /* #endregion */

}

export default RuiLayout;
