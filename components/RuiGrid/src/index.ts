/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */
export const tag = 'rui-grid';

// Register the new element with the browser.
if (typeof window !== 'undefined' && !window.customElements.get(tag)) {
	import('./RuiGrid').then(module => {
		customElements.define(tag, module.RuiGrid);
	});
}
