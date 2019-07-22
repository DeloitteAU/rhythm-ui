/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import {LitElement, html, property, CSSResultArray, TemplateResult} from 'lit-element';
import {variables, layout} from './RuiBreadcrumbs.css'

/**
 * ICrumbConfig describes the structure of the 
 * objects expected within the crumbs JSON array
 */
interface ICrumbConfig {
	title: string,
	url: string
}

/**
 * RuiBreadcrumbs provide a way for users to see where they are in the 
 * websites IA, as well as providing an easy way to navigate to previously 
 * visited areas
 */
export class RuiBreadcrumbs extends LitElement {

	/**
	 * A reference to the slotted seperator component (if provided)
	 */
	private _seperatorEl: HTMLSlotElement | null = null;

	/**
	 * An array of the custom slotted crumb elements (if provided)
	 */
	private _customCrumbs: HTMLElement[] = [];

	private _maxCrumbs: number = 7;

	private _crumbs: ICrumbConfig[] = [];

	/**
	 * The array of breadcrumbs
	 */
	@property({type : Array})
	public get crumbs(): ICrumbConfig[] {
		return this._crumbs;
	}

	public set crumbs(crumbs: ICrumbConfig[]) {
		const oldVal = this.crumbs;
		this._crumbs = crumbs;
		this.requestUpdate('crumbs', oldVal);
	}

	/**
	 * The maximum number of breadcrumbs to display 
	 * before truncating
	 */
	@property({
		type : Number,
		attribute: 'max-crumbs',
	})
	public get maxCrumbs(): number {
		return this._maxCrumbs;
	}

	public set maxCrumbs(maxCrumbs: number) {
		const oldVal = this.maxCrumbs;
		this._maxCrumbs = maxCrumbs;
		this.requestUpdate('maxCrumbs', oldVal);
	}

	/**
    * The styles for breadcrumbs
    * @remarks
    * If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
    */
    public static get styles(): CSSResultArray {
        return [variables, layout];
	}

	/**
	 * Once the component is connected to the dom, we can begin 
	 * the process of setting up the necessary variables/slots 
	 * to accomodate custom user crumbs or seperators
	 */
	public connectedCallback(): void {
		super.connectedCallback();

		/**
		 * If custom crumbs are provided, we keep a reference to them in an 
		 * array for easy access later, as well as adding the appropriate 
		 * aria attribute if it has not been provided.
		 * 
		 * We also modify the slot value for each so that they can be slotted 
		 * easily later.
		 */
		this._customCrumbs = [...this.querySelectorAll('[slot=crumb]')] as HTMLElement[];
		if (this._customCrumbs.length > 0) {
			this._customCrumbs.forEach((crumbEl, i):void => {
				if (i === this._customCrumbs.length - 1) {
					if (!crumbEl.hasAttribute('aria-current')) {
						crumbEl.setAttribute('aria-current','page');
					}
				} 
				crumbEl.slot = `crumb-${i + 1}`
			})
		}
		
		/**
		 * If the user has provided a custom seperator component, then we check whether the 
		 * number of crumbs is greater than 2. For case where crumbs is ≥ 3, 2 or more seperators
		 * are required so we need to duplicate the provided seperator. 
		 * 
		 * The pattern followed is that the first seperator element stays as slot = seperator,
		 * but all following duplicates are seperator-dupe-<copy number>
		 */
		this._seperatorEl = this.querySelector('[slot=seperator]');
		if (this._seperatorEl) {
			if ( (this.crumbs && this.crumbs.length > 2) || this._customCrumbs.length > 2) {
				const length = this.crumbs ? this.crumbs.length : this._customCrumbs.length
				
				// the number of seperators shown is always the number of breadcrumbs - 1
				const numSeperators = length - 1;

				for (let i = 1; i < numSeperators; i++) {
					const el = this._seperatorEl.cloneNode(true) as HTMLElement;
					el.slot = `seperator-dupe-${i}`;
					this.appendChild(el);
				}
			}
		}
	}

    /* #endregion */

	/* #region Methods */

