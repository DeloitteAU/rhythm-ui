/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

/**
* Register the Web Component with customElements
* @param tag - The HTML tag to use
*/
export const registerHeader = async (tag: string = 'rui-header'): Promise<boolean> => {
	if (typeof customElements !== 'undefined' && !customElements.get(tag)) {
		// Register the new element with the DOM
		const m = await import('./RuiHeader');
		customElements.define(tag, m.RuiHeader);
		return true;
	}
	return false;
};

export const registerHeaderDesktop = async (tag: string = 'rui-header-desktop'): Promise<boolean> => {
	if (typeof customElements !== 'undefined' && !customElements.get(tag)) {
		// Register the new element with the DOM
		const m = await import('./RuiHeaderDesktop');
		customElements.define(tag, m.RuiHeaderDesktop);
		return true;
	}
	return false;
};

export const registerHeaderMobile = async (tag: string = 'rui-header-mobile'): Promise<boolean> => {
	if (typeof customElements !== 'undefined' && !customElements.get(tag)) {
		// Register the new element with the DOM
		const m = await import('./RuiHeaderMobile');
		customElements.define(tag, m.RuiHeaderMobile);
		return true;
	}
	return false;
};

export default {
	registerHeader,
	registerHeaderDesktop,
	registerHeaderMobile,
};

if (process.env.RUI_NO_DEFAULT_REGISTER !== 'true') {
	registerHeader();
	registerHeaderDesktop();
	registerHeaderMobile();
}
