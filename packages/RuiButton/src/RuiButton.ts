import { LitElement, html, customElement, property} from 'lit-element';
import styles, {variables} from './RuiButton.styles';

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
   * Optional href location for the button using an anchor tag
   */
  @property({type : String}) href?: string = undefined;

  /**
   * The size of the button
   */
  @property({type : String}) size?: 'normal' | 'small' | 'large';

  /**
   * Default styles for button
   */
  static get styles() {
    return [variables, styles];
  }

  /**
   * Default html tag for the button
   */
  static get tag() {
    return 'rui-button';
  }

  /* #endregion */

  /* #region Methods */

  /**
   * Render method
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