	/**
	 * Event fired when one of the breadcrumb items has been clicked. Note that 
	 * this is only generated if no href value has been provided and does not 
	 * apply to user provided crumbs
	 */
	private _generateItemClickEvent(crumbIndex: number): CustomEvent {
		return new CustomEvent('rui-breadcrumbs-item-click', {
			bubbles: true,
			detail: {
				crumbIndex,
			}
		});
	}

	/**
	 * Event fired when one of the items in the truncated breadcrumb select
	 * is selected
	 */
	private _generateTruncatedSelectEvent(crumbIndex: number): CustomEvent {
		return new CustomEvent('rui-breadcrumbs-item-select', {
			bubbles: true,
			detail: {
				crumbIndex,
			}
		});
	}

	/**
	 * When a user selects one of the truncated breadcrumb options we
	 * either navigate to the href/url if available - otherwise 
	 * we dispatch an event for the user to use as needed
	 * 
	 * @param e select input change event
	 */
	private _handleTruncatedSelectChange(e): void {
		const indexSelected = e.target.value;
		const evt = this._generateTruncatedSelectEvent(indexSelected);
		

		if (this.crumbs && this.crumbs.length > 0) {
			const crumb = this.crumbs[indexSelected];

			if (crumb.url) {
				window.location.href = crumb.url;
			} else {
				this.dispatchEvent(evt);
			}

		} else {
			const crumb = this._customCrumbs[indexSelected] as HTMLElement;
			if (crumb.hasAttribute('href')) {
				window.location.href = crumb.getAttribute('href') || '#';
			} else {
				this.dispatchEvent(evt);
			}
		}
	}

	/**
	 * Renders either the user provided seperator via a seperator slot with name allowing for the 
	 * correct element or dupe element to be rendered. If no user provided seperator element, it
	 * renders default seperator span
	 * 
	 * @param index the index of the crumb array we are up to in render loop
	 */
	private _renderSeperator(index: number): TemplateResult {
		let seperatorEl = (index === 0) ? html`` : html`<span aria-hidden="true" class="seperator"></span>`;
			
		if (index > 0 && this._seperatorEl) {
			const seperatorSlotName = index === 1 ? 'seperator' : `seperator-dupe-${index - 1}`
			seperatorEl = html`<slot name=${seperatorSlotName}></slot>`;
		}

		return seperatorEl;
	}

	/**
	 * Renders an individual breadcrumb, if the user has provided custom
	 * crumbs then it renders a slot with the correct slot name.
	 * 
	 * If using crumbs config json, it renders a non-interactable anchor for 
	 * the active crumb, renders a standard link if a url is provided, if 
	 * no url is provided we render an anchor tag with an onclick that dispatches
	 * an event
	 * @param index the index of the crumb array we are up to in render loop
	 * @param isActiveCrumb whether or not the current crumb is the active page
	 */
	private _renderCrumb(index: number, isActiveCrumb: boolean): TemplateResult {
		let crumbEl = html``;
		if (this.crumbs && this.crumbs.length > 0) {
			const crumb = this.crumbs[index]
			if (isActiveCrumb) {
				crumbEl = html`<a aria-current="page">${crumb.title}</a>`;
			} else if (crumb.url) {
				crumbEl = html`<a href=${crumb.url}>${crumb.title}</a>`;
			} else {
				const evt = this._generateItemClickEvent(index);
				const onClick = ():void => { this.dispatchEvent(evt); }
				crumbEl = html`<a @click=${onClick}>${crumb.title}</a>`;
			}
		} else {
			crumbEl = html`<slot name=${`crumb-${index + 1}`}></slot>`
		}

		return crumbEl;
	}

	/**
	 * Renders the select input for truncated breadcrumb selection
	 * 
	 * @param startIndex indicates what index of the breadcrumb the
	 * render loop was up to before rendering the truncated UI
	 *
	 * @param pageTitles array of the different strings to display as the select option labels
	 */
	public _renderTruncatedCrumbSelect(startIndex: number, pageTitles: string[]): TemplateResult {
		return html`
			<select aria-label="Select breadcrumb to navigate to" class="selector" @change=${this._handleTruncatedSelectChange}>
				<option value="" disabled selected>...</option>
				${pageTitles.map((title, i): TemplateResult => html`<option value=${startIndex + i}>${title}</option>`)}
			</select>
		`;
	}

