import { LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { variables, layout } from './RuiGrid.css'

/**
 * RuiGrid
 */
export class RuiGrid extends LitElement {

  /* #region Properties */

  /**
   * The number of columns in the grid
   * @remark must be in range from 1 to 16
   */
  @property({type : Number})
  public columns?: number;

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
    return 'rui-grid';
  }

  /* #endregion */

  /* #region Methods */

  /**
   * Render method
   * @slot This is a slot test
   */
  public render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }

  /* #endregion */

}
