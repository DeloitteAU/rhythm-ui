import { LitElement, html, customElement, property} from 'lit-element';
import styles from './RuiButton.styles';

/**
 * RuiButton
 * @slot start - Content is placed at the begining in LTR or at the end in RTL
 */
@customElement('rui-button')
export class RuiButton extends LitElement {

  /**
   * The type of the button.
   */
  @property() type: 'submit' | 'reset' | 'button' = 'button';

  @property({type : String}) color?: 'primary' | 'secondary' | 'tertiary' | 'inverted';

  @property({type : Boolean}) disabled? = false;

  @property({type : String}) href?: string;

  @property({type : String}) size?: string;

  static get styles() {
    return styles;
  }

  public render() {

    if (this.href === undefined) {
      return html`
      <button
        class="btn"
        type=${this.type}
        ?disabled=${this.disabled}
      >
        <slot></slot>
      </button>
    `;
    }

    return html`
      <a
        sclass="btn"
        type=${this.type}
        href=${this.href}
      >
        <slot></slot>
      </a>
    `;
  }
}
