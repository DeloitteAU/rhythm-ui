import {LitElement, html, CSSResultArray} from 'lit-element';

export interface ILitElementConstructor {
	new(): LitElement;
	// styles(): CSSResultArray;
	// load(): Promise<typeof LitElement>;
}

function _updateLitElement(element: LazyElement, klass: ILitElementConstructor) {
	//Object.setPrototypeOf(element, klass.prototype);
	//new klass();
	Object.setPrototypeOf(element, klass.prototype);
	//debugger;
	//LazyElement._upgradingElement = undefined;
	element.requestUpdate();
	if (element.isConnected) {
		element.connectedCallback();
	}
}

export class LazyElement extends LitElement {

	public static load: () => Promise<typeof LitElement>;

	// static _resolveLoaded: () => void;
	// static _rejectLoaded: (e: Error) => void;
	// static _loadedPromise?: Promise<void>;

	private static implClass?: typeof LitElement;

	// static loaded() {
	// 	if (!this.hasOwnProperty('_loadedPromise')) {
	// 		this._loadedPromise = new Promise((resolve, reject) => {
	// 			this._resolveLoaded = resolve;
	// 			this._rejectLoaded = reject;
	// 		});
	// 	}
	// 	return this._loadedPromise;
	// }

	//private static _upgradingElement: any;

	public constructor() {
		// if (LazyElement._upgradingElement !== undefined) {
		// 	return LazyElement._upgradingElement;
		// }
		super();
		const ctor = this.constructor as typeof LazyElement;
		if (ctor.hasOwnProperty('implClass')) {
			// Implementation already loaded, do the upgrade immediately
			_updateLitElement(this, ctor.implClass);
		} else {
			// Implementation not loaded
			if (typeof ctor.load !== 'function') {
				throw new Error('A LazyElement must have a static `load` method');
			}
			(async () => {
				ctor.implClass = await ctor.load();
				_updateLitElement(this, ctor.implClass);
			})();
		}
	}

	public render() {
		return html``;
	}

}

export default LazyElement;
