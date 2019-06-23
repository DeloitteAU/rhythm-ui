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
export const register = async (tag: string = 'rui-expand-collapse'): Promise<boolean> => {
	// Register the new element with the browser.
	if (typeof customElements !== 'undefined' && !customElements.get(tag)) {
		const m = await import('./RuiExpandCollapse');
		customElements.define(tag, m.RuiExpandCollapse);
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
