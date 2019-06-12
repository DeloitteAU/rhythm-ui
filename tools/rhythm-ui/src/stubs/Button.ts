import {LazyElement} from '../LazyElement';

const tag = 'rui-button';

export class RuiButtonStub extends LazyElement {
	public static async load() {
		return (await import('@rhythm-ui/button/lib/RuiButton')).RuiButton;
	}
}

customElements.define(tag, RuiButtonStub);
