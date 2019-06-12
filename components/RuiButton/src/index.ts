/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */
export const register = (tag = 'rui-button') => {
	// Register the new element with the browser.
	if (typeof customElements !== 'undefined' && !customElements.get(tag)) {
		import('./RuiButton').then(module => {
			customElements.define(tag, module.RuiButton);
		});
	}
};
