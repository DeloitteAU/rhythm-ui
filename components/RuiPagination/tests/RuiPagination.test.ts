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

	// renders items given via items attribute
	// renders correct href for items
	// renders correct label for items
	// renders current page correctly


	// renders prev-link href correctly

	// renders next-link href correctly
	

	// renders items defined via num-pages attribute

	// renders truncation correctly 

	// renders custom prev-content slot item

	// renders custom next-content slot item

	// renders custom ellipses slot item
});
