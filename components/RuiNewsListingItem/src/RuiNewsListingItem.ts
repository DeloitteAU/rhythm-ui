import { LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import variables from './css.variables';
import layout from './css.layout';

/**
 * RuiNewsListingItem
 */
export class RuiNewsListingItem extends LitElement {

  /* #region Properties */

  /**
   * The domain of the news item
   */
  @property({type : String})
  public domain = '';

  /**
   * The title of the news item
   */
  @property({type : String})
  public title = '';


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
    return 'rui-news-listing-item';
  }

  /* #endregion */

  /* #region Methods */

  /**
   * Render method
   * @slot This is a slot test
   */
  public render(): TemplateResult {

    return html`
      <article class="news-listing-item">
        <div class="img-container">
          <slot name="img"></slot>
        </div>
        <div class="content-container">
          <p class="domain">${this.domain}</p>
          <p class="title">${this.title}</p>
          <slot name="content"></slot>
        </div>
      </article>
    `;
  }

  /* #endregion */

}
