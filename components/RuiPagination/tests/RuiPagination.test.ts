/* eslint @typescript-eslint/explicit-function-return-type: 0 */
/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import '../src';
import TestUtils from '../../../TestUtils';



describe('RuiPagination', () => {

	it('Renders', async () => {
		const ele = await TestUtils.render('rui-pagination', {}, '');
		expect(ele).toBeDefined();
	});

	// renders pagination items correctly

	// next/prev renders by default

	// disabled renders by default
	
	// current renders by default 

	// renders truncation correctly

	// uses given next link

	// uses given prev link

	// uses given next aria label

	// uses given prev aria label

	// allows generateHref override

	// allows generateLabel override

	// allows generateAriaLabel override

	// allows custom next element

	// allows custom prev element
});
