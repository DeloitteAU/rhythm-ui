import { LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import variables from './css.variables';
import layout from './css.layout';

/**
 * RuiButton
 */
export class RuiButton extends LitElement {

  /* #region Properties */

  /**
   * The underlying type of the button.
   */
  @property()
  public behaviour: 'submit' | 'reset' | 'button' | 'anchor' = 'button';

  /**
   * The theme type of the button
   */
  @property({type : String})
  public type?: 'default' | 'primary' | 'secondary' | 'tertiary' = 'primary';

    /**
   * The variant style of the button
   */
  @property({type : String})
  public variant?: 'outline' | 'ghost' | 'fill' = 'fill';

  /**
   * Set to true if the button should be disabled
   */
  @property({type : Boolean})
  public disabled: boolean = false;

  /**
   * Href location for the button
   * @remarks
   * This forces the element to render using an anchor tag in the shadow dom
   */
  @property({type : String})
  public href? = null;

  /**
   * The size of the button
   */
  @property({type : String})
  public size?: 'normal' | 'small' | 'large';

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
    return 'rui-button';
  }

  /* #endregion */

  /* #region Methods */

  /**
   * Render method
   * @slot This is a slot test
   */
  public render(): TemplateResult {

    // If href has not been defined use <button>
    if (!this.href && this.behaviour !== 'anchor') {
      return html`
        <button
          class="btn"
          type=${this.behaviour}
          disabled=${this.disabled}
        >
          <slot></slot>
        </button>
    `;
    }

    // Use <a>
    return html`
      <a
        class="btn"
        href=${this.href}
      >
        <slot></slot>
      </a>
    `;
  }

  /* #endregion */

}
