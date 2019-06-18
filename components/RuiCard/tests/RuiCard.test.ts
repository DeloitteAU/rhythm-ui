/* eslint @typescript-eslint/explicit-function-return-type: 0 */
/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import '../src';
import { TestUtils } from '../../../TestUtils';

describe('RuiCard', () => {

	it('Renders content within the card', async () => {
		const ele = await TestUtils.render('rui-card', {}, 'I am card content');
		expect(ele).toBeDefined();
		expect(ele.shadowRoot).toBeDefined();
		expect(ele.innerHTML.includes('I am card content')).toBeTruthy();
	});

});