	/**
	 * Contains the core render logic for looping through and rendering the array of 
	 * list elements representing the breadcrumbs. Logic is slightly different depending
	 * on if the user is using custom crumbs, or has provided any truncation limits via
	 * max-crumbs attribute.
	 */
	private _renderBreadCrumbs(): TemplateResult[] {
		
		// the array of list elements we will eventually return
		const crumbEls: TemplateResult[] = [];

		// whether or not the user used the JSON crumbs config or has provided custom crumbs
		const standardCrumbs = !!this.crumbs && this.crumbs.length > 0;
		
		// can create new always defined variable once we know we are using standard crumbs
		let standardCrumbArr: ICrumbConfig[] = []
		if (standardCrumbs) {
			standardCrumbArr = this.crumbs as ICrumbConfig[];
		}

		// find out the length of JSON crumbs array or custom crumbs array
		const numCrumbs = standardCrumbs ? standardCrumbArr.length : this._customCrumbs.length;

		// how many times to go through the initial loop
		let loopCount = numCrumbs;

		// indicates whether to render truncate ellipses UI
		let truncate = false;

		/**
		 * If the number of crumbs has exceeded the max crumbs defined by the 
		 * user then we alter the loop count to only render maxcrumbs - 1 elements
		 * then the rest of the rendering is controlled by the if (truncate) block
		 */
		if (this.maxCrumbs && (numCrumbs > this.maxCrumbs)) {
			loopCount = this.maxCrumbs - 1;
			truncate = true;
		}

		/**
		 * Loop through array of crumbs, create html for each and then push
		 * into crumbEls array. If no truncation is needed, this will render 
		 * all the crumb elements, if truncation is neeeded then this will render 
		 * some of the elements and delegate the rest to the following block.
		 */
		for(let i = 0; i < loopCount; i++) {
			const isActiveCrumb = i === (numCrumbs - 1)
			
			const seperatorEl = this._renderSeperator(i);
			const crumbEl = this._renderCrumb(i, isActiveCrumb)

			let listElClasses = 'breadcrumb__item';
			if (isActiveCrumb) {
				listElClasses += ' current'
			}

			const listEl = html`<li class=${listElClasses}>${seperatorEl}${crumbEl}</li>`
			crumbEls.push(listEl);
		}

		/**
		 * If truncation is required, grab the subset of breadcrumbs that will not display 
		 * and map them to their titles/text content for display in a select input. Then 
		 * render select input via _renderTruncatedCrumbSelect function.
		 * 
		 * Finally this will bring us to n -1 breadcrumbs rendered, so we still need
		 * to render the final crumb
		 */
		if (truncate) {
			let pageTitles: string[] = [];
			if (standardCrumbs) {
				pageTitles = standardCrumbArr.slice(loopCount, -1).map((crumb): string => crumb.title  || '')
			} else {
				pageTitles = this._customCrumbs.slice(loopCount, -1).map((crumb): string => {
					let title = crumb.textContent || ''
					if (crumb.dataset.truncatedLabel) {
						title = crumb.dataset.truncatedLabel;
					}

					return title;
				})
			}

			const truncatedCrumbSelect = this._renderTruncatedCrumbSelect(loopCount, pageTitles);
			let seperatorEl = this._renderSeperator(loopCount + 1);
			
			let listEl = html`<li class="breadcrumb__item">${seperatorEl}${truncatedCrumbSelect}</li>`;
			crumbEls.push(listEl);

			// if we truncated then we also have to render the final active crumb
			seperatorEl = this._renderSeperator(numCrumbs - 1);
			const crumbEl = this._renderCrumb(numCrumbs - 1, true)
			listEl = html`<li class="breadcrumb__item current">${seperatorEl}${crumbEl}</li>`;
			crumbEls.push(listEl);
		}
  
		return crumbEls;
	}

	
	/**
	 * Renders the breadcrumbs nav
	 */
    public render(): TemplateResult {
		return html`
			<nav aria-label="Breadcrumb" class="breadcrumbs">
				<ul>
					${this._renderBreadCrumbs()}
				</ul>
			</nav>
		`
    }

}

export default RuiBreadcrumbs;
