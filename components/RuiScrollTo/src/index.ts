/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

/**
 * Safari, Edge, IE11 require a smooth scroll polyfill currently
 */
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

/**
* Register the Web Component with customElements
* @param tag - The HTML tag to use
*/
export const register = async (tag: string = 'rui-scroll-to'): Promise<boolean> => {
	if (typeof customElements !== 'undefined' && !customElements.get(tag)) {
		// Register the new element with the DOM
		const m = await import('./RuiScrollTo');
		customElements.define(tag, m.RuiScrollTo);
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