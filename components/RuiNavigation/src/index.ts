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
export const register = async (): Promise<boolean> => {
	if (typeof customElements !== 'undefined') {
		// Register the new element with the DOM
		const {RuiMenubar} = await import('./RuiMenubar');
		const {RuiMenubarDropDownItem} = await import('./RuiMenubarDropDownItem');
		const {RuiMenubarItem} = await import('./RuiMenubarItem');
		!customElements.get(RuiMenubar.tag) && customElements.define(RuiMenubar.tag, RuiMenubar);
		!customElements.get(RuiMenubarDropDownItem.tag) && customElements.define(RuiMenubarDropDownItem.tag, RuiMenubarDropDownItem);
		!customElements.get(RuiMenubarItem.tag) && customElements.define(RuiMenubarItem.tag, RuiMenubarItem);
		return true;
	}
	return false;
};

export default {
	register,
};

if (process.env.RUI_NO_DEFAULT_REGISTER !== 'true') {
	register();
}
