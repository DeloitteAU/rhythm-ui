import { LitElement, html, property} from 'lit-element';
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
  @property() behaviour: 'submit' | 'reset' | 'button' | 'anchor' = 'button';

  /**
   * The theme type of the button
   */
  @property({type : String}) type?: 'default' | 'primary' | 'secondary' | 'tertiary' = 'primary';

    /**
   * The variant style of the button
   */
  @property({type : String}) variant?: 'outline' | 'ghost' | 'fill' = 'fill';

  /**
   * Set to true if the button should be disabled
   */
  @property({type : Boolean}) disabled: boolean = false;

  /**
   * Href location for the button
   * @remarks
   * This forces the element to render using an anchor tag in the shadow dom
   */
  @property({type : String}) href? = null;

  /**
   * The size of the button
   */
  @property({type : String}) size?: 'normal' | 'small' | 'large';

  /**
   * 
   * The styles for button
   * @remarks
   * If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
   */
  static get styles() {
    return [variables, layout];
  }

  /**
   * The html tag for the button
   */
  static get tag() {
    return 'rui-button';
  }

  /* #endregion */

  /* #region Methods */

  /**
   * Render method
   * @slot This is a slot test
   */
  public render() {

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
