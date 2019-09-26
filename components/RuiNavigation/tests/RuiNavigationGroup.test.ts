/* eslint @typescript-eslint/explicit-function-return-type: 0 */
/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import '../../RuiNavigationGroup/src';
import TestUtils from '../../../TestUtils';

describe('RuiNavigationGroup', () => {

	it('Renders', async () => {
		const ele = await TestUtils.render('rui-navigation-group', {}, '');
		expect(ele).toBeDefined();

		// Enable if your component has a shadow root
		// expect(ele.shadowRoot).toBeDefined();
	});

});
