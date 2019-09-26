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
import RuiNavigation from './RuiMenubar';
import RuiNavigationGroup from './RuiNavigationGroup';

export const register = (): void => {
	!customElements.get(RuiNavigation.tag) && customElements.define(RuiNavigation.tag, RuiNavigation);
	!customElements.get(RuiNavigationGroup.tag) && customElements.define(RuiNavigationGroup.tag, RuiNavigationGroup);
};

export default {
	register,
};

if (typeof process === 'undefined' || process.env.RUI_NO_DEFAULT_REGISTER !== 'true') {
	register();
}
